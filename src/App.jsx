import { useState } from 'react'
import './App.css'
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import LayerList from './pages/LayerList'
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Contenido from './pages/Contenido';
import Header from './components/Header';

function App() {

  return (
    <div className="bg:white dark:bg-slate-900 mb-1">
      
    {/* <AnimatePresence> */}
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/contenido' element={<Contenido/>} />
          </Routes>
      </Router>
    {/* </AnimatePresence> */}
    </div>
  )
}

export default App
