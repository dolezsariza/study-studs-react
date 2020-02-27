import React, { Fragment } from "react";
import { Alert } from "@material-ui/lab";

const SuccessInfo = props => {
    if (props.show) {
        return (
            <div className="success-alert">
                <Alert
                    severity="success"
                    onClose={() => {
                        if (props.onClose) {
                            props.onClose();
                        }
                    }}
                >
                    {props.bodyText}
                </Alert>
            </div>
        );
    } else return null;
};

export default SuccessInfo;
