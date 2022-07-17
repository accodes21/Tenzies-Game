import './App.css';
import Die from './components/Die';
import React from 'react';
import { nanoid } from 'nanoid'

function App() {

  const [dice, setDice] = React.useState(allNewDiceNum())
  
  
  function allNewDiceNum(){
    const newDiceNum = [];
    for(let i=0 ; i<10 ; i++){
      newDiceNum.push({
        value : Math.ceil(Math.random()*6),  //Math.ceil starts num count from 1.
        isHeld: false,
        id: nanoid()
      }) 
    }
    return newDiceNum;
  }
  
  function rollDice(){
    setDice(allNewDiceNum())
  }
  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld}/> )

  console.log(allNewDiceNum())

  return (
    <>
    <main>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button className='roll-btn' onClick={rollDice}>Roll</button>
    </main>
    </>
  );
}

export default App;
