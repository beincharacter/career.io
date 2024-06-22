import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TransitionProvider } from './utils/TransitionContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TransitionProvider>
      <App />
    </TransitionProvider>
  </React.StrictMode>,
)
