import { useState } from 'react'
import './App.css'
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="bg:white dark:bg-slate-900">
    <AnimatePresence>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}>
          </Route>
            <Route path='/home' element={<Home/>}>
                {/* <Route index element={<Home/>} /> */}  
            </Route>
            {/* <Route path='/about' element={<About/>}>
                <Route index element={<About/>} />
            </Route> */}
          </Routes>
      </Router>
    </AnimatePresence>
    </div>
  )
}

export default App
