import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color:white;
    width:100%;
    font-family:'Montserrat', sans-serif !important;
  }
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)