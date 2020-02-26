import React from "react";
import "./Post.css";
import { Card, Link, Box } from "@material-ui/core";

export default function Post(props) {
    return (
        <Card className="post">
            <h4 className="post-title">{props.title}</h4>
            <p className="post-message">{props.message}</p>
            <Box class="row">
                <Link className="post-username">{props.username}</Link>
                <p className="post-creation-date">{props.creationDate}</p>
            </Box>
        </Card>
    );
}
