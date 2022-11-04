import React from "react";
import Dot from "./Dot";

export default function FirstFace(){

    let style={visibility:'hidden'}
    let dots = []
    
    for(let i = 1;i<=9;i++){
        dots.push(i)
    }

    let elements = dots.map((item,index)=>{
        return item === 5 ?<Dot key={index}/>:<Dot key={index} style={true}/>
    })    
 
    return(
        <div className="dice-face" >
            {elements}
        </div>
    )
}