import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function Api() {
    const { posts } = useLoaderData();
    const renderedPosts = posts.map((post) => (
        <h3>
            <Link to={`${post.id}`}>
                Post {post.id} - {post.title}
            </Link>
        </h3>
    ));
    return (
        <>
            <h1>API</h1>
            {renderedPosts}
        </>
    );
}

export async function getPostDB() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const json = await response.json();
        return { posts: json };
    } catch (error) {
        console.log(error);
    }
}
export async function getPost(id) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

export default Api;
