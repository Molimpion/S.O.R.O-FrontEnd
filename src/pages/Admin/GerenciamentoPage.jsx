import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

// 1. IMPORTAMOS O CONTEÚDO QUE QUEREMOS MOSTRAR
import GerenciamentoDadosMestres from '../../components/gerenciamento/GerenciamentoDadosMestres';


function GerenciamentoPage() {
  return (
    <AdminLayout pageTitle="Gerenciamento de Dados Mestres" userName="Maria Silva">
      
      {/* 2. ADICIONAMOS O TÍTULO E O COMPONENTE AQUI DENTRO */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Gerenciamento de Dados Mestres
      </h1>

      <GerenciamentoDadosMestres />

    </AdminLayout>
  );
}

export default GerenciamentoPage;