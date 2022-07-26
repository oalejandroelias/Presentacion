import { useState } from 'react'
import './App.css'
import Introduccion from './components/Introduccion'
import Pasos from './components/Pasos'
import Seccion1 from './components/Seccion1'
import Tutorial1 from './components/Tutorial1'
import PasosA from './components/PasosA'

function App() {

  return (
      <div className="App">
        <Introduccion />
        <Tutorial1 />
        <Seccion1 />
        <Pasos />
        <PasosA />
      </div>
  )
}

export default App
