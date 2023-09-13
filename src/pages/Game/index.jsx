import React, { useState, useEffect } from 'react';

import { Timer, Player, Enemy, Logger, EditorWrapper } from '../../components';
import { checkIsGameOver, initializeGame, startEncounter} from '../../lib/initFunctions';
import { displayStats, playerAttack } from '../../lib/combatFunctions';

const Game = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isAttackButtonDisabled, setIsAttackButtonDisabled] = useState(false);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    checkIsGameOver();
    displayStats();
  }, []);

  const handleStartGameClick = () => {
    initializeGame();
    startEncounter();
    setIsGameStarted(true);
  };

  const handleAttackClick = () => {
    if (!isAttackButtonDisabled) {
      setIsAttackButtonDisabled(true);
      setTimeout(() => setIsAttackButtonDisabled(false), 2000);

      playerAttack();
    }
  };

  const handleLaunchCodeClick = () => {
    console.log('launch code clicked');
    setStartTimer(true);
  };

  return (
    <>
      <Timer startTimer={startTimer} />

      <div className="characters">
        <div>
          <Player />  
        </div>

        <div>
          <img src="temp-alien.png" alt="alien" />
          <img src="temp-alien.png" alt="alien" />
          <img src="temp-alien.png" alt="alien" />
        </div>
      </div>

      <div className="playerContainer">
        <div className="code">

          {!isGameStarted && (
            <button onClick={handleStartGameClick}>
              Start Game</button>
          )}
          
          {isGameStarted && (
            <button onClick={handleAttackClick}
            disabled={isAttackButtonDisabled}>
              Attack</button>
          )}

          <button onClick={handleLaunchCodeClick}>Launch Code</button>

        </div>

        <div className="logger">
          <Logger />
        </div>
      </div>
    </>
  );
};

export default Game;
