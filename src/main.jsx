import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from './components/ThemeContext';
import Background from './components/Background';
// import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider>
     {/* <ParallaxProvider> */}
      <Background>
        <App />
      </Background>
      {/* </ParallaxProvider> */}
      </ThemeProvider>
  </React.StrictMode>
)
