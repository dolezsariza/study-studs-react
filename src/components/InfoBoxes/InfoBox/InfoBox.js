import SuccessInfo from "../SuccessInfo/SuccessInfo";
import ErrorInfo from "../ErrorInfo/ErrorInfo";
import "./InfoBox.css";
import React, { Fragment } from "react";

const InfoBox = props => {
    return (
        <Fragment>
            <div>
                <SuccessInfo
                    show={props.showSuccess}
                    headerText={"Success message"}
                    bodyText={"Action completed successfully"}
                />
            </div>
            <div>
                <ErrorInfo
                    className="error-alert"
                    show={props.showError}
                    headerText={"Error message"}
                    bodyText={props.errorMessage}
                />
            </div>
        </Fragment>
    );
};

export default InfoBox;
