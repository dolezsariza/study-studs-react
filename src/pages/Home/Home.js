import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../store/actions/repositoryActions";

export default function Home(props) {
    const dispatch = useDispatch();
    const welcomeMessage = useSelector(state=> state.repository.data);
    const loggedIn = useSelector(state => state.loggedIn.loggedIn);

    useEffect(() => {
        dispatch(getData("/Home", props));
    });

    return (
        loggedIn?
            <p style={{textAlign:"center"}}>{welcomeMessage}</p>
        :
        <p style={{textAlign:"center"}}>Please login!!!</p>
    );
}
