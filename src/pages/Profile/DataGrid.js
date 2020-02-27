import React from "react";
import Image from "../../components/BasicProfilePicture/Image";
import Grid from "@material-ui/core/Grid";
import "./Datagrid.css";

export default function DataGrid(props) {
    return (
        <div className="data-container">
            <Grid
                container
                spacing={2}
                direction="column"
                className="profile-content"
            >
                <Grid item xs>
                    <h2 className="name">
                        {props.data.firstName} {props.data.lastName} (
                        {props.data.nickName})
                    </h2>
                </Grid>
                <Grid item xs className="profile-picture">
                    <Image image={props.data.profilePicture} />
                </Grid>

                <Grid item xs={12}>
                    <h3 className="details">Details:</h3>
                </Grid>

                <Grid container direction="row" spacing={2} className="detail">
                    <Grid item xs={2}>
                        <h4 className="header">School:</h4>
                    </Grid>
                    <Grid item className="content school" xs>
                        <p className="content city">{props.data.school}</p>
                    </Grid>
                </Grid>
                <Grid container direction="row" className="detail">
                    <Grid item xs={2}>
                        <h4 className="header">City:</h4>
                    </Grid>
                    <Grid item xs>
                        <p className="content city">{props.data.city}</p>
                    </Grid>
                </Grid>
                <Grid container direction="row" className="detail">
                    <Grid item xs={2}>
                        <h4 className="header">Introduction:</h4>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <p className="content introduction">
                            {props.data.introduction}
                        </p>
                    </Grid>
                </Grid>
                <Grid container direction="row" className="detail">
                    <Grid item xs={2}>
                        <h4 className="header">Interests:</h4>
                    </Grid>
                    <Grid item xs>
                        <p className="content intersts">
                            {props.data.interests}
                        </p>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
