import React, { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import "./Navigation.css";
import { UserContext } from "../../context/UserContext";

export default function Navigation() {
    const [user, setUser] = useContext(UserContext);

    console.log(user);
    if (!user) return null;

    return (
        <nav>
            <div className="logo"></div>
            <ul className="nav-links nav-links-left">
                <li>
                    <div className="link-wrapper">
                        <NavLink activeClassName="is-active" to={"/"} exact>
                            Home
                        </NavLink>
                    </div>
                </li>
            </ul>
            <ul className="nav-links nav-links-right">
                {!user.loggedIn ? (
                    <Fragment>
                        <li>
                            <div className="link-wrapper">
                                <NavLink to={"/login"} exact>
                                    <Button variant="contained" color="primary">
                                        Login
                                    </Button>
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <div className="link-wrapper">
                                <NavLink to={"/register"} exact>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                    >
                                        Register
                                    </Button>
                                </NavLink>
                            </div>
                        </li>
                    </Fragment>
                ) : (
                    <Fragment>
                        <li>
                            <div className="link-wrapper">
                                <NavLink to={`/profile/${user.username}`} exact>
                                    <Button variant="contained" color="primary">
                                        Profile
                                    </Button>
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <div className="link-wrapper">
                                <NavLink to={"/logout"} exact>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                    >
                                        Logout
                                    </Button>
                                </NavLink>
                            </div>
                        </li>
                    </Fragment>
                )}
            </ul>
        </nav>
    );
}
