import React, { useState } from "react";
import { Card, Link, Box } from "@material-ui/core";
import "./TopicHeader.css";

export default function TopicHeader(props) {
    const [raised, setRaised] = useState(false);

    const toTopic = () => {
        props.history.push("/topic/" + props.id);
    };

    return (
        <Card
            raised={raised}
            className="post"
            onClick={toTopic}
            onMouseOver={() => {
                setRaised(true);
            }}
            onMouseLeave={() => {
                setRaised(false);
            }}
        >
            <h4 className="post-title">{props.title}</h4>
            <p className="post-message">{props.description}</p>
            <Box className="row">
                <Link
                    href={"/profile/" + props.ownerId}
                    color="secondary"
                    className="post-username"
                >
                    {props.ownerId}
                </Link>
                <p className="post-date">{props.date}</p>
            </Box>
        </Card>
    );
}
