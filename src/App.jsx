import { useEffect, useState } from 'react'
import './App.css'
import React from 'react'
import { Header } from './components/Header'
import { Background } from './components/Background'
//import { ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { DreamscoresPage } from './components/DreamscoresPage'
import { NavButtons } from './components/NavButtons'
import { Card } from './components/Card'
import { FilmCard } from './components/FilmCard'
import FadeTransition from './transitions'
import { SomeButtons } from './components/SomeButtons'
import { BigScreenPage } from './components/BigScreenPage'
import { Footer } from './components/Footer'
import { Admin } from './components/Admin'
import { LoginForm } from './components/LoginForm'
import { ProjectsList } from './components/ProjectList'
import { SmallScreenPage } from './components/SmallScreenPage'
import { StagePage } from './components/StagePage'
import { ArrangementsPage } from './components/ArrangementsPage'
import { BioCard } from './components/BioCard'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
//import { SomeButtons } from './components/SomeButtons'

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <BrowserRouter>
      <Background isAuthenticated={!!user}>
        <NavButtons />
        <Routes>
          <Route path="/" element={<BioCard />} />
          <Route path="/dreamscores" element={<><ProjectsList category={'dreamscores'} user={user} /><DreamscoresPage /></>} />
          <Route path="/bigScreen" element={<ProjectsList category={'big screen'} user={user} />} />
          <Route path="/smallScreen" element={<ProjectsList category={'small screen'} user={user} />} />
          <Route path="/stage" element={<ProjectsList category={'stage'} user={user} />} />
          <Route path="/licensing" element={<ProjectsList category={'licensing'} user={user} />} />
          <Route path='/login' element={<LoginForm onLoginSuccess={setUser} />} />
          <Route path='/admin' element={<Admin isAuthenticated={!!user} />} />
        </Routes>
        <Footer />
      </Background>
    </BrowserRouter>
  );
}

export default App;