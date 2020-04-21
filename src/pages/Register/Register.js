import React, { useState, Fragment, useEffect } from "react";
import { TextField, Box, Button } from "@material-ui/core";
import "../Login/Login.css";
import { connect } from "react-redux";
import InfoBox from "../../components/InfoBoxes/InfoBox/InfoBox";
import "./Register.css";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";
import axios from "../../axios/axios";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function Register(props) {
    const [userName, setUserName] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const url = "/register";

    const [response, setResponse] = useState(null);
    const [user, setUser] = useContext(UserContext);

    const [error, setError] = useState("");

    const tryRegister = () => {
        const valid =
            userNameError.length === 0 &&
            emailError.length === 0 &&
            passwordError.length === 0;

        if (valid) {
            setLoading(true);
            axios
                .post(url, {
                    userName,
                    password,
                    email
                })
                .then(response => {
                    console.log(response);
                    setResponse(response);
                })
                .catch(err => {
                    setError(err.response.data);
                })
                .then(()=>{
                    setLoading(false);
                })
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

    useEffect(() => {
        if (response) {
            if (response.status === 201) {
                console.log("Registered! ");
                setSuccess(true);
            }
        }
    }, [response]);

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
            <div className="page-container">
                <InfoBox
                    showSuccess={success}
                    onClose={() => setSuccess(false)}
                />
                <InfoBox
                    showError={error.length > 0}
                    errorMessage={error}
                    onClose={() => setError("")}
                />
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
                        {loading ? (
                            <LoadingAnimation />
                        ) : (
                            <Button
                                variant="contained"
                                color="primary"
                                className="login-btn"
                                onClick={tryRegister}
                            >
                                Register
                            </Button>
                        )}
                    </Box>
                </form>
            </div>
        </Fragment>
    );
}

export default Register;
