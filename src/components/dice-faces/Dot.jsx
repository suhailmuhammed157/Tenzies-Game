import React from "react";

export default function Dot(props){
    let style={visibility:'hidden'}
    return(
        <span className="dot " style={props.style? style:{}}> </span>
    )
}