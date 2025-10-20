// src/components/FormularioUsuario.jsx
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function FormularioUsuario({ onSave, onCancel, usuarioParaEditar }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    matricula: '',
    perfil: 'ANALISTA',
    unidade: '',
    senha: ''
  });

  useEffect(() => {
    if (usuarioParaEditar) {
      setFormData({ ...usuarioParaEditar, senha: '' }); // Não preenche a senha
    }
  }, [usuarioParaEditar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
        {usuarioParaEditar ? 'Editar Usuário' : 'Adicionar Novo Usuário'}
      </Typography>
      <TextField name="nome" label="Nome Completo" value={formData.nome} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
      <TextField name="email" label="E-mail" type="email" value={formData.email} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
      <TextField name="matricula" label="Matrícula" value={formData.matricula} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
      <TextField name="unidade" label="Unidade Operacional" value={formData.unidade} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
      
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="perfil-select-label">Perfil</InputLabel>
        <Select
          labelId="perfil-select-label"
          name="perfil"
          value={formData.perfil}
          label="Perfil"
          onChange={handleChange}
        >
          <MenuItem value="ANALISTA">Analista</MenuItem>
          <MenuItem value="ADMIN">Admin</MenuItem>
          <MenuItem value="CHEFE">Chefe</MenuItem>
        </Select>
      </FormControl>

      <TextField name="senha" label="Senha" type="password" placeholder={usuarioParaEditar ? "Deixe em branco para não alterar" : ""} fullWidth sx={{ mb: 3 }} />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Button onClick={onCancel} variant="outlined">Cancelar</Button>
        <Button type="submit" variant="contained">Salvar</Button>
      </Box>
    </Box>
  );
}

export default FormularioUsuario;