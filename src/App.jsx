import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import * as Pages from './pages'
import { NavBar } from './layout'

import './assets/style.css'

function App() {



  return (
    <>
      
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Pages.Home />} />
          <Route path="/game" element={<Pages.Game />} />
          <Route path="/high-scores" element={<Pages.HighScores />} />
          <Route path="/settings" element={<Pages.Settings />} />
          <Route path="/help" element={<Pages.Help />} />
          <Route path="/about" element={<Pages.About />} />
          <Route path="/login" element={<Pages.Login />} />
          <Route path="/register" element={<Pages.Register />} />
          <Route path="/forgot-password" element={<Pages.ForgotPassword />} />
          <Route path="*" element={<Pages.NotFound />} />
      </Route>
      </Routes>
    </>
  )
}

export default App