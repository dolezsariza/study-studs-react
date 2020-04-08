import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import axios from "../../axios/axios";
import history from "../../history";
import InfoBox from "../../components/InfoBoxes/InfoBox/InfoBox";
import "./FileUpload.css";

export default function FileUpload() {
    const [file, setFile] = useState(null);
    const { id: topicId } = useParams();
    const [error, setError] = useState("");
    const types = ["text/plain", "image/jpeg", "image/png", "application/pdf"];

    const upload = () => {
        if (file == null) {
            setError("There is no file selected");
            return;
        }
        const data = new FormData();
        data.append("file", file);
        data.append("TopicId", topicId);
        data.append("FileName", file.name);
        axios.post("/files", data).then((res) => {
            if (res.status === 201)
                history.push("/topic/" + topicId + "/allfile");
            else history.push("/500");
        });
    };

    useEffect(() => {
        if (error !== "") {
            setTimeout(() => setError(""), 5000);
        }
    }, [error]);

    return (
        <Fragment>
            <InfoBox
                showError={error.length > 0}
                errorMessage={error}
                onClose={() => setError("")}
            />

            <div className="container">
                <div className="row">
                    <div className="offset-md-3 col-md-6">
                        <div className="file-input">
                            <label>Upload Your File </label>
                        </div>
                        <div className="file-input">
                            <input
                                accept={types.join(",")}
                                type="file"
                                className="form-control"
                                name="file"
                                onChange={(event) => {
                                    if (
                                        !types.includes(
                                            event.target.files[0].type
                                        )
                                    ) {
                                        setError(
                                            "Not supported file extension. The supported ones: .txt, .pdf, .jpg, .png"
                                        );
                                    } else {
                                        setFile(event.target.files[0]);
                                    }
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
        </Fragment>
    );
}
