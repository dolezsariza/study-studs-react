import React, { useEffect, Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import Groups from "../../components/Groups/Groups";
import { Box, Button, Link } from "@material-ui/core";
import Topics from "../../components/Topics/Topics";
import axios from "../../axios/axios";
import history from "../../history";
import Date from "../../components/Date/Date";

function Group(props) {
    const [data, setData] = useState(null);

    const topics = data ? data.topics : null;
    if (topics) topics.reverse();

    const { id } = useParams();

    useEffect(() => {
        const url = "/groups/" + id;
        axios.get(url).then(resp => setData(resp.data));
    }, []);

    if (!data) {
        return null;
    }

    return (
        <Box className="group">
            <Box className="group-info">
                <Box className="row">
                    <h2 className="group-title">{data.title}</h2>
                    <div className="group-username">
                        <Link
                            color="secondary"
                            href={"/profile/" + data.ownerName}
                        >
                            {data.ownerName}
                        </Link>
                    </div>
                </Box>
                <Box className="row">
                    <p className="group-message">{data.description}</p>
                </Box>
                <Box className="row">
                    <Box className="group-actions">
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={() => {
                                history.push("/group/" + id + "/topic");
                            }}
                        >
                            Create new topic in group
                        </Button>
                    </Box>
                    {data.date ? (
                        <Date className="topic-date">{data.date}</Date>
                    ) : (
                        <Fragment />
                    )}
                </Box>
            </Box>
            <Box className="topics">
                <Topics topics={topics}></Topics>
            </Box>
        </Box>
    );
}

export default Group;
