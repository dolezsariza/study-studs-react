import React, { useState } from "react";
import "./Post.css";
import { Card, Link, Box } from "@material-ui/core";

export default function Post(props) {
    const [raised, setRaised] = useState(false);

    return (
        <Card
            raised={raised}
            className="post"
            onMouseOver={() => {
                setRaised(true);
            }}
            onMouseLeave={() => {
                setRaised(false);
            }}
        >
            <h4 className="post-title">{props.title}</h4>
            <p className="post-message">{props.message}</p>
            <Box className="row">
                <Link className="post-username">{props.ownerId}</Link>
                <p className="post-date">{props.date}</p>
            </Box>
        </Card>
    );
}
