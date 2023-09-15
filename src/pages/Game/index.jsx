import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { motion } from 'framer-motion'

import { Timer, Player, Enemy, Logger, EditorWrapper, Background } from '../../components';
import { checkIsGameOver, initializeGame, startEncounter} from '../../lib/initFunctions';
import { displayStats, handlePlayerAttack } from '../../lib/combatFunctions';
import './index.css'
import '../../assets/css/background.css'


const Game = () => {

  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isAttackButtonDisabled, setIsAttackButtonDisabled] = useState(false);
  const [isStartGameButtonDisabled, setIsStartGameButtonDisabled] = useState(false);

  const [startTimer, setStartTimer] = useState(false);
  const [editorOpen, setEditorOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [testCases, setTestCases] = useState('');
  const [func, setFunc] = useState('');
  const [id, setId] = useState('');
  const [tests, setTests] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    checkIsGameOver();
    displayStats();
  }, []);

  useEffect(() => {
    axios.post(`/users/ping`).then((data) => {
      if(data.status !== 200){
        navigate("login")
      }
    })
  }, [navigate])


  const handleStartGameClick = () => {
    setIsStartGameButtonDisabled(true);
    initializeGame();
    startEncounter();
    setTimeout(() => setIsGameStarted(true), 2000);
  };

  const handleAttackClick = () => {
    setIsAttackButtonDisabled(true);
    handlePlayerAttack();
  };

  const handleLaunchCodeClick = async () => {
    const response = await fetch('https://amazingapp.tplinkdns.com/users/code')
    const data = await response.json();
    console.log(data);
    console.log('launch code clicked');
    setQuestion(data.codeSnippet.question);
    setFunc(data.codeSnippet.funcName);
    setId(data.codeSnippet._id);
    setTests(data.codeSnippet.tests);
    setStartTimer(true);
    setEditorOpen(true);
  };

  return (
    <>
    <div className="gameContainer" role="main">
      <Background id="background-component" />
      <Timer id="timer-component" startTimer={startTimer} />

      {isGameStarted &&(
      <div className="characters">
        <div>
          <Player />  
        </div>

        <div>
          <Enemy />
        </div>
      </div>
      )}

      <div className="playerContainer">
        <div className="code">
         
          {!isGameStarted && !editorOpen &&(
            <button onClick={handleStartGameClick}
            disabled={isStartGameButtonDisabled}>
              Start Game</button>
          )}
          
          {isGameStarted && !editorOpen &&(
            <button onClick={handleAttackClick}
            disabled={isAttackButtonDisabled}>
              Attack</button>
          )}

          {editorOpen && <EditorWrapper editorOpen={editorOpen} setEditorOpen={setEditorOpen} testCases={testCases} setTestCases={setTestCases} question={question} function={func} setIsAttackButtonDisabled={setIsAttackButtonDisabled} id={id}/>}

          {isGameStarted && !editorOpen &&(
            <motion.button
            onClick={handleLaunchCodeClick}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            >Launch Code</motion.button>
          )}


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
