import React, { useState, Fragment, useEffect } from "react";
import { TextField, Box, Button } from "@material-ui/core";
import "../Login/Login.css";
import { connect } from "react-redux";
import { postData } from "../../store/actions/repositoryActions";
import InfoBox from "../../components/InfoBoxes/InfoBox/InfoBox";
import { closeErrorInfo } from "../../store/actions/errorHandlerActions";
import "./Register.css";

function Register(props) {
    const [userName, setUserName] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [success, setSuccess] = useState(false);
    const url = "/register";

    const tryRegister = () => {
        const valid =
            userNameError.length === 0 &&
            emailError.length === 0 &&
            passwordError.length === 0;

        if (valid) {
            props.onPostData(
                url,
                {
                    userName,
                    password,
                    email
                },
                props
            );
        }
    };

    const validateUserName = () => {
        if (userName.length < 4) {
            setUserNameError("Username has to be at least 4 characters");
        } else {
            setUserNameError("");
        }
    };

    const validateEmail = () => {
        if (!/@/.test(email)) {
            setEmailError("Has to be a valid email address");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = () => {
        if (password.length < 4) {
            setPasswordError("Password has to be at least 4 characters");
        } else if (!/[A-Z]/.test(password)) {
            setPasswordError("Password must contain an Uppercase letter");
        } else if (!/\d/.test(password)) {
            setPasswordError("Password must contain a Digit");
        } else {
            setPasswordError("");
        }
    };

    const error = props.error;
    const response = props.response;

    useEffect(() => {
        if (response) {
            if (response.status === 201) {
                console.log("Registered! ");
                setSuccess(true);
            }
        }
    }, [response]);

    useEffect(() => {
        if (error) {
            setTimeout(props.onCloseError, 3000);
        }
    }, [error, props]);

    useEffect(() => {
        validateUserName();
    }, [userName]);

    useEffect(() => {
        validatePassword();
    }, [password]);

    useEffect(() => {
        validateEmail();
    }, [email]);

    return (
        <Fragment>
            {error ? (
                <InfoBox showError={true} errorMessage={error} />
            ) : (
                <Fragment />
            )}
            {success ? <InfoBox showSuccess={true} /> : <Fragment />}
            <div className="page-container">
                <form noValidate autoComplete="off">
                    <Box className="textfield-container">
                        <TextField
                            className="textfield"
                            error={userNameError.length > 0}
                            required
                            id="username-input"
                            label="User Name"
                            autoComplete="off"
                            variant="outlined"
                            onChange={e => {
                                setUserName(e.target.value);
                            }}
                            onFocus={e => {
                                setUserName(e.target.value);
                            }}
                            helperText={userNameError}
                        />
                    </Box>
                    <Box className="textfield-container">
                        <TextField
                            className="textfield"
                            required
                            error={emailError.length > 0}
                            id="email-input"
                            label="Email Address"
                            autoComplete="off"
                            variant="outlined"
                            onChange={e => {
                                setEmail(e.target.value);
                            }}
                            onFocus={e => {
                                setEmail(e.target.value);
                            }}
                            helperText={emailError}
                        />
                    </Box>
                    <Box className="textfield-container">
                        <TextField
                            error={passwordError.length > 0}
                            className="textfield"
                            required
                            id="password-input"
                            label="Password"
                            type="password"
                            autoComplete="off"
                            variant="outlined"
                            onChange={e => {
                                setPassword(e.target.value);
                            }}
                            helperText={passwordError}
                            onFocus={e => {
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
