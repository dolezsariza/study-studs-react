import React, { useEffect, Fragment, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./Topic.css";
import Posts from "../../components/Posts/Posts";
import { Box, Button, Link } from "@material-ui/core";
import Date from "../../components/Date/Date";
import axios from "../../axios/axios";
import history from "../../history";
import {GroupContext} from '../../context/GroupContext';

function Topic(props) {
    const [data, setData] = useState(null);
    const[group, setGroup] = useContext(GroupContext);

    const groupName = group.groupName;
    const groupId = group.groupId;

    const posts = data ? data.posts : null;
    if (posts) posts.reverse();

    const { id } = useParams();

    useEffect(() => {
        const url = "/topics/" + id;
        axios.get(url).then(resp => setData(resp.data));
    }, [id]);

    if (!data) {
        return null;
    }

    return (
        <Box className="topic">
        <Button
            variant="contained"
            color="secondary"
            onClick={() => {
                history.push("/groups/" + groupId);
            }}
        >
            Back to {groupName}
        </Button>
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
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                history.push("/topics/" + id + "/allfile");
                            }}
                        >
                            Files
                        </Button>
                        <Button
                            id="topicFileUploadBtn"
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                history.push("/topics/" + id + "/fileupload");
                            }}
                        >
                            Upload File
                        </Button>
                        <Button
                            id="topicAddPostBtn"
                            color="primary"
                            variant="contained"
                            onClick={() => {
                                history.push("/topics/" + id + "/post");
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
