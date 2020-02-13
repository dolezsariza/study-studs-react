import React, { Fragment } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

const SuccessInfo = props => {
    if (props.show) {
        return (
            <Fragment>
                <Alert severity="success">
                    <AlertTitle>{props.headerText}</AlertTitle>
                    {props.bodyText}
                </Alert>
            </Fragment>
        );
    } else return null;
};

export default SuccessInfo;
