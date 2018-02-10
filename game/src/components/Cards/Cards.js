import React from "react";
const Cards = props =>  (
    <div 
    role="img"
    aria-label="click-item"
    onClick={() => props.handeClick(props.id)}
    style={{ backgroundImage: `url("${props.image}")` }}
    className={`click-item${props.shake ? " shake" : ""} ` }
    />
)

export default Cards;