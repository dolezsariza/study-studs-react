import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {

    return (
        <nav>
            <div className="logo">
            </div>
            <ul className="nav-links">
            <li>
                <div className="link-wrapper">
                    <NavLink to={"/"} exact>
                        Home
                    </NavLink>
                </div>
            </li>
        </ul>
        </nav>
    );
}
