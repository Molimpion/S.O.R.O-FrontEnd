import React from 'react';

import logoInterface from '../assets/Logo-interface.svg'; 
import iconePainel from '../assets/Icone-Painel.png';
import iconeOcorrencias from '../assets/Icone-Ocorrencias.png';
import iconeRelatorio from '../assets/Icone-Relatorio.png';
import iconeUsuarios from '../assets/Icone-Usuarios.png';
import iconeSair from '../assets/Icone-Sair.png';

function Sidebar({ isOpen, setIsOpen }) {
  const navItems = [
    { name: 'Painel', icon: iconePainel, active: true },
    { name: 'Ocorrências', icon: iconeOcorrencias, active: false },
    { name: 'Relatório', icon: iconeRelatorio, active: false },
    { name: 'Usuários', icon: iconeUsuarios, active: false },
  ];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <aside 
        className={`fixed top-0 left-0 h-full w-64 bg-[#ACC8E5] flex flex-col z-30 transform transition-transform duration-300 ease-in-out 
                   lg:relative lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-center p-6">
          <img src={logoInterface} alt="S.O.R.O. Logo" className="h-20 w-auto" />
        </div>
        
        <nav className="flex-1 px-4 py-6">
          <ul>
            {navItems.map((item) => (
              <li key={item.name} className="mb-3">
                <a
                  href="#"
                  // CORREÇÃO: Alterado de rounded-lg para rounded-[30px]
                  className={`flex items-center py-3 px-4 rounded-[30px] transition-colors duration-200 ${
                    item.active
                      ? 'bg-[#586680] text-white' 
                      : 'text-[#061C43] hover:bg-[#586680] hover:text-white'
                  }`}
                >
                  <img src={item.icon} alt={item.name} className="w-6 h-6" />
                  <span className="ml-4 font-semibold">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="px-4 py-6">
          <a href="#" 
             // CORREÇÃO: Aplicado o mesmo raio de borda para consistência
             className="flex items-center justify-center py-3 px-4 rounded-[30px] text-[#061C43] hover:bg-[#586680] hover:text-white">
            <img src={iconeSair} alt="Sair" className="w-6 h-6" />
            <span className="ml-3 font-semibold">Sair</span>
          </a>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;