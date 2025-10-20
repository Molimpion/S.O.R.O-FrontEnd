import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import OcorrenciasFilterBar from '../../components/ocorrencias/OcorrenciasFilterBar';
import OcorrenciasTable from '../../components/ocorrencias/OcorrenciasTable';

function OcorrenciasPage() {
  return (
    // CORREÇÃO: Título da página alterado para "Lista de Ocorrências"
    <AdminLayout pageTitle="Lista de Ocorrências" userName="Maria Silva">
      <OcorrenciasFilterBar />
      <OcorrenciasTable />
    </AdminLayout>
  );
}

export default OcorrenciasPage;