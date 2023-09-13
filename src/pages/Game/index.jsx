import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

import { Timer, Player, Enemy, EditorWrapper } from '../../components';
import { checkIsGameOver, initializeGame, preloadSpriteSheets, startEncounter} from '../../lib/initFunctions';
import { displayStats, playerAttack } from '../../lib/combatFunctions';

const Game = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isAttackButtonDisabled, setIsAttackButtonDisabled] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const [editorOpen, setEditorOpen] = useState(false)

  preloadSpriteSheets()

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
    setEditorOpen(true);
  };

  return (
    <>
    {editorOpen && <EditorWrapper editorOpen={editorOpen} setEditorOpen={setEditorOpen}/>}
    <div className="gameContainer">
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

          <motion.button
           onClick={handleLaunchCodeClick}
           whileHover={{scale: 1.1}}
           whileTap={{scale: 0.9}}
           >Launch Code</motion.button>

        </div>

        <div className="log">log</div>
      </div>
    </div>
    </>
  );
};

export default Game;
