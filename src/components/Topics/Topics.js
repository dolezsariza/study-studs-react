import React from "react";
import TopicHeader from "../TopicHeader/TopicHeader";


export default function Topics(props) {
    if (props.topics) {
        return props.topics.map(topic => (
            <TopicHeader
                key={topic.id}
                id={topic.id}
                title={topic.title}
                message={topic.message}
                date={topic.date}
                ownerName={topic.ownerName}
                groupId = {topic.groupId}
            />
        ));
    } else return null;
}
