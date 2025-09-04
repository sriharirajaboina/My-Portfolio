import { useState } from 'react'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import CursorFollower from './components/CursorFollower/CursorFollower'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import './App.css'

function App() {
  return (
    <>
      <div className="App">
        <CursorFollower/>
        <Header/>
        <Hero/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
        <ScrollToTop/>
      </div>
    </>
  )
}

export default App
