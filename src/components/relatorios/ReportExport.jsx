import React from 'react';

const ReportExport = ({ onExportPDF, onExportCSV }) => {
  return (
    <section className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
      
      {/* O protótipo tem o título "Ações de Exportação" fora da linha dos botões no mobile, 
          mas vamos mantê-lo mais limpo e visível aqui. */}
      <h2 className="text-xl font-semibold text-gray-700 hidden">Ações de Exportação</h2>
      
      <div className="flex space-x-4">
          {/* Botão PDF (Cor Vermelha Sólida) */}
          <button 
            className="flex items-center justify-center px-6 py-3 text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition duration-150 font-medium space-x-2"
            onClick={onExportPDF} 
          >
            {/* Ícone de PDF (mock) */}
            <span className="text-xl">📄</span>
            <span>Gerar Relatório em PDF</span>
          </button>

          {/* Botão CSV (Cor Azul Marinho) */}
          <button 
            className="flex items-center justify-center px-6 py-3 text-white bg-blue-900 rounded-lg shadow-md hover:bg-blue-800 transition duration-150 font-medium space-x-2"
            onClick={onExportCSV} 
          >
            {/* Ícone de CSV (mock) */}
            <span className="text-xl">💾</span>
            <span>Gerar Relatório em CSV</span>
          </button>
      </div>
    </section>
  );
};

export default ReportExport;