import "./Profile.css";
import React, { useEffect, Fragment, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import Datagrid from "./DataGrid";
import { Button } from "@material-ui/core";
import { useState } from "react";
import axios from "../../axios/axios";
import { UserContext } from "../../context/UserContext";

function Profile(props) {
    const { username } = useParams();
    const url = `/profile/${username}`;
    const [data, setData] = useState(null);
    const [user, SetUser] = useContext(UserContext);

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
            
            {user.userName === username ? (
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
            ) : (
                <div></div>
            )}
            
        </Fragment>
    );
}

//Ha van topic, akkor topic gomb a ~/topics

export default Profile;
