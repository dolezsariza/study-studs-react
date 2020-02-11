import React,{useState, useEffect} from "react";
import { TextField, Box, Button } from "@material-ui/core";
import "./Login.css";
import {useDispatch, useSelector } from "react-redux"
import {postData } from "../../store/actions/repositoryActions";


export default function Login(props) {
    const dispatch = useDispatch();
    const [userName,setUserName] = useState();
    const [password, setPassword] = useState();

    const response = useSelector(state => state);

    const tryLogin = ()=>{
        dispatch(postData("/login", {
            userName: userName,
            password: password
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
                    onClick = {tryLogin}
                    >
                        Login
                    </Button>
                </Box>
            </form>
        </div>
    );
}
