import React from "react";
import Post from "../Post/Post";

export default function Posts(props) {
    console.log(props.posts);
    if (props.posts) {
        return props.posts.map(post => (
            <Post
                key={post.id}
                id={post.id}
                title={post.title}
                message={post.message}
                date={post.date}
                ownerName={post.ownerName}
            />
        ));
    } else return null;
}
