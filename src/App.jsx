
import React from "react";
import './App.css'
import Button from "./components/Button";
import Dice from "./components/Dice";
import Header from "./components/Header";
import Confetti from 'react-confetti'

function App() {
  /*array to hold all dice faces(1-6) in an array of 10 elements*/
  const [diceArray, setDiceArray] = React.useState(getDiceArray())

  /*value to set when the user wins the game - initial value false*/
  const [tenzy,setTenzy] = React.useState(false);

  /*value to keep track the no:of rolls user took*/
  const[currentScore,setCurrentScore] = React.useState(0);

  /*value to set the highscore if the user took lesser dice roll than previous highscore*/
  const[highScore,setHighScore] = React.useState(getHighScore());


  /*watch for highscore; if a new highscore is set, then it is stored in localstorage*/
  React.useEffect(()=>{
    localStorage.setItem("highScore", JSON.stringify(highScore))
  },[highScore])

  /*get the current highscore in localstorage. If it is undefined then it return 0*/
  function getHighScore(){
    return JSON.parse(localStorage.getItem("highScore")) || 0
  }


  /* check if user wins the game whenever any change is detecte in diceArray. 
   If every dice in the array is a single value and is held. Then user wins */
  React.useEffect(()=>{
    const isHeld = diceArray.every(dice=>dice.isHeld);
    const heldValue = diceArray[0].value;
    const isHeldvalue = diceArray.every(dice=>dice.value===heldValue);
    if(isHeld && isHeldvalue){
      setTenzy(true)
    }
  },[diceArray])

  /* generate the random dice faces adn returns an array */  
  function getDiceArray(){
    let arrays=[];
    for(let i=1;i<=10;i++){
      let randomNumber =  ~~(Math.random() * 6)+1
      arrays.push({value:randomNumber,isHeld:false, id:i})
    }
    return arrays;
  } 

  /* method to hold the dice face. It modifies the isHeld value of dicearray object of that specific id */
  function holdDice(id){
  setDiceArray(prevDiceArray=>{
    return prevDiceArray.map(item=>{
      return item.id===id? {...item,isHeld:!item.isHeld}: item
    })
  })
  }

  /* roll the dice. If user wins then reset the array else roll dice to change the array elements except the holded diceface*/
  function rollDice(){
    if(tenzy){
      setDiceArray(getDiceArray())
      setTenzy(false)
      setCurrentScore(0)
      if(highScore>currentScore){
        setHighScore(currentScore)
        
      }
    }else{      
      setDiceArray(oldDices=>{
        let newArray=getDiceArray()
        let result = []
        for(let i =0 ;i<oldDices.length;i++){
          if(!oldDices[i].isHeld){
            result.push(newArray[i])
          }else{
            result.push(oldDices[i])
          }
        }
        return result;
      })      
      setCurrentScore(prevScore=> prevScore+1)
    }

    /*another method when id is a randomly generated unique value using nanoid or uuid*/
    // setDiceArray(oldDice=>{
    //   return oldDice.map(dice=>{
    //     return dice.isHeld?dice:{value:randomNumber,isHeld:false, id:i}
    //   })
    // })
  }

  let elements = diceArray.map((item,index) => <Dice 
                                                number={item.value}
                                                key={index}
                                                isHeld={item.isHeld} 
                                                holdDice={()=>holdDice(item.id)}
                                              />)


  return (
    <main > 
      {tenzy&&<Confetti
      />}
            <Header/>
            {<div className="dice-row">
            {elements}            
            </div>}
            <Button onClick={rollDice} tenzy={tenzy} highScore={highScore}/>
      </main>
  )
}

export default App
