import React, { useState } from 'react';
import logoSoro from '../../assets/Logo-S.O.R.O.svg'; 
import { loginUser } from '../../services/apiService';

// --- Ícones como Componentes ---
const UserIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
);
const LockIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
);
const EyeIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
);
const EyeSlashIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a10.05 10.05 0 015.353-6.114M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1l22 22" /></svg>
);
const CheckIcon = () => (
    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            const data = await loginUser(email, password);
            console.log('Login bem-sucedido:', data);
            alert('Login realizado com sucesso!');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row">
            
            {/* Seção Esquerda (Azul) - Com a cor e bordas ajustadas */}
            <div className="w-full lg:w-2/5 bg-[#ACC8E5] p-8 lg:p-12 flex flex-col justify-center items-center text-center rounded-r-[100px]">
                <img src={logoSoro} alt="Logo S.O.R.O." className="w-48 h-auto" />
                <div className="w-16 h-1 bg-[#D93442] mt-4 mb-4 rounded"></div>
                <p className="text-[#242E49] font-medium">Sistema Operacional para Registros de Ocorrências</p>
            </div>

            {/* Seção Direita (Formulário) */}
            <div className="w-full lg:w-3/5 bg-white p-8 flex flex-col justify-center items-center">
                <div className="w-full max-w-sm mx-auto">
                    <h2 className="text-3xl font-bold text-[#D93442] text-center mb-8">
                        Seja Bem Vindo!
                    </h2>
                    
                    {/* Estilo do formulário resgatado do código anterior */}
                    <form onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                                <span className="block sm:inline">{error}</span>
                            </div>
                        )}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="email">Email:</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><UserIcon /></div>
                                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email" className="shadow appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">Senha:</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><LockIcon /></div>
                                <input id="password" type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" className="shadow appearance-none border rounded w-full py-2 pl-10 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="focus:outline-none">
                                        {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mb-6 text-sm">
                            <label className="flex items-center text-gray-500">
                                <input className="mr-2 leading-tight" type="checkbox" />
                                <span className="text-sm">Lembrar-me</span>
                            </label>
                            <a href="#" className="font-bold text-gray-500 hover:text-gray-800">Esqueceu a Senha?</a>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-[#1C243A] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg w-full focus:outline-none focus:shadow-outline disabled:bg-gray-400"
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Entrando...' : 'Entrar'}
                            </button>
                        </div>
                        <div className="text-center mt-8 flex items-center justify-center">
                            <CheckIcon />
                            <span className="text-sm text-gray-500 ml-2">Conexão segura e criptografada</span>
                        </div>
                    </form>
                    <footer className="text-center mt-12 text-xs text-gray-400">
                        <p>&copy; 2025 S.O.R.O - Sistema Operacional de Registros de Ocorrências</p>
                        <p>Versão 1.0.0 - Todos os Direitos Reservados</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;