import React from "react";
import "./Files.css";
import File from "../File/File";

export default function Files(props) {
    if (props.files) {
        return props.files.map((file) => (
            <File
                setDelete={props.setDelete}
                key={file.id}
                id={file.id}
                title={file.fileName}
            />
        ));
    } else return null;
}
