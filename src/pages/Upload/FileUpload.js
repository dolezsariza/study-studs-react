import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import axios from "../../axios/axios";
import history from "../../history";
import "./FileUpload.css";

export default function FileUpload() {
    const [file, setFile] = useState(null);
    const { id: topicId } = useParams();

    const upload = () => {
        const data = new FormData();
        data.append("file", file);
        data.append("TopicId", topicId);
        data.append("FileName", file.name);
        axios.post("/files", data).then(res => {
            if (res.status === 201) history.push("/topic/" + topicId);
            else history.push("/500");
        });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <div className="file-input">
                        <label>Upload Your File </label>
                    </div>
                    <div className="file-input">
                        <input
                            type="file"
                            className="form-control"
                            name="file"
                            onChange={event => {
                                setFile(event.target.files[0]);
                            }}
                        />
                    </div>

                    <Button
                        id="uploadBtn"
                        color="primary"
                        variant="contained"
                        onClick={upload}
                    >
                        Upload
                    </Button>
                    <Button
                        id="backToTopicBtn"
                        color="secondary"
                        variant="contained"
                        onClick={() => history.push(`/topic/${topicId}`)}
                    >
                        Back to topic
                    </Button>
                </div>
            </div>
        </div>
    );
}
