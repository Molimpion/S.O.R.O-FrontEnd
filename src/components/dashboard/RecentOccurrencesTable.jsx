import React from 'react';

const StatusBadge = ({ status }) => {
  const statusStyles = {
    // CORREÇÃO: Cor da borda alterada para coincidir com a cor do texto
    Pendente: 'bg-red-100 text-red-700 border border-red-700',
  };

  return (
    <span className={`py-1 px-3 rounded-md text-sm font-semibold ${statusStyles[status]}`}>
      {status}
    </span>
  );
};

function RecentOccurrencesTable() {
  const occurrences = [
    { id: '#20462', status: 'Pendente', date: '16/10/2025 10:43:00', nature: 'Incêndio', district: 'Boa Viagem' },
    { id: '#20461', status: 'Pendente', date: '15/10/2025 22:15:00', nature: 'Animal', district: 'Espinheiro' },
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