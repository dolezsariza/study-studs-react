import React, { useState , Fragment} from "react";
import { TextField, Box, Button } from "@material-ui/core";
import "../Login/Login.css";
import { connect } from "react-redux";
import { postData } from "../../store/actions/repositoryActions";
import InfoBox from "../../components/InfoBoxes/InfoBox/InfoBox";


function Register(props) {

    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

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

    console.log(error, response)

    return (
        <Fragment>
            {error ? (
                <InfoBox showError={true} errorMessage={error.title} />
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
        repsonse: state.repository.response,
        error: state.errorHandler.errorMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPostData: (url, data, props) => dispatch(postData(url, data, props))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
