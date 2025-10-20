// src/pages/Admin/UsuariosPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';

// Importando componentes do Material-UI
import { Box, Button, TextField, Typography, CircularProgress, Alert, Pagination, Dialog, DialogContent } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

// Importando nossos componentes customizados (vamos criá-los a seguir)
import TabelaUsuarios from '../../components/TabelaUsuarios';
import FormularioUsuario from '../../components/FormularioUsuario';

// DADOS MOCKADOS: Use isso para desenvolver a UI antes de conectar o backend.
const mockUsuarios = [
  { id: 1, matricula: '20462', perfil: 'ANALISTA', nome: 'José Xavier', email: 'joseXavier@empresa.com', unidade: 'Quartel Central' },
  { id: 2, matricula: '34304', perfil: 'ADMIN', nome: 'Maria Silva', email: 'mariaSilva@empresa.com', unidade: 'Un. Zona Norte' },
  { id: 3, matricula: '58825', perfil: 'ADMIN', nome: 'Jessica Andrade', email: 'joseAndrad@empresa.com', unidade: 'Un. Zona Sul' },
  { id: 4, matricula: '17188', perfil: 'CHEFE', nome: 'Roberto Carlos', email: 'robertoCa@empresa.com', unidade: 'Quartel Central' },
  { id: 5, matricula: '89094', perfil: 'CHEFE', nome: 'Cristiano Amorim', email: 'crisAmorim@empresa.com', unidade: 'Posto Aeroporto' },
  { id: 6, matricula: '55461', perfil: 'ADMIN', nome: 'Gustavo Coperno', email: 'guCoperno@empresa.com', unidade: 'Posto Aeroporto' },
  { id: 7, matricula: '45169', perfil: 'ANALISTA', nome: 'Claudio Sotero', email: 'soteroC@empresa.com', unidade: 'Un. Zona Norte' },
];


function UsuariosPage() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Controle do Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      setLoading(true);
      try {
        // AJUSTE AQUI: Substitua o mock pela sua chamada de API real
        // const response = await axios.get('http://sua-api.com/usuarios');
        // setUsuarios(response.data);
        setTimeout(() => { // Simula o tempo de carregamento da API
            setUsuarios(mockUsuarios);
            setLoading(false);
        }, 1000);
      } catch (err) {
        setError("Não foi possível carregar os dados dos usuários.");
        console.error(err);
        setLoading(false);
      }
    };
    fetchUsuarios();
  }, []);

  const handleOpenModal = (user = null) => {
    setEditingUser(user);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingUser(null);
  };
  
  const handleSaveUser = async (userData) => {
      // Aqui vai a lógica para salvar (POST para novo, PUT para editar)
      console.log("Salvando usuário:", userData);
      // Lembre-se de chamar fetchUsuarios() novamente após salvar para atualizar a lista
      handleCloseModal();
  }
  
  const handleDeleteUser = async (userId) => {
      // Lógica para deletar (DELETE)
      console.log("Deletando usuário com ID:", userId);
      // Lembre-se de chamar fetchUsuarios() novamente após deletar para atualizar a lista
  }


  // Lógica de filtro para a pesquisa
  const filteredUsers = usuarios.filter(user =>
    user.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.matricula.includes(searchQuery)
  );

  return (
    <AdminLayout pageTitle="" userName="Maria Silva">
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
          Usuários Registrados
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Pesquisar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ width: '400px', backgroundColor: 'white' }}
          />
          <Button
            variant="contained"
            startIcon={<AddCircleIcon />}
            onClick={() => handleOpenModal()}
            sx={{ backgroundColor: '#10B981', '&:hover': { backgroundColor: '#059669' }, borderRadius: '8px', textTransform: 'none', fontWeight: 'bold' }}
          >
            Adicionar Usuário
          </Button>
        </Box>

        {loading && <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}><CircularProgress /></Box>}
        {error && <Alert severity="error">{error}</Alert>}
        {!loading && !error && (
          <>
            <TabelaUsuarios 
                usuarios={filteredUsers}
                onEdit={handleOpenModal}
                onDelete={handleDeleteUser}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <Pagination count={3} color="primary" /> {/* Idealmente, 'count' seria calculado */}
            </Box>
          </>
        )}
      </Box>

      {/* Modal para Adicionar/Editar Usuário */}
      <Dialog open={modalOpen} onClose={handleCloseModal} maxWidth="sm" fullWidth>
        <DialogContent>
          <FormularioUsuario
            onSave={handleSaveUser}
            onCancel={handleCloseModal}
            usuarioParaEditar={editingUser}
          />
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}

export default UsuariosPage;