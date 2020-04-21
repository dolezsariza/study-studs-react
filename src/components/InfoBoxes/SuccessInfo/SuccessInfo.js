import React, { Fragment, useState, useEffect } from "react";
import { Alert } from "@material-ui/lab";

const SuccessInfo = props => {
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
            setTimeout(close, props.duration?props.duration:1500);
        }
    }, [props.show]);

    if (show) {
        return (
            <div className="success-alert">
                <Alert severity="success" onClose={close}>
                    {props.bodyText}
                </Alert>
            </div>
        );
    } else return null;
};

export default SuccessInfo;
