import React, { useState, Fragment, useEffect } from "react";
import { TextField, Box, Button } from "@material-ui/core";
import "./Login.css";
import InfoBox from "../../components/InfoBoxes/InfoBox/InfoBox";
import StudentIcon from "../../components/StudentIcon/StudentIcon";
import axios from "../../axios/axios";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import history from "../../history";

function Login(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [onPassword, setOnPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useContext(UserContext);

    const tryLogin = () => {
        setLoading(true);
        axios
            .post("/login", {
                Username: userName,
                Password: password,
            })
            .then((response) => {
                if (response) {
                    if (response.status === 200) {
                        console.log("Logged in! ");
                        setUser({
                            userName: response.data[1],
                            userId: response.data[0],
                            loggedIn: true,
                        });
                        history.push("/");
                    }
                }
            })
            .catch((error) => {
                console.log(error);
                setError(error.response.data);
            })
            .then(setLoading(false));
    };

    useEffect(() => {
        if (error !== "") {
            setTimeout(() => setError(""), 3000);
        }
    }, [error]);

    return (
        <Fragment>
            <InfoBox
                showError={error.length > 0}
                errorMessage={error}
                onClose={() => setError("")}
            />
            <div
                className="page-container"
                onClick={(e) => {
                    if (e.target.id !== "password-input") setOnPassword(false);
                }}
            >
                <div style={{ paddingBottom: "20px" }}>
                    <StudentIcon
                        error={error}
                        onPassword={onPassword}
                        eyeRotation={userName.length}
                    ></StudentIcon>
                </div>
                <form noValidate autoComplete="off">
                    <Box className="textfield-container">
                        <TextField
                            autoFocus={true}
                            className="textfield"
                            onFocus={() => setOnPassword(false)}
                            id="username-input"
                            label="User Name"
                            autoComplete="current-username"
                            variant="outlined"
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                        />
                    </Box>
                    <Box className="textfield-container">
                        <TextField
                            onFocus={() => setOnPassword(true)}
                            className="textfield"
                            id="password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </Box>
                    <Box>
                        {loading ? (
                            <LoadingAnimation />
                        ) : (
                            <Button
                                onFocus={() => setOnPassword(false)}
                                variant="contained"
                                color="primary"
                                className="login-btn"
                                onClick={tryLogin}
                            >
                                Login
                            </Button>
                        )}
                    </Box>
                </form>
            </div>
        </Fragment>
    );
}

export default Login;
