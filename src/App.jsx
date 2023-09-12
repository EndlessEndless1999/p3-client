import { useState } from 'react'
import { NewEditor } from './components';
import axios from 'axios';
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import * as Pages from './pages'
import { NavBar } from './layout'

import './assets/style.css'

function App() {
  const [code, setCode] = useState();
  const [testCases, setTestCases] = useState();

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3000/python', {code}).then((data) => {
    console.log(data.data[0]);  
    setTestCases(data.data[0])
    console.log(testCases);
  })

  }


  return (
    <>
    <div>{testCases}</div>
    <NewEditor code={code} setCode={setCode}/>
    <button className='submit-btn' onClick={handleClick}>Submit</button>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Pages.Home />} />
          <Route path="/game" element={<Pages.Game />} />
          <Route path="/high-scores" element={<Pages.HighScores />} />
          <Route path="/settings" element={<Pages.Settings />} />
          <Route path="/help" element={<Pages.Help />} />
          <Route path="/about" element={<Pages.About />} />
          <Route path="*" element={<Pages.NotFound />} />
      </Route>
      </Routes>
    </>
  )
}

export default App