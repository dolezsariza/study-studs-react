import React, { useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import Groups from "../../components/Groups/Groups";
import { Box, Button, Link } from "@material-ui/core";
import { connect } from "react-redux";
import { getData, removeData } from "../../store/actions/repositoryActions";
import { closeErrorInfo } from "../../store/actions/errorHandlerActions";
import Date from "../../components/Date/Date";

function Group(props) {
    const groups = props.data ? props.data.groups : null;
    if (groups) groups.reverse();

    const { id } = useParams();

    useEffect(() => {
        const url = "/groups/" + id;
        props.onGetData(url, props);
        return () => {
            props.onRemoveData();
        };
    }, []);

    if (!props.data) {
        return null;
    }

    return (
        <Box className="group">
            <Box className="group-info">
                <Box className="row">
                    <h2 className="group-title">{props.data.title}</h2>
                    <div className="group-username">
                        <Link
                            color="secondary"
                            href={"/profile/" + props.data.ownerName}
                        >
                            {props.data.ownerName}
                        </Link>
                    </div>
                </Box>
                <Box className="row">
                    <p className="group-description">{props.data.description}</p>
                </Box>
                <Box className="row">
                    <Box className="group-actions">
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={() => {
                                props.history.push("/group/" + id + "/topic");
                            }}
                        >
                            Add Topic
                        </Button>
                    </Box>
                    {props.data.date ? (
                        <Date className="topic-date">{props.data.date}</Date>
                    ) : (
                        <Fragment />
                    )}
                </Box>
            </Box>
            <Box className="groups">
                <Groups groups={groups}></Groups>
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
        onCloseError: () => dispatch(closeErrorInfo()),
        onRemoveData: () => dispatch(removeData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);
