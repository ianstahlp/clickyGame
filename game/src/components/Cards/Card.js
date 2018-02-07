import React from "react";
const Card = props => 
    <div className="card"
        style={{
            backgroundImage: props.image ? 'url(${props.image})' : "none"

        }}
        >
        {!props.image}
