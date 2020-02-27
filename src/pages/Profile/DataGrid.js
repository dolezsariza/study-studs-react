import React from "react";
import Image from "../../components/BasicProfilePicture/Image";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

export default function DataGrid(props) {
    return (
        <Grid container spacing={2} className="profile-content">
            <Grid item xs className="profile-picture">
                <Image image={props.profilePicture} />
            </Grid>
            <Grid item xs>
                <h2 className="name">
                    {props.firstName} {props.lastName} ({props.nickName})
                </h2>
            </Grid>

            <Grid item xs={12}>
                <h3 className="details">Details:</h3>
            </Grid>

            <Grid container direction="column" spacing={2}>
                <Grid container direction="row" className="detail">
                    <Grid item xs={2}>
                        <h4 className="header">School:</h4>
                    </Grid>
                    <Grid item className="content school" xs>
                        {props.school}
                    </Grid>
                </Grid>
                <Grid container direction="row" className="detail">
                    <Grid item xs={2}>
                        <h4 className="header">City:</h4>
                    </Grid>
                    <Grid item className="content city" xs>
                        {props.city}
                    </Grid>
                </Grid>
                <Grid container direction="row" className="detail">
                    <Grid item xs={2}>
                        <h4 className="header">Introduction:</h4>
                    </Grid>
                    <Grid item className="content introduction" xs zeroMinWidth>
                        <Typography>{props.introduction}</Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row" className="detail">
                    <Grid item xs={2}>
                        <h4 className="header">Interests:</h4>
                    </Grid>
                    <Grid item className="content intersts" xs>
                        {props.interests}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
