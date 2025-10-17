import React from 'react';
import { Outlet } from 'react-router-dom'; // Importe o Outlet
import './index.css';

function App() {
  // O Outlet renderizará o componente da rota correspondente
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;