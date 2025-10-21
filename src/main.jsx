// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// --- ADICIONADO: Imports do Material-UI ---
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Seus imports de páginas e componentes continuam os mesmos
import App from './App.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import DashboardPage from './pages/Admin/DashboardPage.jsx';
import OcorrenciasPage from './pages/Admin/OcorrenciasPage.jsx';
import GerenciamentoPage from './pages/Admin/GerenciamentoPage.jsx';
import RelatoriosPage from './pages/Admin/RelatoriosPage.jsx';
import UsuariosPage from './pages/Admin/UsuariosPage.jsx';
import NovaOcorrenciaPage from './pages/Admin/NovaOcorrenciaPage.jsx';
import './index.css';

// --- ADICIONADO: Criação de um tema básico ---
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Um azul padrão, você pode customizar depois
    },
    secondary: {
      main: '#dc004e', // Um rosa padrão
    },
  },
});

// Sua configuração de rotas continua a mesma
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'ocorrencias', element: <OcorrenciasPage /> },
      { path: 'ocorrencias/nova', element: <NovaOcorrenciaPage /> },
      { path: 'gerenciamento', element: <GerenciamentoPage /> },
      { path: 'relatorios', element: <RelatoriosPage /> },
      { path: 'usuarios', element: <UsuariosPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* --- MODIFICADO: Envolvemos o RouterProvider com o ThemeProvider --- */}
    <ThemeProvider theme={theme}>
      {/* O CssBaseline normaliza os estilos, é uma boa prática */}
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// --- PWA: Registro do Service Worker ---
if ('serviceWorker' in navigator) {
  // Registra o Service Worker (sw.js deve estar na pasta public)
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registrado com sucesso. Escopo:', registration.scope);
      })
      .catch(error => {
        console.log('Falha no registro do SW:', error);
      });
  });
}