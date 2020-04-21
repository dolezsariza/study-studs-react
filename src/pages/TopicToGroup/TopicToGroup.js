import React, { useState, Fragment, useEffect } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { connect } from "react-redux";
//import { closeErrorInfo } from "../../store/actions/errorHandlerActions";
//import { postData, removeData } from "../../store/actions/repositoryActions";
import InfoBox from "../../components/InfoBoxes/InfoBox/InfoBox";
import axios from "../../axios/axios";
import history from "../../history";

function TopicToGroup(props) {
    let { id } = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [user, setUser] = useContext(UserContext);
    const [response, setResponse] = useState(null);

    const tryTopic = () => {
        if (id) {
            const url = "groups/" + id;
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
        }
    };

    useEffect(() => {
        if (response) {
            setLoading(false);

            if (response.status === 200) {
                history.push("/groups/" + id);
            }
        }
    }, [response]);

    // useEffect(() => {
    //     return () => {
    //         props.onRemoveData();
    //     };
    // }, []);

    if (user.userId == "" || user.userId == null) {
        return (
            <div className="page-container">
                <h4>You need to be logged in to add topics!</h4>
            </div>
        );
    }

    return (
        <Fragment>
            {/* {props.error ? (
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
            )} */}
            <h3>Add new topic to group</h3>
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
                                onClick={tryTopic}
                            >
                                Add Topic
                            </Button>
                        )}
                    </Box>
                </form>
            </div>
        </Fragment>
    );
}

// const mapStateToProps = state => {
//     return {
//         response: state.repository.response,
//         error: state.errorHandler.errorMessage,
//         userId: state.loggedIn.userId
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         onPostData: (url, data, props) => dispatch(postData(url, data, props)),
//         onCloseError: () => dispatch(closeErrorInfo()),
//         onRemoveData: () => dispatch(removeData())
//     };
// };

//export default connect(mapStateToProps, mapDispatchToProps)(TopicToGroup);
export default TopicToGroup;
