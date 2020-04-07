import React, { useEffect, Fragment, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Link } from "@material-ui/core";
import Topics from "../../components/Topics/Topics";
import axios from "../../axios/axios";
import history from "../../history";
import Date from "../../components/Date/Date";
import {GroupContext} from "../../context/GroupContext";

function Group(props) {
    
    const [data, setData] = useState(null);
    
    const topics = data ? data.topics : null;
    if (topics) topics.reverse();
    
    const { id } = useParams();
    const[group, setGroup] = useContext(GroupContext);

    useEffect(() => {
        const url = "/groups/" + id;
        axios.get(url).then(resp => {
            setData(resp.data);
            setGroup({groupName: resp.data.title, groupId:id})
        })

    }, []);
    
    if (!data) {
        return null;
    }
    
    return (
        <Box className="group">
            <Box className="group-info">
                <Box className="row">
                    <h2 className="group-title">{data.title}</h2>
                </Box>
                    <div className="group-username">
                        by <Link
                            color="secondary"
                            href={"/profile/" + data.ownerName}
                        >
                            {data.ownerName}
                        </Link>
                    </div>
                <Box className="row">
                    <p className="group-message">{data.description}</p>
                
                {data.date ? (
                        <Date className="topic-date">{data.date}</Date>
                    ) : (
                        <Fragment />
                    )}
                </Box>
                <Box className="row">
                    <Box className="group-actions">
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={() => {
                                history.push("/groups/" + id + "/topic");
                            }}
                        >
                            Create new topic in group
                        </Button>
                    </Box>
                    
                </Box>
            </Box>
            <br></br>
            <Box className="topics">
                <Topics topics={topics}></Topics>
            </Box>
        </Box>
    );
}

export default Group;
