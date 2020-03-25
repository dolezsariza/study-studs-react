import React, { useState } from "react";
import { Card, Link, Box } from "@material-ui/core";
import "./GroupHeader.css";
import Date from "../Date/Date";

export default function GroupHeader(props) {
    const [raised, setRaised] = useState(false);

    const toGroup = e => {
        console.log(e.currentTarget);
        props.history.push("/group/" + props.id);
    };

    return (
        <Card
            raised={raised}
            className="group-header"
            onClick={toGroup}
            onMouseOver={() => {
                setRaised(true);
            }}
            onMouseLeave={() => {
                setRaised(false);
            }}
        >
            <h4 className="group-header-title">{props.title}</h4>
            <p className="group-header-message">{props.description}</p>
            <Box className="row">
                <div className="group-header-username">
                    <Link
                        onClick={e => {
                            e.stopPropagation();
                            props.history.push("/profile/" + props.ownerName);
                        }}
                        color="secondary"
                        className="username-link"
                    >
                        {props.ownerName}
                    </Link>
                </div>
                <Date className="group-header-date">{props.date}</Date>
            </Box>
        </Card>
    );
}
