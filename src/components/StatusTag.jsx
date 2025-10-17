import React from 'react';

// Mapeamento das cores baseado na imagem (usando classes Tailwind)
const STATUS_STYLES = {
    // Status do Enum da API: PENDENTE, EM_ANDAMENTO, CONCLUIDO, CANCELADO
    
    // Status 'Em andamento' (Laranja/Marrom)
    'EM_ANDAMENTO': {
        text: 'text-orange-700',
        border: 'border-orange-400',
        bg: 'bg-orange-50', // Fundo bem suave
        label: 'Em andamento' 
    },
    // Status 'Concluído' (Verde)
    'CONCLUIDO': {
        text: 'text-green-700',
        border: 'border-green-400',
        bg: 'bg-green-50', 
        label: 'Concluído'
    },
    // Status 'Pendente' (Vermelho/Rosa)
    'PENDENTE': {
        text: 'text-red-700',
        border: 'border-red-400',
        bg: 'bg-red-50',
        label: 'Pendente'
    },
    // Status 'Cancelado' (Azul Marinho)
    'CANCELADO': {
        text: 'text-gray-700', // Um tom mais escuro
        border: 'border-gray-400',
        bg: 'bg-gray-100', // Fundo mais neutro
        label: 'Cancelado'
    },
};

const StatusTag = ({ status }) => {
    // Garante que o status existe ou usa um estilo padrão
    const style = STATUS_STYLES[status] || {
        text: 'text-gray-500',
        border: 'border-gray-300',
        bg: 'bg-white',
        label: status
    };

    return (
        <span
            className={`
                inline-flex items-center 
                px-4 py-1 rounded-full 
                text-xs font-semibold 
                border-2 shadow-sm
                ${style.text} 
                ${style.border} 
                ${style.bg}
            `}
        >
            {style.label}
        </span>
    );
};

export default StatusTag;
// Exemplo de uso: <StatusTag status="PENDENTE" />