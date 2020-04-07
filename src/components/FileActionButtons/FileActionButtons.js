import React from "react";
import { Box, Button } from "@material-ui/core";
import history from "../../history";
import "./FileActionButtons.css";

export default function FileActionButtons(props) {
    return (
        <Box className="file-actions">
            <Button
                id="fileUploadBtn"
                variant="contained"
                color="primary"
                onClick={() => {
                    history.push(`/topic/${props.topicId}/fileupload`);
                }}
            >
                Upload File
            </Button>
            <Button
                id="fileBackToTopicBtn"
                variant="contained"
                color="secondary"
                onClick={() => {
                    history.push(`/topic/${props.topicId}`);
                }}
            >
                Back to topic
            </Button>
        </Box>
    );
}
