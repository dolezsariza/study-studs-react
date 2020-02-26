import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../store/actions/repositoryActions";
export default function Home(props) {
    const dispatch = useDispatch();
    const welcomeMessage = useSelector(state => state.repository.data);
    const loggedIn = useSelector(state => state.loggedIn.loggedIn);

    useEffect(() => {
        dispatch(getData("/Home", props));
    });

    return loggedIn ? (
        <Fragment>
            <p style={{ textAlign: "center" }}></p>
        </Fragment>
    ) : (
        <p style={{ textAlign: "center" }}>Please login!!!</p>
    );
}
