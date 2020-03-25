import React from "react";
import Topic from "../Topic/Topic";


export default function Topics(props) {
    console.log(props.topics);
    if (props.topics) {
        return props.topics.map(topic => (
            <Topic
                key={topic.id}
                id={topic.id}
                title={topic.title}
                message={topic.message}
                date={topic.date}
                ownerName={topic.ownerName}
            />
        ));
    } else return null;
}
