import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import DashboardPage from './pages/Admin/DashboardPage.jsx';
import OcorrenciasPage from './pages/Admin/OcorrenciasPage.jsx'; // <-- IMPORTA A NOVA PÁGINA
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
      { // <-- ADICIONA A NOVA ROTA
        path: 'ocorrencias',
        element: <OcorrenciasPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);