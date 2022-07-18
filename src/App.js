import './App.css';
import Die from './components/Die';
import React from 'react';
import { nanoid } from 'nanoid'

function App() {

  const [dice, setDice] = React.useState(allNewDiceNum());
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    console.log("Dice state changed")
  },[dice])
  
  function generateNewDie(){
    return {
      value : Math.ceil(Math.random()*6),  //Math.ceil starts num count from 1.
      isHeld: false,
      id: nanoid()
    }
  }
  
  function allNewDiceNum(){
    const newDiceNum = [];
    for(let i=0 ; i<10 ; i++){
      newDiceNum.push(generateNewDie()) 
    }
    return newDiceNum;
  }
  
  function rollDice(){
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld ? die : generateNewDie()
    }))
  }

  function holdDice(id){
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? {...die,isHeld: !die.isHeld} : die
    }))
  }

  const diceElements = dice.map(die => 
  <Die 
    key={die.id} 
    value={die.value} 
    isHeld={die.isHeld}
    holdDice={() => holdDice(die.id)}/> )

  // console.log(allNewDiceNum())

  return (
    <>
    <main>
      <h1>Tenzies</h1>
      <p className='rules'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button className='roll-btn' onClick={rollDice}>Roll</button>
    </main>
    </>
  );
}

export default App;
