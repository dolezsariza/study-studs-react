import React, { Fragment } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { connect } from "react-redux";
import { closeErrorInfo } from "../../../store/actions/errorHandlerActions";

const ErrorInfo = props => {
    if (props.show) {
        return (
            <div className="error-alert">
                <Alert
                    severity="error"
                    style={
                        props.show
                            ? {
                                  opacity: "1",
                                  display: "box"
                              }
                            : {
                                  opacity: "0",
                                  display: "none"
                              }
                    }
                    onClose={() => {
                        if (props.onClose) {
                            props.onClose();
                        }
                        if (props.onCloseError) {
                            props.onCloseError();
                        }
                    }}
                >
                    <AlertTitle>{props.HeaderText}</AlertTitle>
                    {props.bodyText}
                </Alert>
            </div>
        );
    } else return null;
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        onCloseError: () => dispatch(closeErrorInfo())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorInfo);
