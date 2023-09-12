import React, { useState } from 'react'

import { Timer } from '../../components'

const Game = () => {
  const [startTimer, setStartTimer] = useState(false);

  const handleLaunchCodeClick = () => {
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
          <button
            onClick={handleLaunchCodeClick}
          >
            launch code</button>
        </div>

        <div className="log">
          log
        </div>
      </div>
    </>
  )
}

export default Game