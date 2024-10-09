import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DarkModeProvider } from './contexts/darkmodecontext.jsx'
import { ChangeLangProvider } from './contexts/changeLangContext.jsx'

createRoot(document.getElementById('root')).render(
 
    <StrictMode>
      <ChangeLangProvider>
      <DarkModeProvider >
    <App />
    </DarkModeProvider>
    </ChangeLangProvider>
  </StrictMode>
)
