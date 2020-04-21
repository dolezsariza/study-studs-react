import React, { useEffect, useState, useContext } from "react";
import axios from "../../axios/axios";
import { deleteState } from "../../localStorage";
import { UserContext } from "../../context/UserContext";
import history from "../../history";

function Logout(props) {
    const url = "/logout";
    const [response, setResponse] = useState("");
    const [user, setUser] = useContext(UserContext);
    useEffect(() => {
        axios.post(url).then((resp) => setResponse(resp));
    }, []);

    useEffect(() => {
        if (response) {
            if (response.status === 200) {
                console.log("Logged out! ");
                deleteState();
                setUser({ userName: "", userId: "", loggedIn: false });
                history.push("/");
            }
        }
    }, [response, setUser]);

    return null;
}

export default Logout;
