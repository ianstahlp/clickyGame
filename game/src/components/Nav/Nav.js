import React from "react";
import Points from "../Points";
import "./Nav.css";

const Nav = props => (
    <nav className="navbar">
        <ul>
            <li className="brand">
            <a href="/">Clicky Game</a>
            </li>
            <Points score="{props.score}" topScore={props.topScore} />
            <li>
                Score: {props.score} | Top Score: {props.topScore}
            </li>
        </ul>
    </nav>
);

export default Nav;