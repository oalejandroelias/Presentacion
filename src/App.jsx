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
import Contacto from './pages/Contacto';
import Servicios from './pages/Servicios/Servicios';
import ScrollToTop from 'react-scroll-to-top';
import blue_arrow from '../src/img/blue_arrow.svg'
import Footer from './layouts/Footer';
import Mapas from './pages/mapas/Mapas';
import Graficos from './pages/graficos/Graficos';

function App() {

  return (
    <div className="bg:white dark:bg-slate-900 mb-1">

      {/* <AnimatePresence> */}
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />

          <Route path='/servicios' element={<Servicios />} />
          <Route path='/mapa_tematico' element={<Mapas />} />
          <Route path='/presentaciones' element={<Presentaciones />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/graficos' element={<Graficos />} />
          <Route path='/scrollMotion' element={<ScrollMotion />} />
          <Route path='/scrollParallax' element={<ParallaxContainer />} />
          <Route path='/pasos' element={<Pasos />} />
          <Route path='/vistaSimple' element={<VistaSimple />} />
          <Route path='/test' element={<MapsScroll />} />
        </Routes>
        <Footer />
      </Router>
      {/* </AnimatePresence> */}
      <ScrollToTop className="bg-inherit shadow-none" smooth component={<img src={blue_arrow} />} />
    </div>
  )
}

export default App
