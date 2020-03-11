import "./Profile.css";
import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getData } from "../../store/actions/repositoryActions";
import { useParams, NavLink } from "react-router-dom";
import Datagrid from "./DataGrid";
import { Button } from "@material-ui/core";
import { useState } from "react";
import axios from "../../axios/axios";

function Profile(props) {
    const { username } = useParams();
    const url = `/profile/${username}`;
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(url).then(resp => setData(resp.data));
    }, []);

    if (props.firstName === null) {
        return (
            <div className="btn">
                <NavLink to="/profile/edit" exact>
                    <Button
                        variant="contained"
                        color="primary"
                        className="create-btn"
                    >
                        Create Profile
                    </Button>
                </NavLink>
            </div>
        );
    }
    return (
        <Fragment>
            {data ? <Datagrid data={data} /> : <Fragment />}
            <div className="btn">
                <NavLink to="/profile/edit" exact>
                    <Button
                        variant="contained"
                        color="primary"
                        className="create-btn"
                    >
                        Edit Profile
                    </Button>
                </NavLink>
            </div>
        </Fragment>
    );
}

//Ha van topic, akkor topic gomb a ~/topics

export default Profile;
