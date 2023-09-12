import React from 'react'

const Game = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <img src="temp-robot.png" alt="BuggyBot" />
          </div>

          <div>
            <img src="temp-alien.png" alt="alien" />
          </div>
        </div>
        
        <div>
          <div className="code">
            launch code
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