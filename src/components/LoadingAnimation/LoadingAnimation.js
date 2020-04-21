import React from "react";
import "./LoadingAnimation.css";
import svg from "./LoadingAnimation.svg";

export default function LoadingAnimation() {
    return (
        <div className="loading-animation">
            <img width="50" height="50" alt="loading..." src={svg}></img>
        </div>
    );
}
