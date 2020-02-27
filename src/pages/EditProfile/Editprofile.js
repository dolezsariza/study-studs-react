import React, { useState, Fragment, useEffect } from "react";
import { getData } from "../../store/actions/repositoryActions";
import { connect } from "react-redux";
import { TextField, Grid, Button } from "@material-ui/core";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";
import axios from "../../axios/axios";
import "./Editprofile.css";

function Editprofile(props) {
    const [firstName, setFirstName] = useState(props.firstName);
    const [lastName, setLastName] = useState(props.lastName);
    const [nickName, setNickName] = useState(props.nickName);
    const [school, setSchool] = useState(props.school);
    const [city, setCity] = useState(props.city);
    const [introduction, setIntroduction] = useState(props.introduction);
    const [interests, setInterests] = useState(props.interests);
    const [loading, setLoading] = useState(false);

    const url = `/profile/${props.currentUserName}`;
    const tryEdit = () => {
        setLoading(true);
        axios
            .put(
                url,
                {
                    firstName,
                    lastName,
                    nickName,
                    school,
                    city,
                    introduction,
                    interests
                },
                props
            )
            .then(response => {
                if (response.status === 200) {
                    console.log("Updated! ");
                    setLoading(false);
                    props.history.push(`/profile/${props.currentUserName}`);
                }
                setLoading(false);
            });
    };

    useEffect(() => {
        props.onGetData(url, props);
    }, [props, url]);

    return (
        <Fragment>
            <div className="page-container">
                <form noValidate autoComplete="off">
                    <Grid
                        container
                        direction="column"
                        spacing={2}
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
                    <Grid item sx className="btn-container">
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
                </form>
            </div>
        </Fragment>
    );
}
const mapStateToProps = state => {
    return {
        ...state.repository.data,
        currentUserName: state.loggedIn.userName
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetData: (url, props) => dispatch(getData(url, props))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Editprofile);
