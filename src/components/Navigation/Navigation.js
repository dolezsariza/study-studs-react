import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navigation.css";

export default function Navigation() {
    const loggedIn = useSelector(state => state.loggedIn.loggedIn);

    return (
        <nav>
            <div className="logo"></div>
            <ul className="nav-links">
                <li>
                    <div className="link-wrapper">
                        <NavLink to={"/"} exact>
                            Home
                        </NavLink>
                    </div>
                </li>
                {!loggedIn ? (
                    <Fragment>
                        <li>
                            <div className="link-wrapper">
                                <NavLink to={"/login"} exact>
                                    Login
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <div className="link-wrapper">
                                <NavLink to={"/register"} exact>
                                    Register
                                </NavLink>
                            </div>
                        </li>
                    </Fragment>
                ) : (
                    <Fragment></Fragment>
                )}
            </ul>
        </nav>
    );
}
