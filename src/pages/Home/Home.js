import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../store/actions/repositoryActions";

export default function Home(props) {
    const dispatch = useDispatch();
    let welcomeMessage = useSelector(state => state.data);

    useEffect(() => {
        dispatch(getData("/Home", props));
    });

    return (
        <Fragment>
            <p style={{textAlign:"center"}}>{welcomeMessage}</p>
        </Fragment>
    );
}
