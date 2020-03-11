import React, { useState, Fragment, useEffect, useContext } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";
import axios from "../../axios/axios";

import { UserContext } from "../../context/UserContext";

function Editprofile(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nickName, setNickName] = useState("");
    const [school, setSchool] = useState("");
    const [city, setCity] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [interests, setInterests] = useState("");
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useContext(UserContext);
    //get username from context
    const url = `/profile/${user.userName}`;

    const tryEdit = () => {
        setLoading(true);
        axios
            .put(url, {
                firstName,
                lastName,
                nickName,
                school,
                city,
                introduction,
                interests
            })
            .then(response => {
                if (response.status === 200) {
                    console.log("Updated! ");
                    setLoading(false);
                    props.history.push(`/profile/${user.userName}`);
                }
                setLoading(false);
            });
    };

    useEffect(() => {
        axios.get(url).then(data => {
            const {
                firstName,
                lastName,
                nickName,
                school,
                city,
                introduction,
                interests
            } = data;
            setFirstName(firstName);
            setLastName(lastName);
            setSchool(school);
            setNickName(nickName);
            setCity(city);
            setIntroduction(introduction);
            setInterests(interests);
        });
    }, []);

    return (
        <Fragment>
            <div className="page-container">
                <form noValidate autoComplete="off">
                    <Grid
                        container
                        direction="column"
                        justify="space-between"
                        className="grid-container"
                    >
                        <Grid item sx className="textfield-container">
                            <TextField
                                className="textfield"
                                required
                                id="firstname-input"
                                label="First Name"
                                value={firstName}
                                variant="outlined"
                                onChange={e => {
                                    setFirstName(e.target.value);
                                }}
                                onFocus={e => {
                                    setFirstName(e.target.value);
                                }}
                            />
                        </Grid>
                        <Grid sx item className="textfield-container">
                            <TextField
                                className="textfield"
                                required
                                id="lastname-input"
                                label="Last Name"
                                value={lastName}
                                variant="outlined"
                                onChange={e => {
                                    setLastName(e.target.value);
                                }}
                                onFocus={e => {
                                    setLastName(e.target.value);
                                }}
                            />
                        </Grid>
                        <Grid sx item className="textfield-container">
                            <TextField
                                className="textfield"
                                required
                                id="nickname-input"
                                label="Nickname"
                                defaultValue={nickName}
                                variant="outlined"
                                onChange={e => {
                                    setNickName(e.target.value);
                                }}
                                onFocus={e => {
                                    setNickName(e.target.value);
                                }}
                            />
                        </Grid>

                        <Grid sx item className="textfield-container">
                            <TextField
                                className="textfield"
                                id="school-input"
                                label="School"
                                defaultValue={school}
                                variant="outlined"
                                onChange={e => {
                                    setSchool(e.target.value);
                                }}
                                onFocus={e => {
                                    setSchool(e.target.value);
                                }}
                            />
                        </Grid>
                        <Grid sx item className="textfield-container">
                            <TextField
                                className="textfield"
                                id="city-input"
                                label="City"
                                defaultValue={city}
                                variant="outlined"
                                onChange={e => {
                                    setCity(e.target.value);
                                }}
                                onFocus={e => {
                                    setCity(e.target.value);
                                }}
                            />
                        </Grid>

                        <Grid sx item className="textfield-container">
                            <TextField
                                className="textfield"
                                id="introduction-input"
                                label="Introduction"
                                multiline
                                defaultValue={introduction}
                                variant="outlined"
                                onChange={e => {
                                    setIntroduction(e.target.value);
                                }}
                                onFocus={e => {
                                    setIntroduction(e.target.value);
                                }}
                            />
                        </Grid>
                        <Grid sx item className="textfield-container">
                            <TextField
                                className="textfield"
                                id="interests-input"
                                label="Interests"
                                multiline
                                defaultValue={interests}
                                variant="outlined"
                                onChange={e => {
                                    setInterests(e.target.value);
                                }}
                                onFocus={e => {
                                    setInterests(e.target.value);
                                }}
                            />
                        </Grid>
                    </Grid>
                    <div className="btn-container">
                        <Grid item sx>
                            {loading ? (
                                <LoadingAnimation />
                            ) : (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="save-btn"
                                    onClick={tryEdit}
                                >
                                    Save
                                </Button>
                            )}
                        </Grid>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default Editprofile;
