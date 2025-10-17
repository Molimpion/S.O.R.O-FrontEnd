import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import Header from '../../components/Header';
import StatCard from '../../components/dashboard/StatCard';
import RecentOccurrencesTable from '../../components/dashboard/RecentOccurrencesTable';

import iconePendente from '../../assets/Icone-Pendente.png';
import iconeAndamento from '../../assets/Icone-Andamento.png';
import iconeConcluido from '../../assets/Icone-Concluido.png';

// Placeholders para Gráficos (sem alterações)
const ChartPlaceholder = ({ title }) => (
    <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <div className="h-64 flex items-center justify-center text-gray-400">
            {/* Gráfico será implementado aqui */}
        </div>
    </div>
);


function DashboardPage() {
  return (
    <AdminLayout pageTitle="Painel de Controle" userName="Maria Silva">
      {/* Seção de Estatísticas com as props de cor removidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard 
          title="Ocorrências Pendentes" 
          value="45" 
          iconSrc={iconePendente} 
        />
        <StatCard 
          title="Em Andamento" 
          value="30" 
          iconSrc={iconeAndamento} 
        />
        <StatCard 
          title="Concluídas Hoje" 
          value="15" 
          iconSrc={iconeConcluido} 
        />
      </div>

      {/* Seção de Gráficos (sem alterações) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <ChartPlaceholder title="Distribuição por Status" />
        <ChartPlaceholder title="Top 5 Naturezas de Ocorrências" />
        <ChartPlaceholder title="Top 6 Bairros com mais Ocorrências" />
      </div>

      {/* Tabela de Ocorrências Recentes (sem alterações) */}
      <RecentOccurrencesTable />
    </AdminLayout>
  );
}

export default DashboardPage;