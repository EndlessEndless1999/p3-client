import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomePage } from './pages'
import { NavBar } from './layout'

import './assets/style.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />}/>
          </Route >
      </Routes>
    </>
  )
}

export default App