import React from "react";
import "./Topic.css";
import Posts from "../../components/Posts/Posts";
import { Box, Button, Link } from "@material-ui/core";

export default function Topic() {
    const posts = [
        {
            id: "asdaoighaweiofhasdohj1",
            title: "Hello there",
            message:
                "MAofjshgpi aosfhqof ajdiajf fidjf ija oahwfoahfoasd aspksd asodkodoaoisd",
            creationDate: "2020.02.28",
            username: "username"
        },
        {
            id: "asdaoighaweiofhasdohj2",
            title: "Hello there",
            message:
                "MAofjshgpi aosfhqof ajdiajf fidjf ija oahwfoahfoasd aspksd asodkodoaoisd",
            creationDate: "2020.02.28",
            username: "username"
        },
        {
            id: "asdaoighaweiofhasdohj3",
            title: "Hello there",
            message:
                "MAofjshgpi aosfhqof ajdiajf fidjf ija oahwfoahfoasd aspksd asodkodoaoisd",
            creationDate: "2020.02.28",
            username: "username"
        },
        {
            id: "asdaoighaweiofhasdohj4",
            title: "Hello there",
            message:
                "MAofjshgpi aosfhqof ajdiajf fidjf ija oahwfoahfoasd aspksd asodkodoaoisd",
            creationDate: "2020.02.28",
            username: "username"
        },
        {
            id: "asdaoighaweiofhasdohj5",
            title: "Hello there",
            message:
                "MAofjshgpi aosfhqof ajdiajf fidjf ija oahwfoahfoasd aspksd asodkodoaoisd",
            creationDate: "2020.02.28",
            username: "username"
        }
    ];

    return (
        <Box className="topic">
            <Box className="topic-info">
                <Box className="row">
                    <h2 className="topic-title">Topic Title</h2>
                    <Link className="topic-username">Username</Link>
                </Box>
                <Box className="row">
                    <p className="topic-message">
                        This is a short description of the topic!
                    </p>
                </Box>
                <Box className="row">
                    <Box className="topic-actions">
                        <Button color="primary" variant="contained">
                            Add Post
                        </Button>
                    </Box>
                    <p className="topic-date">2020.02.26</p>
                </Box>
            </Box>
            <Box className="posts">
                <Posts posts={posts}></Posts>
            </Box>
        </Box>
    );
}
