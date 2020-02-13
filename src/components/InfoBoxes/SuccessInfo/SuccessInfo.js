import React, { Fragment } from "react";
import { Alert } from "@material-ui/lab";

const SuccessInfo = props => {
    if (props.show) {
        return (
            <Fragment>
                <Alert severity="success">
                    {props.bodyText}
                </Alert>
            </Fragment>
        );
    } else return null;
};

export default SuccessInfo;
