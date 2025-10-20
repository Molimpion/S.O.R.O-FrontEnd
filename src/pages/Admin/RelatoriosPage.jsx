import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

// Veja a mudança aqui: 'Reports' virou 'relatorios'
import ReportFilters from '../../components/relatorios/ReportFilters';
import ReportExport from '../../components/relatorios/ReportExport';
import ReportTable from '../../components/relatorios/ReportTable';

// Mock data (será substituído pela API)
const occurrencesMock = [
    { id: '#20462', natureza: 'Incêndio', bairro: 'Boa Vista', dataHora: '10/10/2025 9:10:04', status: 'Concluído' },
    { id: '#34304', natureza: 'Incêndio', bairro: 'Boa Viagem', dataHora: '16/10/2025 10:10:04', status: 'Pendente' },
    { id: '#58825', natureza: 'Resgate', bairro: 'Encruzilhada', dataHora: '16/10/2025 10:57:04', status: 'Em andamento' },
    { id: '#17188', natureza: 'Animal', bairro: 'Várzea', dataHora: '16/10/2025 11:30:03', status: 'Concluído' },
    { id: '#20334', natureza: 'Queimada', bairro: 'Boa Vista', dataHora: '16/10/2025 13:36:01', status: 'Pendente' },
    { id: '#34245', natureza: 'Trânsito', bairro: 'Espinheiro', dataHora: '16/10/2025 17:00:06', status: 'Em andamento' },
];

function RelatoriosPage() {
    // Usando o estado para armazenar e gerenciar a lista de ocorrências
    const [occurrences, setOccurrences] = useState(occurrencesMock);
    
    // Funções de lógica (serão implementadas depois)
    const handleExportPDF = () => {
        alert('Chamando API para exportar PDF...');
        // Aqui irá a lógica de integração com o Back-end
    };

    const handleExportCSV = () => {
        alert('Chamando API para exportar CSV...');
        // Aqui irá a lógica de integração com o Back-end
    };

    return (
        <AdminLayout pageTitle="Relatórios de Ocorrências" userName="Maria Silva">
            {/* O conteúdo da página vai como children do AdminLayout */}
            <div className="p-8 space-y-8 bg-gray-50 min-h-screen"> 
                {/* 1. COMPONENTE DE FILTROS */}
                <ReportFilters />
                
                {/* 2. COMPONENTE DE AÇÕES DE EXPORTAÇÃO */}
                <ReportExport 
                    onExportPDF={handleExportPDF} 
                    onExportCSV={handleExportCSV} 
                />

                {/* 3. COMPONENTE DE PRÉVIA DA TABELA */}
                {/* Passando a lista de ocorrências para o componente de tabela */}
                <ReportTable occurrences={occurrences} />
            </div>
        </AdminLayout>
    );
}

export default RelatoriosPage;
