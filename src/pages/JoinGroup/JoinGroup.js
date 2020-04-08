import React, { useState, Fragment, useEffect } from "react";
import { Box, Link, Button } from "@material-ui/core";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "../../axios/axios";
import history from "../../history";

function JoinGroup(props) {
    const groupName = props.location.state.groupName;
    const groupId = props.location.state.groupId;

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useContext(UserContext);
    const [response, setResponse] = useState(null);
    const userGroups = user.groups;

    const joinGroup = () => {
        const url = `groups/${groupId}/join`;
        setLoading(true);
        if (groupId && user.userId) {
            axios
                .post(url, {
                    UserId: user.userId,
                    UserName: user.userName,
                    GroupId: groupId,
                    GroupName: groupName
                })
                .then(resp => setResponse(resp));
        } else {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (response) {
            userGroups.push(parseInt(groupId));
            setUser({
                userName: user.userName,
                userId: user.userId,
                groups: Array.from(userGroups),
                loggedIn: true
            });
            setLoading(false);
            if (response.status === 200) {
                history.push("/");
            }
        }
    }, [response]);

    if (user.userId == "" || user.userId == null) {
        return (
            <div className="page-container">
                <h4>You need to be logged in to join groups!</h4>
            </div>
        );
    }

    return (
        <Fragment>
            <h3>Join group "{groupName}"</h3>
            <div className="page-container">
                <form
                    autoComplete="off"
                    onSubmit={e => {
                        e.preventDefault();
                    }}
                >
                    
                    <Box>
                        {loading ? (
                            <LoadingAnimation />
                        ) : (
                            <Box>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="login-btn"
                                    type="submit"
                                    onClick={joinGroup}
                                >
                                    Join Group
                                </Button>
                                <Link onClick={e => {
                                e.stopPropagation();
                                history.push("/");
                                }}>
                                    <Button
                                    variant="contained"
                                    color="primary"
                                    className="login-btn"
                                    >
                                        Back to home
                                    </Button>
                                </Link>
                            </Box>
                        )}
                    </Box>
                </form>
            </div>
        </Fragment>
    );
}

export default JoinGroup;
