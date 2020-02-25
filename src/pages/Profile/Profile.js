import "./Profile.css";
import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getData } from "../../store/actions/repositoryActions";

function Profile(props) {
  const url = `/profile/${props.id}`;

  useEffect(() => {
    props.onGetData(url, ...props);
  }, [props, url]);

  return (
    <Fragment>
      <div className="profile-picture">
        <img
          src={props.profilePicture}
          alt="../../BasicProfilePicture/defaultPicture.jpg"
        />
      </div>
      <h3 className="name">
        {props.firstName} {props.lastName} ({props.nickname})
      </h3>
      <div className="profile-details">
        <div className="school">{props.school}</div>
        <div className="City">{props.city}</div>
        <div className="introduction">{props.introduction}</div>
        <div className="interests">{props.interests}</div>
      </div>
    </Fragment>
  );
}
const mapStateToProps = state => {
  return {
    ...state.repository.data,
    id: state.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetData: (url, props) => dispatch(getData(url, props))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
