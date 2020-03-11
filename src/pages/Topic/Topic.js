import React, { useEffect, Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import "./Topic.css";
import Posts from "../../components/Posts/Posts";
import { Box, Button, Link } from "@material-ui/core";
import { connect } from "react-redux";
import { getData, removeData } from "../../store/actions/repositoryActions";
import { closeErrorInfo } from "../../store/actions/errorHandlerActions";
import Date from "../../components/Date/Date";
import axios from "../../axios/axios";

function Topic(props) {
    const [data, setData] = useState(null);

    const posts = data ? data.posts : null;
    if (posts) posts.reverse();

    const { id } = useParams();

    useEffect(() => {
        const url = "/topics/" + id;
        axios.get(url).then(resp => setData(resp.data));
    }, []);

    if (!data) {
        return null;
    }

    return (
        <Box className="topic">
            <Box className="topic-info">
                <Box className="row">
                    <h2 className="topic-title">{data.title}</h2>
                    <div className="topic-username">
                        <Link
                            color="secondary"
                            href={"/profile/" + data.ownerName}
                        >
                            {data.ownerName}
                        </Link>
                    </div>
                </Box>
                <Box className="row">
                    <p className="topic-message">{data.description}</p>
                </Box>
                <Box className="row">
                    <Box className="topic-actions">
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={() => {
                                props.history.push("/topic/" + id + "/post");
                            }}
                        >
                            Add Post
                        </Button>
                    </Box>
                    {data.date ? (
                        <Date className="post-date">{data.date}</Date>
                    ) : (
                        <Fragment />
                    )}
                </Box>
            </Box>
            <Box className="posts">
                <Posts posts={posts}></Posts>
            </Box>
        </Box>
    );
}

export default Topic;
