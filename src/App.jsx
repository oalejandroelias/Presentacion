import './App.css'
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import LayerList from './pages/LayerList'
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './layouts/Header';
import MapPreview from './components/map_preview/MapPreview';
import ScrollMotion from './pages/ScrollMotion'
import ScrollParallax from './pages/ScrollParallax'
import ParallaxContainer from './pages/ParallaxContainer'

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
        </Routes>
      </Router>
    {/* </AnimatePresence> */}
    </div>
  )
}

export default App
