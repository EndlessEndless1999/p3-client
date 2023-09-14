import React from 'react';
import '../../assets/css/player.css'

const Player = () => {
  return (
    <>
      <div id="player">
      </div>
      <div className="player-health-bar">
        <div className="player-health-fill" id="player-health-fill"></div>
      </div>
    </>
  );
};

export default Player;
