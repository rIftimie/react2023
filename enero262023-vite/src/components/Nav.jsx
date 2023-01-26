import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
    // https://jsonplaceholder.typicode.com/posts
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/api/posts">Api</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
