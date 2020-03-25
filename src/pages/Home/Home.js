import React, { useEffect, Fragment, useState, useContext } from "react";
import axios from "../../axios/axios";
import GroupHeader from "../../components/GroupHeader/GroupHeader";
import { UserContext } from "../../context/UserContext";

function Home(props) {
    const [user, setUser] = useContext(UserContext);
    const [groups, setGroups] = useState(null);

    useEffect(() => {
        const url = "/groups";
        axios.get(url).then(resp => {
            const newGroups = resp.data.map(group => (
                <GroupHeader
                    key={group.id}
                    id={group.id}
                    ownerName={group.ownerName}
                    title={group.title}
                    description={group.description}
                    date={group.date}
                />
            ));
            setGroups(newGroups);
        });
    }, []);

    if (groups) groups.reverse();

    return user ? (
        user.loggedIn ? (
            <Fragment>
                <h2>Groups</h2>
                {groups}
            </Fragment>
        ) : (
            <Fragment>
                <h1>Welcome to Study Stud!</h1>
                <section className="about-us">
                    <h4>About us</h4>
                    <p>
                        This is a social site, where students can share notes
                        and comments between each other. You can post on
                        different topics you are interested in. You can join
                        groups, and make friends.
                    </p>
                </section>
                <section>
                    <h4>How to use it?</h4>
                    <p>
                        First you need to register an account, and login. You
                        can then join groups and post to topics.
                    </p>
                </section>
            </Fragment>
        )
    ) : null;
}

export default Home;
