import React from 'react';
// Importe os ícones que você adicionou aos assets
import iconePesquisar from '../../assets/Icone-Pesquisar.png';
import iconeCalendario from '../../assets/Icone-Calendario.png';
import iconeStatus from '../../assets/Icone-Status.png';
import iconeBairro from '../../assets/Icone-Bairro.png';
import iconeNatureza from '../../assets/Icone-Natureza.png';
import iconeAdicionar from '../../assets/Icone-++.png';

// Componente para replicar o estilo dos botões de filtro na imagem
const FilterButton = ({ icon, label }) => (
    // Estilo dos botões de filtro: Fundo branco, borda suave, sombra leve e arredondamento
    <button className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl p-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
        {/* Ícone à esquerda */}
        <img src={icon} alt={label} className="w-5 h-5 text-[#061C43]" />
        
        {/* Texto do filtro */}
        <span className='text-gray-500 font-normal'>{label}</span>
        
        {/* Ícone de seta para baixo (dropdown) */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
    </button>
);

function OcorrenciasFilterBar() {
    return (
        // REMOVIDO: O div com fundo cinza, padding e sombra.
        // Mantido o div wrapper original com a margem inferior (mb-6) para espaçamento.
        <div className="mb-6">
            <div className="flex flex-wrap items-center justify-start gap-4">
                
                {/* 1. Campo de Pesquisa (o mais largo) */}
                <div className="relative flex-grow min-w-[200px]">
                    <input 
                        type="text"
                        placeholder="Pesquisar:"
                        // Estilo replicado: Fundo branco, arredondamento acentuado e sombra leve
                        className="w-full bg-white border border-gray-100 rounded-xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#061C43] shadow-sm"
                    />
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        {/* Ícone de lupa com cor mais escura */}
                        <img src={iconePesquisar} alt="Pesquisar" className="w-5 h-5 text-gray-600" />
                    </div>
                </div>

                {/* 2. Botões de Filtro */}
                <FilterButton icon={iconeCalendario} label="Últimos 30 dias" />
                <FilterButton icon={iconeStatus} label="Status" />
                <FilterButton icon={iconeBairro} label="Bairro" />
                <FilterButton icon={iconeNatureza} label="Natureza" />

                {/* 3. Botão Adicionar (Cor escura) */}
                <button className="bg-[#061C43] text-white rounded-xl p-4 hover:bg-opacity-90 transition-colors shadow-md">
                    <img src={iconeAdicionar} alt="Adicionar Nova Ocorrência" className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}

export default OcorrenciasFilterBar;