import React from "react";
import Post from "../Post/Post";

export default function Posts(props) {
    return props.posts.map(post => (
        <Post
            key={post.id}
            id={post.id}
            title={post.title}
            message={post.message}
            creationDate={post.creationDate}
            username={post.username}
        />
    ));
}
