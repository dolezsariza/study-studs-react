import React, { useEffect, Fragment, useState, useContext } from "react";
import axios from "../../axios/axios";
import TopicHeader from "../../components/TopicHeader/TopicHeader";
import { UserContext } from "../../context/UserContext";

function Home(props) {
    const [user, setUser] = useContext(UserContext);
    const [topics, setTopics] = useState(null);

    useEffect(() => {
        const url = "/topics";
        axios.get(url).then(resp => {
            const newTopics = resp.data
                ? resp.data.map(topic => (
                      <TopicHeader
                          key={topic.id}
                          id={topic.id}
                          ownerName={topic.ownerName}
                          title={topic.title}
                          description={topic.description}
                          date={topic.date}
                      />
                  ))
                : null;
            setTopics(newTopics);
        });
    }, []);

    if (topics) topics.reverse();

    return user ? (
        user.loggedIn ? (
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
                        This is a social site, where students can share notes
                        and comments between each other. You cant post on
                        different topics you are interested in.
                    </p>
                </section>
                <section>
                    <h4>How to use it?</h4>
                    <p>
                        First you need to register an account, and login. You
                        can then post to the topics of your choice.
                    </p>
                </section>
            </Fragment>
        )
    ) : null;
}

export default Home;
