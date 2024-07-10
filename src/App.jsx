import { useState } from 'react'
import './App.css'
import React from 'react'
import { Header } from './components/Header'
import { Background } from './components/Background'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DreamscoresPage } from './components/DreamscoresPage'
import { NavButtons } from './components/NavButtons'
import { FilterButtons } from './components/FilterButtons'
import { Card } from './components/Card'
import { FilmCard } from './components/FilmCard'
//import { SomeButtons } from './components/SomeButtons'



function App() {

  return (

    <BrowserRouter>
      <Background>
        <NavButtons />
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/dreamscores" element={<DreamscoresPage />} />
          <Route path="/drama" element={<><FilterButtons /> <Card><FilmCard text={undefined} /></Card></>} />
        </Routes>
        {/*<SomeButtons />*/}
      </Background>

    </BrowserRouter>

  )
}

export default App
