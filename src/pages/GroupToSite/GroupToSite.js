import React, { useState, Fragment, useEffect } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "../../axios/axios";
import history from "../../history";

function GroupToSite(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useContext(UserContext);
    const [response, setResponse] = useState(null);

    const tryGroup = () => {
        const url = "groups";
        setLoading(true);
        if (title.length > 0 && description.length > 0) {
            axios
                .post(url, {
                    ownerId: user.userId,
                    ownerName: user.userName,
                    title: title,
                    description: description
                })
                .then(resp => setResponse(resp));
        } else {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (response) {
            setLoading(false);
            if (response.status === 201) {
                history.push("/");
            }
        }
    }, [response]);

    if (user.userId == "" || user.userId == null) {
        return (
            <div className="page-container">
                <h4>You need to be logged in to add topics!</h4>
            </div>
        );
    }

    return (
        <Fragment>
            <h3>Add new group</h3>
            <div className="page-container">
                <form
                    autoComplete="off"
                    onSubmit={e => {
                        e.preventDefault();
                    }}
                >
                    <Box className="textfield-container">
                        <TextField
                            className="textfield"
                            variant="outlined"
                            required
                            autoComplete="off"
                            label="Title"
                            onChange={e => {
                                setTitle(e.target.value);
                            }}
                            onFocus={e => {
                                setTitle(e.target.value);
                            }}
                        />
                    </Box>
                    <Box className="textfield-container">
                        <TextField
                            className="textfield"
                            required
                            label="Decription"
                            autoComplete="off"
                            variant="outlined"
                            onChange={e => {
                                setDescription(e.target.value);
                            }}
                            onFocus={e => {
                                setDescription(e.target.value);
                            }}
                            multiline
                            rows="4"
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
                                type="submit"
                                onClick={tryGroup}
                            >
                                Add Group
                            </Button>
                        )}
                    </Box>
                </form>
            </div>
        </Fragment>
    );
}

export default GroupToSite;
