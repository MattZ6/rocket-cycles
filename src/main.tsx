import React from 'react'
import ReactDOM from 'react-dom/client'

import './i18n'

import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback="Carregando as mensagens">
      <App />
    </React.Suspense>
  </React.StrictMode>,
)
