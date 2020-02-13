import React, { Fragment} from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

const ErrorInfo = props => {
    if (props.show) {
        return (
            <Fragment>
                <Alert severity="error">
                    <AlertTitle>{props.HeaderText}</AlertTitle>
                    {props.bodyText}
                </Alert>
            </Fragment>
        );
    } else return null;
};

export default ErrorInfo;
