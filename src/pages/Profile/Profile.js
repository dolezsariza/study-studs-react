import "./Profile.css";
import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getData } from "../../store/actions/repositoryActions";
import { useParams } from "react-router-dom";
import Datagrid from "./DataGrid";
import Delete from "./Delete";

function Profile(props) {
    const { username } = useParams();
    const url = `/profile/${username}`;

    useEffect(() => {
        props.onGetData(url, props);
    }, [props, url]);

    if (props.firstName === null) {
        return <h1>Fucked</h1>;
    }
    return (
        <Fragment>
            <Datagrid props={props} />
            <Delete
                username={username}
                currentUserName={props.currentUserName}
            />
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
