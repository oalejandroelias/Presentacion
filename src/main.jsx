import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from './components/ThemeContext';
import Background from './components/Background';
import Header from './components/Header';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider>
      <Background>
      <Header />
        <App />
      </Background>
      </ThemeProvider>
  </React.StrictMode>
)
