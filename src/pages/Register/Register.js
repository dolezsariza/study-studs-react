import React, { useState , Fragment, useEffect} from "react";
import { TextField, Box, Button } from "@material-ui/core";
import "../Login/Login.css";
import { connect } from "react-redux";
import { postData } from "../../store/actions/repositoryActions";
import InfoBox from "../../components/InfoBoxes/InfoBox/InfoBox";
import {closeErrorInfo} from "../../store/actions/errorHandlerActions";


function Register(props) {

    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [success, setSuccess] = useState(false);

    const url = "/register";

    const tryRegister = () => {
        props.onPostData(url, {
            userName,
            password,
            email
        },
        props)
    };

    const error = props.error;
    const response = props.response;

    useEffect(() => {
        if(response){
            if(response.status === 201){
                console.log("Registered! ")
                setSuccess(true);
            }  
        }
    }, [response])


    useEffect(() => {
        if(error){
            setTimeout(props.onCloseError,3000);
        }
    }, [error, props])



    return (
        <Fragment>
            {error ? (
                <InfoBox showError={true} errorMessage={error} />
            ) : (
                <Fragment />
            )}
            {success ? (
                <InfoBox showSuccess={true} />
            ) : (
                <Fragment />
            )}
            <div className="page-container">
                <form noValidate autoComplete="off">
                    <Box className="textfield-container">
                        <TextField
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
                            id="email-input"
                            label="Email Address"
                            autoComplete="current-email"
                            variant="outlined"
                            onChange={e => {
                                setEmail(e.target.value);
                            }}
                        />
                    </Box>
                    <Box className="textfield-container">
                        <TextField
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
                            onClick={tryRegister}
                        >
                            Register
                        </Button>
                    </Box>
                </form>
            </div>
        </Fragment>
    );
}

const mapStateToProps = state => {
    return {
        response: state.repository.response,
        error: state.errorHandler.errorMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPostData: (url, data, props) => dispatch(postData(url, data, props)),
        onCloseError: () => dispatch(closeErrorInfo())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
