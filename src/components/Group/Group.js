import React, { useState } from "react";
import { Card, Link, Box } from "@material-ui/core";
import Date from "../Date/Date";

export default function Group(props) {
    return (
        <Card className="group">
            <h4 className="group-title">{props.title}</h4>
            <p className="group-message">{props.message}</p>
            <Box className="row">
                <div className="group-username">
                    <Link
                        href={"/profile/" + props.ownerName}
                        color="secondary"
                    >
                        {props.ownerName}
                    </Link>
                </div>
                <Date className="group-date">{props.date}</Date>
            </Box>
        </Card>
    );
}
