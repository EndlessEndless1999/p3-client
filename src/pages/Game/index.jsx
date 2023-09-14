import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'

import { Timer, Player, Enemy, Logger, EditorWrapper } from '../../components';
import { checkIsGameOver, initializeGame, startEncounter} from '../../lib/initFunctions';
import { displayStats, handlePlayerAttack } from '../../lib/combatFunctions';
import './index.css'

const Game = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isAttackButtonDisabled, setIsAttackButtonDisabled] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const [editorOpen, setEditorOpen] = useState(false)
  const [testCases, setTestCases] = useState('');

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
    setIsAttackButtonDisabled(true);
    setTimeout(() => setIsAttackButtonDisabled(false), 2000);
    handlePlayerAttack();
  };

  const handleLaunchCodeClick = () => {
    console.log('launch code clicked');
    setStartTimer(true);
    setEditorOpen(true);
  };

  return (
    <>
    <div className="gameContainer">
      <Timer startTimer={startTimer} />

      <div className="characters">
        <div>
          <Player />  
        </div>

        <div>
          <Enemy />
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

          {editorOpen && <EditorWrapper editorOpen={editorOpen} setEditorOpen={setEditorOpen} testCases={testCases} setTestCases={setTestCases}/>}

          <motion.button
           onClick={handleLaunchCodeClick}
           whileHover={{scale: 1.1}}
           whileTap={{scale: 0.9}}
           >Launch Code</motion.button>

        </div>

        <div className="logger">
          <Logger />
        </div>
      </div>
    </div>
    </>
  );
};

export default Game;
