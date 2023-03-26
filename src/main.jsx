import React from 'react'
import ReactDOM from 'react-dom/client'

import { AuthProvider } from './hooks/auth';

import { Routes } from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <ToastContainer position='top-right' theme='colored' style={{ width: "400px" }} />
    </ThemeProvider>
  </React.StrictMode>,
)
