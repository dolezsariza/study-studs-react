import React,{useState, useEffect} from "react";
import { TextField, Box, Button } from "@material-ui/core";
import "../Login/Login.css";
import {useDispatch, useSelector } from "react-redux"
import {postData } from "../../store/actions/repositoryActions";

export default function Register(props) {

    const dispatch = useDispatch();
    const [userName,setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const response = useSelector(state => state);

    const tryRegister = ()=>{
        dispatch(postData("/register", {
            userName: userName,
            password: password,
            email: email
        },props))
    }

    useEffect(() => {
        console.log(response)
    }, [response])

    return (
        <div className="page-container">
            <form noValidate autoComplete="off">
                <Box className="textfield-container">
                    <TextField
                        id="username-input"
                        label="User Name"
                        autoComplete="current-username"
                        variant="outlined"
                        onChange={(e)=>{setUserName(e.target.value)}}
                    />
                </Box>
                <Box className="textfield-container">
                    <TextField
                        id="email-input"
                        label="Email Address"
                        autoComplete="current-email"
                        variant="outlined"
                        onChange={(e)=>{setEmail(e.target.value)}}
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
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </Box>
                <Box>
                <Button 
                    variant="contained" 
                    color="primary"
                    className ="login-btn"
                    onClick = {tryRegister}
                    >
                        Login
                    </Button>
                </Box>
            </form>
        </div>
    );
}
