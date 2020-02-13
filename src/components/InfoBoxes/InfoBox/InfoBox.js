import SuccessInfo from "../SuccessInfo/SuccessInfo";
import ErrorInfo from "../ErrorInfo/ErrorInfo";

import React, { Fragment } from "react";

const InfoBox = props => {
    return (
        <Fragment>
            <SuccessInfo
                show={props.showSuccess}
                headerText={"Success message"}
                bodyText={"Action completed successfully"}
            />
            <ErrorInfo
                show={props.showError}
                headerText={"Error message"}
                bodyText={props.errorMessage}
            />
        </Fragment>
    );
};

export default InfoBox;

