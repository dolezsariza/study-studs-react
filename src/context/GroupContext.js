import React, { createContext, useState } from "react";
import {UserContext} from './UserContext';

export const GroupContext = createContext();

const GroupProvider = (props) => {
    const initialState = { groupName: "name", groupId: "", hasUser: false };
    const [group, setGroup] = useState(initialState);

    return (
        <GroupContext.Provider value={[group, setGroup]}>
            {props.children}
        </GroupContext.Provider>
    );
};

export default GroupProvider;
