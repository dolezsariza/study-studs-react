import React from "react";

export default function Date(props) {
    const formatDate = date => {
        const regex = /[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/g;
        return date.match(regex);
    };
    const date = formatDate(props.children);
    return <p className={props.className}>{date}</p>;
}
