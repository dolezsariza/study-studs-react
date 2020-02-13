import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import "./Navigation.css";

export default function Navigation() {
    const loggedIn = useSelector(state => state.loggedIn.loggedIn);

    return (
        <nav>
            <div className="logo"></div>
            <ul className="nav-links nav-links-left">
                <li>
                    <div className="link-wrapper">
                        <NavLink to={"/"} exact>
                            Home
                        </NavLink>
                    </div>
                </li>
            </ul>
            <ul className="nav-links nav-links-right">
                {!loggedIn ? (
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
