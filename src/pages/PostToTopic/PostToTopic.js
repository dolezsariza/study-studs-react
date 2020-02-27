import React, { useState, Fragment, useEffect } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";
import { connect } from "react-redux";
import { closeErrorInfo } from "../../store/actions/errorHandlerActions";
import { postData, removeData } from "../../store/actions/repositoryActions";
import InfoBox from "../../components/InfoBoxes/InfoBox/InfoBox";

function PostToTopic(props) {
    let { id } = useParams();
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const tryPost = () => {
        if (id) {
            const url = "topics/" + id;
            setLoading(true);
            if (title.length > 0 && message.length > 0) {
                props.onPostData(
                    url,
                    {
                        ownerId: props.userId,
                        title: title,
                        message: message
                    },
                    props
                );
            } else {
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        if (props.response) {
            setLoading(false);

            if (props.response.status == 200) {
                props.history.push("/topic/" + id);
            }
        }
    }, [props.response]);

    useEffect(() => {
        return () => {
            props.onRemoveData();
        };
    }, []);

    if (props.userId == "" || props.userId == null) {
        return (
            <div className="page-container">
                <h4>You need to be logged in to post!</h4>
            </div>
        );
    }

    return (
        <Fragment>
            {props.error ? (
                <InfoBox showError={true} errorMessage={props.error} />
            ) : (
                <Fragment />
            )}
            {success ? (
                <InfoBox
                    showSuccess={true}
                    onClose={() => {
                        setSuccess(false);
                    }}
                />
            ) : (
                <Fragment />
            )}
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

const mapStateToProps = state => {
    return {
        response: state.repository.response,
        error: state.errorHandler.errorMessage,
        userId: state.loggedIn.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPostData: (url, data, props) => dispatch(postData(url, data, props)),
        onCloseError: () => dispatch(closeErrorInfo()),
        onRemoveData: () => dispatch(removeData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostToTopic);
