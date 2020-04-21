import React, { useEffect, Fragment, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Link } from "@material-ui/core";
import Topics from "../../components/Topics/Topics";
import axios from "../../axios/axios";
import history from "../../history";
import Date from "../../components/Date/Date";
import {GroupContext} from "../../context/GroupContext";
import {UserContext} from "../../context/UserContext";

function Group(props) {
    
    const [data, setData] = useState(null);
    const [user, setUser] = useContext(UserContext);
    const userGroups = user.groups;
    
    const topics = data ? data.topics : null;
    if (topics) topics.reverse();
    
    const { id } = useParams();
    const[group, setGroup] = useContext(GroupContext);

    const open = e => {
        userGroups.push(parseInt(id));
            setUser({
                userName: user.userName,
                userId: user.userId,
                groups: Array.from(userGroups),
                loggedIn: true
            });
        history.push("/");

    }
    const join = e => {
        history.push({
            pathname: "/groups/"+ id + "/join",
            state: { groupName: group.groupName,
                     groupId: group.groupId }
          })
    }

    const leave = e => {
        history.push({
            pathname: "/groups/"+ id + "/leave",
            state: { groupName: group.groupName,
                     groupId: group.groupId }
          })
    }

    useEffect(() => {
        const url = "/groups/" + id;
        axios.get(url).then(resp => {
            setData(resp.data);
            setGroup({groupName: resp.data.title, groupId:id, hasUser: user.groups.includes(parseInt(id))})
        })

    }, []);
    
    if (!data) {
        return null;
    }
    
    return (
        <Box className="group">
            <Box className="group-info">
                <Box className="row">
                    <h2 className="group-title">{data.title}</h2>
                </Box>
                    <div className="group-username">
                        by <Link
                            color="secondary"
                            href={"/profile/" + data.ownerName}
                        >
                            {data.ownerName}
                        </Link>
                    </div>
                <Box className="row">
                    <p className="group-message">{data.description}</p>
                
                {data.date ? (
                        <Date className="topic-date">{data.date}</Date>
                    ) : (
                        <Fragment />
                    )}
                </Box>
                
                {group.hasUser ? (
                    <div>
                        <Box className="row">
                            <Box className="group-actions">
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={() => {
                                        history.push("/groups/" + id + "/topic");
                                    }}>
                                
                                    Create new topic in group
                                </Button>
                            </Box>
                            {data.ownerName == user.userName ?
                            (
                            <Button variant="contained"
                            color="secondary"
                            className="login-btn"
                            type="submit">Future delete button</Button>
                            ) : (
                                    <Button 
                                        variant="contained"
                                        onClick={leave}
                                        color="secondary"
                                        className="login-btn"
                                        type="submit">
                                            Leave group
                                    </Button>
                                )}
                            
                        </Box>
                        <Box>
                            <Box className="topics">
                                <Topics topics={topics}></Topics>
                            </Box>
                        </Box>
                    </div>
                ) : (
                    <Box>
                        {data.ownerName == user.userName ? (
                        <Button 
                            variant="contained"
                            onClick={open}
                            color="secondary"
                            className="login-btn"
                            type="submit">
                                Open group
                        </Button>
                        ) : (
                            <Button 
                                variant="contained"
                                onClick={join}
                                color="secondary"
                                className="login-btn"
                                type="submit">
                                    Join group
                            </Button>
                        )}
                        
                    </Box>
                        
                ) 
                }
                
            </Box>
        </Box>
    );
}

export default Group;
