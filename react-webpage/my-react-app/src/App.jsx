import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Nav'
import Hero from './Hero'
import Items from './Items'
import Contact from './Contact'
import Foot from './Footer'
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Items />
      <Contact />
      <Foot />
    </>
  )
}

export default App
