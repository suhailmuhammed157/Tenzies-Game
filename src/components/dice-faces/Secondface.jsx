import React from "react";
import Dot from "./Dot";

export default function SecondFace(){

    let dots = []

    for(let i = 1;i<=9;i++){
        dots.push(i)
    }


    let elements = dots.map((item,index)=>{
        if(item===1){
            return <Dot key={index}/>
        }else if(item===9){
            return <Dot key={index}/>
        }        
        else{
            return <Dot key={index} style={true}/>
        }
    })
    
 
    return(
        <div className="dice-face" >
            {elements}
        </div>
    )
}