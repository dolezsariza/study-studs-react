import React from "react";
import "./File.css";
import { Card, Button } from "@material-ui/core";
import axios from "../../axios/axios";
import { saveAs } from "file-saver";

export default function File(props) {
    const download = () => {
        axios.get(`files/${props.id}`).then(response => {
            console.log(response);
            const blob = new Blob([response.data], {
                type: response.headers["content-type"]
            });
            saveAs(blob, props.title);
        });
    };
    console.log(props);
    return (
        <Card className="file">
            <h4 className="file-title">{props.title}</h4>
            <Button
                id="downloadBtn"
                variant="contained"
                color="primary"
                onClick={download}
            >
                Download
            </Button>
        </Card>
    );
}
