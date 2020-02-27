import React, { useEffect } from "react";
import { connect } from "react-redux";
import { postData, removeData } from "../../store/actions/repositoryActions";
import { logout } from "../../store/actions/logInActions";

function Logout(props) {
    const url = "/logout";
    const response = props.response;

    useEffect(() => {
        props.onPostData(url, {}, { ...props });
        return () => {
            props.onRemoveData();
        };
    }, []);

    useEffect(() => {
        if (response) {
            if (response.status === 200) {
                props.onLogout();
                console.log("Logged out! ");
                props.history.push("/");
            }
        }
    }, [response]);

    console.log(response);

    return null;
}

const mapStateToProps = state => {
    return {
        response: state.repository.response
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPostData: (url, data, props) => dispatch(postData(url, data, props)),
        onLogout: () => dispatch(logout()),
        onRemoveData: () => dispatch(removeData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
