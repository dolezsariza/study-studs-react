import React, { useState } from "react";
import { Card, Link, Box } from "@material-ui/core";
import "./TopicHeader.css";
import Date from "../Date/Date";

export default function TopicHeader(props) {
    const [raised, setRaised] = useState(false);

    const toTopic = () => {
        props.history.push("/topic/" + props.id);
    };

    return (
        <Card
            raised={raised}
            className="topic-header"
            onClick={toTopic}
            onMouseOver={() => {
                setRaised(true);
            }}
            onMouseLeave={() => {
                setRaised(false);
            }}
        >
            <h4 className="topic-header-title">{props.title}</h4>
            <p className="topic-header-message">{props.description}</p>
            <Box className="row">
                <Link
                    href={"/profile/" + props.ownerName}
                    color="secondary"
                    className="topic-header-username"
                >
                    {props.ownerName}
                </Link>
                <Date className="topic-header-date">{props.date}</Date>
            </Box>
        </Card>
    );
}
