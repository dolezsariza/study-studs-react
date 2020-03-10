import React from "react";
import Group from "../Group/Group";


export default function Groups(props) {
    console.log(props.groups);
    if (props.groups) {
        return props.groups.map(group => (
            <Group
                key={group.id}
                id={group.id}
                title={group.title}
                message={group.message}
                date={group.date}
                ownerName={group.ownerName}
            />
        ));
    } else return null;
}
