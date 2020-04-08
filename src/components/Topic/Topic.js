import React, { useState } from "react";
import { Card, Link, Box } from "@material-ui/core";
import Date from "../Date/Date";

export default function Topic(props) {
    return (
        <Card className="topic">
            <h4 className="topic-title">{props.title}</h4>
            <p className="topic-message">{props.message}</p>
            <Box className="row">
                <div className="topic-username">
                    <Link
                        href={"/profile/" + props.ownerName}
                        color="secondary"
                    >
                        {props.ownerName}
                    </Link>
                </div>
                <Date className="topic-date">{props.date}</Date>
            </Box>
        </Card>
    );
}
