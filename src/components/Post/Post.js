import React, { useState } from "react";
import "./Post.css";
import { Card, Link, Box } from "@material-ui/core";
import Date from "../Date/Date";

export default function Post(props) {
    return (
        <Card className="post">
            <h4 className="post-title">{props.title}</h4>
            <p className="post-message">{props.message}</p>
            <Box className="row">
                <div className="post-username">
                    <Link
                        href={"/profile/" + props.ownerName}
                        color="secondary"
                    >
                        {props.ownerName}
                    </Link>
                </div>
                <Date className="post-date">{props.date}</Date>
            </Box>
        </Card>
    );
}
