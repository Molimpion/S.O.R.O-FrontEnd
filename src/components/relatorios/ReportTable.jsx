import React from 'react';

// Componente para estilizar o status da ocorrência
const StatusBadge = ({ status }) => {
  let colorClasses = '';
  switch (status) {
    case 'Concluído':
      colorClasses = 'bg-green-100 text-green-800';
      break;
    case 'Pendente':
      colorClasses = 'bg-yellow-100 text-yellow-800';
      break;
    case 'Em andamento':
      colorClasses = 'bg-blue-100 text-blue-800';
      break;
    default:
      colorClasses = 'bg-gray-100 text-gray-800';
  }

  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colorClasses}`}>
      {status}
    </span>
  );
};

const ReportTable = ({ occurrences }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Prévia de Relatório</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100"> {/* Fundo levemente mais escuro para o cabeçalho */}
            <tr>
              {/* Cabeçalhos */}
              {['ID de Ocorrência', 'Natureza', 'Bairro', 'Data e Hora', 'Status'].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {occurrences.map((oc, index) => (
              <tr key={oc.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer">
                  {oc.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{oc.natureza}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{oc.bairro}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{oc.dataHora}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <StatusBadge status={oc.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ReportTable;