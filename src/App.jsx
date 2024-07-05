import './App.css'
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import LayerList from './pages/LayerList'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './layouts/NavBar';
import ScrollMotion from './pages/ScrollMotion'
import Parallax from './pages/Parallax'
import Presentacion from './pages/Presentacion'
import ParallaxContainer from './pages/reactScrollParallax/ParallaxContainer'
import Pasos from './pages/tutorial/Pasos';
import MapsScroll from './pages/MapsScroll';
import VistaSimple from './layouts/TutorialMenu'
import Tarjetas from './pages/Tarjetas/Tarjetas';
import Presentaciones from './pages/Presentacion/Presentaciones';


function App() {

  return (
    <div className="bg:white dark:bg-slate-900 mb-1">

      {/* <AnimatePresence> */}
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/layersList' element={<LayerList />} />
          <Route path='/mapa_tematico' element={<Tarjetas />} />
          <Route path='/scrollMotion' element={<ScrollMotion />} />
          <Route path='/scrollParallax' element={<ParallaxContainer />} />
          <Route path='/pasos' element={<Pasos />} />
          <Route path='/vistaSimple' element={<VistaSimple />} />
          <Route path='/presentaciones' element={<Presentaciones />} />
          <Route path='/test' element={<MapsScroll />} />
        </Routes>
      </Router>
      {/* </AnimatePresence> */}
    </div>
  )
}

export default App
