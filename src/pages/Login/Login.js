import React, { useState, Fragment, useEffect, useRef } from "react";
import { TextField, Box, Button } from "@material-ui/core";
import "./Login.css";
import {  connect } from "react-redux";
import { postData } from "../../store/actions/repositoryActions";
import InfoBox from "../../components/InfoBoxes/InfoBox/InfoBox";
import StudentIcon from "../../components/StudentIcon/StudentIcon"

function Login(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [onPassword, setOnPassword] = useState(false);

    const passwordRef = useRef(null);
    const url = "/Login";

    const tryLogin = () => {
        props.onPostData(
            url,
            {
                userName,
                password
            },
            { ...props }
        );
    };

    const response = props.response;
    const error = props.error;


    return (
        <Fragment>
        {error?  <InfoBox
        showError={true}
        errorMessage={error}
        />:<Fragment/>}
        <div className="page-container">
            <StudentIcon  onPassword={onPassword} eyeRotation = {userName.length}></StudentIcon>
            <form noValidate autoComplete="off">
                <Box className="textfield-container">
                    <TextField
                    onFocus ={()=>setOnPassword(false)}
                        id="username-input"
                        label="User Name"
                        autoComplete="current-username"
                        variant="outlined"
                        onChange={e => {
                            setUserName(e.target.value);
                        }}
                    />
                </Box>
                <Box className="textfield-container">
                    <TextField
                        onFocus ={()=>setOnPassword(true)}
                        className="textfield"
                        id="password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                    />
                </Box>
                <Box>
                    <Button
                        variant="contained"
                        color="primary"
                        className="login-btn"
                        onClick={tryLogin}
                    >
                        Login
                    </Button>
                </Box>
            </form>
        </div>
        </Fragment>
    );
}

const mapStateToProps = state => {
    return {
        repsonse: state.repository.response,
        error: state.errorHandler.errorMessage,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPostData: (url, data, props) => dispatch(postData(url, data, props))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
