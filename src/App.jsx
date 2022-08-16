import './App.css'
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import LayerList from './pages/LayerList'
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './layouts/Header';
import ScrollMotion from './pages/ScrollMotion'
import Parallax from './pages/Parallax'
import Presentacion from './pages/Presentacion'
import MapaContainer from './pages/mapa/MapaContainer'
import ParallaxContainer from './pages/reactScrollParallax/ParallaxContainer'
import Pasos from './pages/tutorial/Pasos';
import VistaSimple from './layouts/TutorialMenu'


function App() {

  return (
    <div className="bg:white dark:bg-slate-900 mb-1">
      
    {/* <AnimatePresence> */}
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/layersList' element={<LayerList/>} />
          {/* <Route path='/map_preview' element={<MapPreview/>} /> */}
          <Route path='/scrollMotion' element={<ScrollMotion/>} />
          <Route path='/scrollParallax' element={<ParallaxContainer/>} />
          <Route path='/pasos' element={<Pasos/>} />
          <Route path='/vistaSimple' element={<VistaSimple/>} />
          <Route path='/presentacion' element={<MapaContainer/>} />
        </Routes>
      </Router>
    {/* </AnimatePresence> */}
    </div>
  )
}

export default App
