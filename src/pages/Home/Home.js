import React, { useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { getData, removeData } from "../../store/actions/repositoryActions";
import { connect } from "react-redux";
import { closeErrorInfo } from "../../store/actions/errorHandlerActions";
import TopicHeader from "../../components/TopicHeader/TopicHeader";

function Home(props) {
    const loggedIn = useSelector(state => state.loggedIn.loggedIn);

    useEffect(() => {
        const url = "/topics";
        props.onGetData(url, props);

        return () => {
            props.onRemoveData();
        };
    }, []);

    const topics = props.data
        ? props.data.length > 0
            ? props.data.map(topic => (
                  <TopicHeader
                      history={props.history}
                      key={topic.id}
                      id={topic.id}
                      ownerName={topic.ownerName}
                      title={topic.title}
                      description={topic.description}
                      date={topic.date}
                  />
              ))
            : null
        : null;
    if (topics) topics.reverse();

    return loggedIn ? (
        <Fragment>
            <h2>Topics</h2>
            {topics}
        </Fragment>
    ) : (
        <p style={{ textAlign: "center" }}>Please login!!!</p>
    );
}

const mapStateToProps = state => {
    return {
        data: state.repository.data,
        error: state.errorHandler.errorMessage,
        loggedIn: state.loggedIn.loggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetData: (url, props) => dispatch(getData(url, props)),
        onCloseError: () => dispatch(closeErrorInfo()),
        onRemoveData: () => dispatch(removeData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
