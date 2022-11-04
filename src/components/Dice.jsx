import React from "react";
import FifthFace from "./dice-faces/FifthFace";
import FirstFace from "./dice-faces/FirstFace";
import Fourthface from "./dice-faces/Fourthface";
import SecondFace from "./dice-faces/Secondface";
import SixthFace from "./dice-faces/SixthFace";
import ThirdFace from "./dice-faces/ThirdFace";

export default function Dice(props){
    
    let className = props.isHeld ? "dice selected" : "dice";

    let element;

    if(props.number===1){
        element = <FirstFace/>
    }else if(props.number===2){
        element = <SecondFace/>
    }
    else if(props.number===3){
        element = <ThirdFace/>
    }else if(props.number===4){
        element = <Fourthface/>
    }else if(props.number===5){
        element = <FifthFace/>
    }else{
        element = <SixthFace/>
    }
    
    return (
        
        <div className={className} onClick={props.holdDice}>
            {/* {props.number} */}
            {element}
        </div>  
    )
}