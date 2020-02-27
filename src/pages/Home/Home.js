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
        <Fragment>
            <h1>Welcome to Study Stud!</h1>
            <section className="about-us">
                <h4>About us</h4>
                <p>
                    This is a social site, where students can share notes and
                    comments between each other. You cant post on different
                    topics you are interested in.
                </p>
            </section>
            <section>
                <h4>How to use it?</h4>
                <p>
                    First you need to register an account, and login. You can
                    then post to the topics of your choice.
                </p>
            </section>
        </Fragment>
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
