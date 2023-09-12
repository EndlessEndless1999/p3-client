import React, { useState, useEffect } from 'react'

import { Timer } from '../../components'
import { checkIsGameOver, initializeGame, startEncounter } from '../../lib/initFunctions';
import { displayStats, playerAttack, getCombatState } from '../../lib/combatFunctions';


const Game = () => {

  useEffect(() => {
    
    checkIsGameOver()
    displayStats()

  }, []);

  const handleStartGameClick = () => {
    initializeGame()
    startEncounter()
  }



  const handleAttackClick = () => {
    playerAttack()
  }
  
  
  const [startTimer, setStartTimer] = useState(false);

  const handleLaunchCodeClick = () => {
    console.log("launch code clicked")
    setStartTimer(true);
  };



  return (
    <>
      <Timer startTimer={startTimer} />
      
      <div className="characters">
        <div>
          <img src="temp-robot.png" alt="BuggyBot" />
        </div>

        <div>
          <img src="temp-alien.png" alt="alien" />
          <img src="temp-alien.png" alt="alien" />
          <img src="temp-alien.png" alt="alien" />
        </div>
      </div>
        
      <div className="playerContainer">
        <div className="code">
          <button onClick={handleStartGameClick}>Start Game</button>
          <button 
            onClick={handleAttackClick} 

            id="attack-btn">Attack</button>
          <button onClick={handleLaunchCodeClick}>Launch Code</button>
        </div>

        <div className="log">
          log
        </div>
      </div>
    </>
  )
}

export default Game