import React from 'react'

const Game = () => {
  return (
    <>
    <div>
      <div className="timer">
        Timer
      </div>
      
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
          <button>launch code</button>
        </div>

        <div className="log">
          log
        </div>
      </div>
    </div>
    </>
  )
}

export default Game