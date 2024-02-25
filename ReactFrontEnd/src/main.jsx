import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {AuthContextProvider} from './context/authContext.jsx'
import App from './App.jsx'
import './index.css'
import { ConversationsContextProvider } from './context/conversationsContext.jsx'
import { SocketContextProvider } from './context/socketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConversationsContextProvider>
        <AuthContextProvider>
          <SocketContextProvider>
            <App />
          </SocketContextProvider>
        </AuthContextProvider>
      </ConversationsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
