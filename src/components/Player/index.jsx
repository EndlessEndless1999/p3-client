import React, { useState } from 'react';
import '../../assets/css/player.css'

const Player = () => {
    const [isAnimating, setIsAnimating] = useState(false);
  
    const startAnimation = () => {
      setIsAnimating(true);
    };
  

  
    return (
      <div id="player" className="player">
        <div
          className={`sprite-animation ${isAnimating ? 'animate' : ''}`}
          onClick={startAnimation}

        ></div>
      </div>
    );
  };

export default Player