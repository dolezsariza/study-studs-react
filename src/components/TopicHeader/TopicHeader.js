import React, { useState } from "react";
import { Card, Link, Box } from "@material-ui/core";
import "./TopicHeader.css";
import Date from "../Date/Date";
import history from "../../history";

export default function TopicHeader(props) {
    const [raised, setRaised] = useState(false);

    const toTopic = e => {
        console.log(e.currentTarget);
        history.push("/topic/" + props.id);
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
                <div className="topic-header-username">
                    <Link
                        onClick={e => {
                            e.stopPropagation();
                            history.push("/profile/" + props.ownerName);
                        }}
                        color="secondary"
                        className="username-link"
                    >
                        {props.ownerName}
                    </Link>
                </div>
                <Date className="topic-header-date">{props.date}</Date>
            </Box>
        </Card>
    );
}
