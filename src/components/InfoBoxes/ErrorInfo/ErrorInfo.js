import React, { Fragment, useEffect } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useState } from "react";

const ErrorInfo = props => {
    const [show, setShow] = useState(props.show);

    useEffect(() => {
        setShow(props.show);
    }, [props]);

    const close = () => {
        props.onClose();
        setShow(false);
    };

    useEffect(() => {
        if (props.show) {
            setTimeout(close, props.duration ? props.duration : 1500);
        }
    }, [props.show]);

    if (show) {
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
                    onClose={close}
                >
                    <AlertTitle>{props.HeaderText}</AlertTitle>
                    {props.bodyText}
                </Alert>
            </div>
        );
    } else return null;
};

export default ErrorInfo;
