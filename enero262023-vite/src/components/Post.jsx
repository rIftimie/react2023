import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

function Post() {
    const params = useParams();
    const post = useLoaderData();
    return (
        <section>
            <h1>
                {post.id} - {post.title}
            </h1>
            <p>{post.body}</p>
        </section>
    );
}

export default Post;
