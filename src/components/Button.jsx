import React from "react";

export default function Button(props){
    return (
        <div className="button--div" onClick={props.onClick}>
            <button>
            {props.tenzy?"New game":"Roll"}
        </button>
        <h5>High Score: <span>{props.highScore}</span></h5>
        </div>
       
    )
}