import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Topic.css";
import Posts from "../../components/Posts/Posts";
import { Box, Button, Link } from "@material-ui/core";
import { connect } from "react-redux";
import { getData } from "../../store/actions/repositoryActions";
import { closeErrorInfo } from "../../store/actions/errorHandlerActions";

function Topic(props) {
    const posts = props.data.posts;

    let { id } = useParams();
    useEffect(() => {
        const url = "/topics/" + id;
        console.log(id);
        props.onGetData(url, props);
    }, []);

    return (
        <Box className="topic">
            <Box className="topic-info">
                <Box className="row">
                    <h2 className="topic-title">{props.data.title}</h2>
                    <div className="topic-username">
                        <Link
                            color="secondary"
                            href={"/profile/" + props.data.ownerId}
                        >
                            {props.data.ownerId}
                        </Link>
                    </div>
                </Box>
                <Box className="row">
                    <p className="topic-message">{props.data.description}</p>
                </Box>
                <Box className="row">
                    <Box className="topic-actions">
                        <Button color="primary" variant="contained">
                            Add Post
                        </Button>
                    </Box>
                    <p className="topic-date">{props.data.date}</p>
                </Box>
            </Box>
            <Box className="posts">
                <Posts posts={posts}></Posts>
            </Box>
        </Box>
    );
}

const mapStateToProps = state => {
    return {
        data: state.repository.data,
        error: state.errorHandler.errorMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetData: (url, props) => dispatch(getData(url, props)),
        onCloseError: () => dispatch(closeErrorInfo())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
