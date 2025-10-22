import React from 'react';
// CORREÇÃO: Importando 'Link' e 'useLocation' do react-router-dom
import { Link, useLocation } from 'react-router-dom';

// Importando os ícones
import logoInterface from '../assets/Logo-interface.svg';
import iconeSair from '../assets/Icone-Sair.png';

// Importando os ícones padrão
import iconePainel from '../assets/Icone-Painel.png';
import iconeOcorrencias from '../assets/Icone-Ocorrencias.png';
import iconeRelatorios from '../assets/Icone-Relatorios.png';
import iconeUsuarios from '../assets/Icone-Usuarios.png';
import iconeGerenciamento from '../assets/Icone-Gerenciamento.png';
import iconeNovaOcorrencia from '../assets/Icone-NovaOcorrencia.png';

// Importando os ícones ATIVOS (hover) - nomes atualizados para corresponder aos arquivos
import iconePainelHover from '../assets/Icone-Painel-hover.png';
import iconeOcorrenciasHover from '../assets/Icone-Ocorrencias-Hover.png';
import iconeRelatoriosHover from '../assets/Icone-Relatorios-Hover.png';
import iconeUsuariosHover from '../assets/Icone-Usuarios-Hover.png';
import iconeGerenciamentoHover from '../assets/Icone-Gerenciamento-Hover.png';


function Sidebar({ isOpen, setIsOpen }) {
  // Hook do react-router-dom que nos dá a localização atual
  const location = useLocation();

  // CORREÇÃO: Estrutura de dados atualizada com caminhos e os dois ícones
  const navItems = [
    { name: 'Painel', path: '/', iconDefault: iconePainel, iconActive: iconePainelHover },
    { name: 'Ocorrências', path: '/ocorrencias', iconDefault: iconeOcorrencias, iconActive: iconeOcorrenciasHover },
    { name: 'Relatório', path: '/relatorios', iconDefault: iconeRelatorios, iconActive: iconeRelatoriosHover },
    { name: 'Usuários', path: '/usuarios', iconDefault: iconeUsuarios, iconActive: iconeUsuariosHover },
    { name: 'Gerenciamento', path: '/gerenciamento', iconDefault: iconeGerenciamento, iconActive: iconeGerenciamentoHover },
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
                        ? 'bg-[#586680]/30 text-[#061C43]' 
                        : 'text-[#061C43] hover:bg-[#586680]/30'
                    }`}
                  >
                    {/* CORREÇÃO: Renderiza o ícone ativo ou o padrão */}
                    <img src={isActive ? item.iconActive : item.iconDefault} alt={item.name} className="w-6 h-6" />
                    <span className="ml-4 font-medium">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="px-4 py-6">
          {/* Nova Ocorrência: posicionada acima do botão Sair */}
          <Link
            to="/ocorrencias/nova"
            className={`flex items-center justify-center py-3 px-4 rounded-[30px] transition-colors duration-200 text-[#061C43] ${
              location.pathname === '/ocorrencias/nova'
                ? 'bg-[#0F377E]/30'
                : 'hover:bg-[#0F377E]/30'
            } mb-3`}
          >
            <img src={iconeNovaOcorrencia} alt="Nova Ocorrência" className="w-6 h-6" />
            <span className="ml-3 font-medium">Nova Ocorrência</span>
          </Link>

          <Link
            to="/login"
            className={`flex items-center justify-center py-3 px-4 rounded-[30px] transition-colors duration-200 text-[#061C43] ${
              location.pathname === '/login'
                ? 'bg-[#0F377E]/30'
                : 'hover:bg-[#0F377E]/30'
            }`}
          >
            <img src={iconeSair} alt="Sair" className="w-6 h-6" />
            <span className="ml-3 font-medium">Sair</span>
          </Link>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
