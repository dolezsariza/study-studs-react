import React, { createContext, useState, useEffect } from "react";
import { loadState, saveState } from "../localStorage";

export const UserContext = createContext();

const UserProvider = props => {
    const initialState = { userName: "", userId: "", loggedIn: false };

    const [state, setState] = useState(initialState);

    useEffect(() => {
        const persistedState = loadState();
        if (persistedState) setState(persistedState);
    }, []);

    useEffect(() => {
        saveState(state);
    }, [state]);
    return (
        <UserContext.Provider value={[state, setState]}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;
