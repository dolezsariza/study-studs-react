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
                    onClose={props.onClose}
                    duration={props.duration}
                />
            </div>
            <div>
                <ErrorInfo
                    className="error-alert"
                    show={props.showError}
                    headerText={"Error message"}
                    bodyText={props.errorMessage}
                    onClose={props.onClose}
                    duration={props.duration}
                />
            </div>
        </Fragment>
    );
};

export default InfoBox;
