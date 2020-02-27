import "./Profile.css";
import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getData } from "../../store/actions/repositoryActions";
import { useParams, NavLink } from "react-router-dom";
import Datagrid from "./DataGrid";
import { Button } from "@material-ui/core";

function Profile(props) {
    const { username } = useParams();
    const url = `/profile/${username}`;

    useEffect(() => {
        props.onGetData(url, props);
    }, [props, url]);

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
            <Datagrid data={props} />
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
const mapStateToProps = state => {
    return {
        ...state.repository.data,
        currentUserName: state.loggedIn.userName
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetData: (url, props) => dispatch(getData(url, props))
    };
};

//Ha van topic, akkor topic gomb a ~/topics

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
