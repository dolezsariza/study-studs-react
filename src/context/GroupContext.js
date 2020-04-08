import React, { createContext, useState } from "react";

export const GroupContext = createContext();

const GroupProvider = (props) => {
    const initialState = { groupName: "name", groupId: "" };
    const [group, setGroup] = useState(initialState);

    return (
        <GroupContext.Provider value={[group, setGroup]}>
            {props.children}
        </GroupContext.Provider>
    );
};

export default GroupProvider;
