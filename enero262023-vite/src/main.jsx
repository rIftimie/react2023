import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Api, { getPost, getPostDB } from "./components/Api";
import Post from "./components/Post";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/api/posts",
        element: <Api />,
        loader: async () => {
            return await getPostDB();
        },
    },
    {
        path: "/api/posts/:id",
        loader: async ({ params }) => {
            return await getPost(params.id);
        },
        element: <Post />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
