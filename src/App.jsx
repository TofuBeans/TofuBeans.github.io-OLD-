import { useState } from 'react'
import Twemoji from './Twemoji.jsx'
import Navbar from './Navbar.jsx'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/home.jsx'
import Pronouns from './pages/pronouns.jsx'

function App() {

  return (
    <>
      {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pronouns' element={<Pronouns/>}/>
        </Routes>
    </>
  )
}

export default App
