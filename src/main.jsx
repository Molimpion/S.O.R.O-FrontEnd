import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import DashboardPage from './pages/Admin/DashboardPage.jsx';
import OcorrenciasPage from './pages/Admin/OcorrenciasPage.jsx';
import GerenciamentoPage from './pages/Admin/GerenciamentoPage.jsx';
import RelatoriosPage from './pages/Admin/RelatoriosPage.jsx';
import UsuariosPage from './pages/Admin/UsuariosPage.jsx';
import NovaOcorrenciaPage from './pages/Admin/NovaOcorrenciaPage.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'ocorrencias',
        element: <OcorrenciasPage />,
      },
      {
        path: 'ocorrencias/nova',
        element: <NovaOcorrenciaPage />,
      },
      {
        path: 'gerenciamento',
        element: <GerenciamentoPage />,
      },
      {
        path: 'relatorios',
        element: <RelatoriosPage />,
      },
      {
        path: 'usuarios',
        element: <UsuariosPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
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