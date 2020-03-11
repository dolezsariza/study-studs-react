import React, { useState, Fragment, useEffect } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";
import InfoBox from "../../components/InfoBoxes/InfoBox/InfoBox";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "../../axios/axios";
import history from "../../history";

function PostToTopic(props) {
    let { id } = useParams();
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [user, setUser] = useContext(UserContext);
    const [response, setResponse] = useState(null);

    const tryPost = () => {
        if (id) {
            const url = "topics/" + id;
            setLoading(true);
            if (title.length > 0 && message.length > 0) {
                axios
                    .post(url, {
                        ownerId: user.userId,
                        title: title,
                        message: message
                    })
                    .then(resp => setResponse(resp));
            } else {
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        if (response) {
            setLoading(false);

            if (response.status === 200) {
                history.push("/topic/" + id);
            }
        }
    }, [response]);

    if (user.userId == "" || user.userId == null) {
        return (
            <div className="page-container">
                <h4>You need to be logged in to post!</h4>
            </div>
        );
    }

    return (
        <Fragment>
            <h3>Post to topic</h3>
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
                            label="Message"
                            autoComplete="off"
                            variant="outlined"
                            onChange={e => {
                                setMessage(e.target.value);
                            }}
                            onFocus={e => {
                                setMessage(e.target.value);
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
                                onClick={tryPost}
                            >
                                Post
                            </Button>
                        )}
                    </Box>
                </form>
            </div>
        </Fragment>
    );
}

export default PostToTopic;
