import React from 'react';
// CORREÇÃO: Importando 'Link' e 'useLocation' do react-router-dom
import { Link, useLocation } from 'react-router-dom';

// Importando os ícones
import logoInterface from '../assets/Logo-interface.svg'; 
import iconeSair from '../assets/Icone-Sair.png';

// Importando os ícones padrão
import iconePainel from '../assets/Icone-Painel.png';
import iconeOcorrencias from '../assets/Icone-Ocorrencias.png';
import iconeRelatorio from '../assets/Icone-Relatorio.png';
import iconeUsuarios from '../assets/Icone-Usuarios.png';

// Importando os ícones ATIVOS (hover)
import iconePainelHover from '../assets/Icone-Painel-hover.png';
import iconeOcorrenciasHover from '../assets/Icone-Ocorrencias-hover.png';
import iconeRelatorioHover from '../assets/Icone-Relatorio-hover.png';
import iconeUsuariosHover from '../assets/Icone-Usuarios-hover.png';


function Sidebar({ isOpen, setIsOpen }) {
  // Hook do react-router-dom que nos dá a localização atual
  const location = useLocation();

  // CORREÇÃO: Estrutura de dados atualizada com caminhos e os dois ícones
  const navItems = [
    { name: 'Painel', path: '/', iconDefault: iconePainel, iconActive: iconePainelHover },
    { name: 'Ocorrências', path: '/ocorrencias', iconDefault: iconeOcorrencias, iconActive: iconeOcorrenciasHover },
    { name: 'Relatório', path: '/relatorio', iconDefault: iconeRelatorio, iconActive: iconeRelatorioHover },
    { name: 'Usuários', path: '/usuarios', iconDefault: iconeUsuarios, iconActive: iconeUsuariosHover },
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
            {navItems.map((item) => {
              // Verifica se o caminho do item é o mesmo da URL atual
              const isActive = location.pathname === item.path;

              return (
                <li key={item.name} className="mb-3">
                  {/* CORREÇÃO: Usando o componente <Link> em vez de <a> */}
                  <Link
                    to={item.path}
                    className={`flex items-center py-3 px-4 rounded-[30px] transition-colors duration-200 ${
                      isActive
                        ? 'bg-[#586680] text-white' 
                        : 'text-white hover:bg-[#586680]'
                    }`}
                  >
                    {/* CORREÇÃO: Renderiza o ícone ativo ou o padrão */}
                    <img src={isActive ? item.iconActive : item.iconDefault} alt={item.name} className="w-6 h-6" />
                    <span className="ml-4 font-semibold">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="px-4 py-6">
          <Link to="/login" 
             className="flex items-center justify-center py-3 px-4 rounded-[30px] text-white hover:bg-[#586680]">
            <img src={iconeSair} alt="Sair" className="w-6 h-6" />
            <span className="ml-3 font-semibold">Sair</span>
          </Link>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;