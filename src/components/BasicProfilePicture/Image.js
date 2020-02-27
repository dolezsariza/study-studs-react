import React from "react";
import defaultPicture from "../../images/defaultPicture.jpg";

export default function Image(image) {
    console.log(image);
    if (image.image != null) {
        return (
            <img
                height="150"
                width="150"
                src={image}
                alt=""
                className="profile-picture"
            />
        );
    }
    return (
        <img
            height="150"
            width="150"
            src={defaultPicture}
            alt="Noimage"
            className="profile-picture"
        />
    );
}
