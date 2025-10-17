import React from 'react';

// Importe os ícones de ação
import iconeAcao1 from '../../assets/Icone-Ação1.png';
import iconeAcao2 from '../../assets/Icone-Ação2.png';

const StatusBadge = ({ status }) => {
    // Definindo as classes Tailwind conforme o seu pedido, com a borda e o texto na mesma cor (ex: -700)
    // E adicionando 'border-2' para deixar a linha do contorno visível.
    const statusStyles = {
        Pendente: 'bg-red-100 text-red-700 border-2 border-red-700',
        'Em andamento': 'bg-orange-100 text-orange-700 border-2 border-orange-700',
        Concluído: 'bg-green-100 text-green-700 border-2 border-green-700',
        // Adicionando 'Cancelado' com a mesma lógica de cor escura para o texto/borda
        Cancelado: 'text-slate-700 bg-gray-100 border-2 border-slate-700',
    };

    // Obter as classes de estilo para o status atual, ou usar um fallback
    const classes = statusStyles[status] || 'bg-gray-100 text-gray-500 border-2 border-gray-500';

    return (
        <span className={`py-1 px-3 rounded-full text-xs font-semibold ${classes}`}>
            {status}
        </span>
    );
};

function OcorrenciasTable() {
    const occurrences = [
        { id: '#34304', status: 'Em andamento', date: '16/10/2025 10:57:19', nature: 'Resgate', district: 'Encruzilhada' },
        { id: '#58825', status: 'Concluído', date: '16/10/2025 11:05:40', nature: 'Animal', district: 'Várzea' },
        { id: '#20462', status: 'Pendente', date: '16/10/2025 10:43:00', nature: 'Incêndio', district: 'Boa Viagem' },
        { id: '#19873', status: 'Cancelado', date: '15/10/2025 08:12:00', nature: 'Árvore', district: 'Casa Amarela' },
        { id: '#45567', status: 'Concluído', date: '14/10/2025 17:30:15', nature: 'Incêndio', district: 'Pina' },
    ];

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-[#0F47A9]/50">
                        <tr>
                            <th className="py-3 px-4 text-sm font-semibold text-slate-800 text-center">ID de Ocorrência</th>
                            <th className="py-3 px-4 text-sm font-semibold text-slate-800 text-center">Status</th>
                            <th className="py-3 px-4 text-sm font-semibold text-slate-800 text-center">Data e Hora</th>
                            <th className="py-3 px-4 text-sm font-semibold text-slate-800 text-center">Natureza</th>
                            <th className="py-3 px-4 text-sm font-semibold text-slate-800 text-center">Bairro</th>
                            <th className="py-3 px-4 text-sm font-semibold text-slate-800 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {occurrences.map((occ) => (
                            <tr key={occ.id} className="border-b border-gray-200 last:border-b-0">
                                <td className="py-4 px-4 font-medium text-gray-800 text-center">{occ.id}</td>
                                <td className="py-4 px-4"><div className="flex justify-center"><StatusBadge status={occ.status} /></div></td>
                                <td className="py-4 px-4 text-gray-600 text-center">{occ.date}</td>
                                <td className="py-4 px-4 text-gray-600 text-center">{occ.nature}</td>
                                <td className="py-4 px-4 text-gray-600 text-center">{occ.district}</td>
                                <td className="py-4 px-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <button className="hover:opacity-75"><img src={iconeAcao1} alt="Ação 1" className="w-5 h-5" /></button>
                                        <button className="hover:opacity-75"><img src={iconeAcao2} alt="Ação 2" className="w-5 h-5" /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OcorrenciasTable;