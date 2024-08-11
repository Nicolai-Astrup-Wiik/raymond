import { useState } from 'react'
import './App.css'
import React from 'react'
import { Header } from './components/Header'
import { Background } from './components/Background'
//import { ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { DreamscoresPage } from './components/DreamscoresPage'
import { NavButtons } from './components/NavButtons'
import { FilterButtons } from './components/FilterButtons'
import { Card } from './components/Card'
import { FilmCard } from './components/FilmCard'
import FadeTransition from './transitions'
import { SomeButtons } from './components/SomeButtons'
import { DramaPage } from './components/DramaPage'
import { Footer } from './components/Footer'
import { Admin } from './components/Admin'
import { LoginForm } from './components/LoginForm'
//import { SomeButtons } from './components/SomeButtons'



function App() {
  //const location = useLocation();
  const [user, setUser] = useState(undefined);
  return (

    <BrowserRouter>
      <Background>
        <NavButtons />
        <FadeTransition location={location}>
          <Routes location={location}>
            <Route path="/" element={<div></div>} />
            <Route path="/dreamscores" element={<DreamscoresPage />} />
            <Route path="/drama" element={<DramaPage />} />
            <Route path='/login' element={<LoginForm onLoginSuccess={setUser} />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </FadeTransition>
        <Footer></Footer>
      </Background>

    </BrowserRouter>

  )
}

export default App
