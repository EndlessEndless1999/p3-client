import React from 'react'
import '../../assets/css/enemy.css';

const Enemy = () => {
  return (
    <>
      <div id="enemy">
      </div>
      <div className="enemy-health-bar">
        <div className="enemy-health-fill" id="enemy-health-fill"></div>
      </div>
    </>
  )
}

export default Enemy