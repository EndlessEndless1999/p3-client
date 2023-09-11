import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomePage, GamePage } from './pages'
import { NavBar } from './layout'

import './assets/style.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />}/>
          <Route path="/play" element={<GamePage />}/>
        </Route >
      </Routes>
    </>
  )
}

export default App