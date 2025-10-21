// src/components/TabelaUsuarios.jsx
import React from 'react';

// Componentes MUI para a tabela
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Box, Chip, IconButton, Typography
} from '@mui/material';

// Ícones de Ações
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// Função para definir a cor do "Chip" de acordo com o perfil
const getProfileChipColor = (perfil) => {
  switch (perfil.toUpperCase()) {
    case 'ADMIN':
      return { bgcolor: '#DBEAFE', color: '#1E40AF' }; // Azul
    case 'CHEFE':
      return { bgcolor: '#FEE2E2', color: '#991B1B' }; // Vermelho
    case 'ANALISTA':
      return { bgcolor: '#D1FAE5', color: '#065F46' }; // Verde
    default:
      return { bgcolor: '#F3F4F6', color: '#1F2937' }; // Cinza
  }
};

function TabelaUsuarios({ usuarios, onEdit, onDelete }) {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: '12px' }}>
      <Table sx={{ minWidth: 650 }} aria-label="tabela de usuários">
        <TableHead>
          <TableRow sx={{ '& th': { fontWeight: 'bold', color: '#6B7280' } }}>
            <TableCell>Matrícula</TableCell>
            <TableCell>Perfil</TableCell>
            <TableCell>Nome Completo</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Unidade Operacional</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usuarios.map((user) => (
            <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Typography variant="body2" fontWeight="bold">{user.matricula}</Typography>
              </TableCell>
              <TableCell>
                <Chip
                  label={user.perfil}
                  size="small"
                  sx={{
                    ...getProfileChipColor(user.perfil),
                    fontWeight: 'bold',
                    borderRadius: '6px'
                  }}
                />
              </TableCell>
              <TableCell>{user.nome}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.unidade}</TableCell>
              <TableCell align="center">
                <IconButton size="small" onClick={() => onEdit(user)}>
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" onClick={() => onDelete(user.id)} sx={{ ml: 1 }}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TabelaUsuarios;