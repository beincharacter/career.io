import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TransitionProvider } from './utils/TransitionContext.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TransitionProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </TransitionProvider>
  </React.StrictMode>,
)
