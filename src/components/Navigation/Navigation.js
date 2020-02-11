import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {

    return (
        <nav>
            <div class="logo">
            </div>
            <ul class="nav-links">
            <li>
                <div class="link-wrapper">
                    <NavLink to={"/"} exact>
                        Home
                    </NavLink>
                </div>
            </li>
        </ul>
        </nav>
    );
}
