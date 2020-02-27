import React from "react";
import defaultPicture from "../../images/defaultPicture.jpg";

export default function Image(image) {
    console.log(image);
    if (image.image != null) {
        return <img src={image} alt="" className="profile-picture" />;
    }
    return (
        <img src={defaultPicture} alt="Noimage" className="profile-picture" />
    );
}
