import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import DashboardPage from './pages/Admin/DashboardPage.jsx';
import './index.css';

// Criação do roteador com as definições de rota
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // O componente App agora serve como um layout geral
    children: [
      {
        index: true, // Isso faz com que DashboardPage seja a rota padrão para "/"
        element: <DashboardPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      // Outras rotas do admin podem ser adicionadas aqui no futuro
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);