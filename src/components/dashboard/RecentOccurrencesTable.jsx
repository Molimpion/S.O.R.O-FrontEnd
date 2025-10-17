import React from 'react';

const StatusBadge = ({ status }) => {
  // CORREÇÃO: Adicionados os estilos para os novos status
  const statusStyles = {
    Pendente: 'bg-red-100 text-red-700 border border-red-700',
    'Em andamento': 'bg-orange-100 text-orange-700 border border-orange-700',
    Concluído: 'bg-green-100 text-green-700 border border-green-700',
  };

  return (
    <span className={`py-1 px-3 rounded-full text-sm font-semibold ${statusStyles[status]}`}>
      {status}
    </span>
  );
};

function RecentOccurrencesTable() {
  // CORREÇÃO: Adicionadas as novas ocorrências com os status correspondentes
  const occurrences = [
    { id: '#34304', status: 'Em andamento', date: '16/10/2025 10:57:19', nature: 'Resgate', district: 'Encruzilhada' },
    { id: '#58825', status: 'Concluído', date: '16/10/2025 11:05:40', nature: 'Animal', district: 'Várzea' },
    { id: '#20462', status: 'Pendente', date: '16/10/2025 10:43:00', nature: 'Incêndio', district: 'Boa Viagem' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-slate-800 mb-6">Últimas Ocorrências Registradas</h3>
      
      <div className="rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            
            <thead className="bg-[#0F47A9]/50">
              <tr>
                <th className="py-4 px-4 text-sm font-semibold text-slate-800 text-center">ID de Ocorrência</th>
                <th className="py-4 px-4 text-sm font-semibold text-slate-800 text-center">Status</th>
                <th className="py-4 px-4 text-sm font-semibold text-slate-800 text-center">Data e Hora</th>
                <th className="py-4 px-4 text-sm font-semibold text-slate-800 text-center">Natureza</th>
                <th className="py-4 px-4 text-sm font-semibold text-slate-800 text-center">Bairro</th>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RecentOccurrencesTable;