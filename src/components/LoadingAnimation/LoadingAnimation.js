import React from "react";
import "./LoadingAnimation.css";
import svg from "./LoadingAnimation.svg";

export default function LoadingAnimation() {
    return (
        <div className="loading-animation">
            <img src={svg}></img>
        </div>
    );
}
