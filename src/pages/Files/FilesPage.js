import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios/axios";
import { Box } from "@material-ui/core";
import FileActionButtons from "../../components/FileActionButtons/FileActionButtons";
import Files from "../../components/Files/Files";

export default function FilesPage() {
    const [data, setData] = useState(null);
    const { id } = useParams();

    const files = data ? data : null;

    useEffect(() => {
        const url = `topics/${id}/files`;
        axios.get(url).then(result => {
            if (result.status !== 200) {
                return;
            }
            setData(result.data);
        });
    }, [id]);

    if (!data) {
        return null;
    }
    console.log(files);
    return (
        <Box className="files-container">
            <Box className="row">
                <h2 className="file-title">Files</h2>
            </Box>
            <Box className="row">
                <FileActionButtons topicId={id} />
            </Box>
            <Box className="files">
                <Files files={files} />
            </Box>
        </Box>
    );
}
