const API_BASE_URL = 'http://localhost:3000/api';

/**
 * Função para realizar o login do usuário.
 */
export const loginUser = async (email, password) => {
    // ... (código existente sem alterações)
};

/**
 * Busca as estatísticas do painel de controle (ocorrências por status).
 * Requer um token de autenticação.
 */
export const getDashboardStats = async (token) => {
    // AINDA NÃO TEMOS O TOKEN: Para testar, você pode colar um token válido aqui.
    // const fakeToken = "seu_token_aqui"; 

    const response = await fetch(`${API_BASE_URL}/dashboard/ocorrencias-por-status`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Envia o token de autenticação no cabeçalho
            'Authorization': `Bearer ${token}`,
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || 'Não foi possível buscar os dados do painel.');
    }

    return data;
};