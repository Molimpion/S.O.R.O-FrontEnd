import React, { useState } from 'react';
// Não precisamos mais do axios!
import { FiSearch, FiChevronDown, FiChevronRight, FiPlus, FiTrash2 } from 'react-icons/fi';

// Nossos dados iniciais. Eles servirão como o "banco de dados" do nosso front-end.
const initialData = [
    { id: 1, name: '(Natureza) Incêndio', children: [{ id: 11, name: 'Incêndio em Edificação', children: [] }] },
    { id: 2, name: '(Natureza) Resgate', children: [] },
    { id: 3, name: '(Batalhão) 1º Grupamento de Incêndio (1º GI)', children: [{ id: 31, name: 'Posto de Bombeiros - Boa Viagem', children: [] }] },
    { id: 4, name: '(Viatura) Auto Bomba Tanque (ABT)', children: [] },
    { id: 5, name: '(Acionamento) Telefone 193', children: [] }
];

// Uma função auxiliar para remover itens de forma recursiva (funciona para itens aninhados)
const removeItemRecursively = (items, itemId) => {
    return items
        .filter(item => item.id !== itemId)
        .map(item => {
            if (item.children && item.children.length > 0) {
                return { ...item, children: removeItemRecursively(item.children, itemId) };
            }
            return item;
        });
};

const GerenciamentoDadosMestres = () => {
    // 1. O ESTADO AGORA É INICIADO COM NOSSOS DADOS LOCAIS
    const [data, setData] = useState(initialData);
    
    // Estados para a interface continuam os mesmos
    const [expandedItems, setExpandedItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleExpand = (itemId) => {
        setExpandedItems(prev => 
            prev.includes(itemId) ? prev.filter(id => id !== itemId) : [...prev, itemId]
        );
    };

    // 2. FUNÇÃO DE DELEÇÃO SIMPLIFICADA
    const handleDelete = (itemId) => {
        if (window.confirm('Tem certeza que deseja excluir este item?')) {
            // A mágica acontece aqui: atualizamos o estado com a lista filtrada
            const newData = removeItemRecursively(data, itemId);
            setData(newData);
            alert('Item deletado com sucesso!');
        }
    };

    // Função recursiva para renderizar as linhas (igual a antes)
    const renderRows = (items, level = 0) => {
        return items.map(item => {
            const isExpanded = expandedItems.includes(item.id);
            const hasChildren = item.children && item.children.length > 0;
            return (
                <React.Fragment key={item.id}>
                    <div className="flex justify-between items-center p-4 border-b border-gray-200" style={{ paddingLeft: `${1 + level * 2}rem` }}>
                        <div className="flex items-center gap-3 text-gray-700">
                            {hasChildren ? (<span onClick={() => toggleExpand(item.id)} className="cursor-pointer text-gray-500">{isExpanded ? <FiChevronDown /> : <FiChevronRight />}</span>) : (<span className="w-4"></span>)}
                            {item.name}
                        </div>
                        <div className="flex items-center">
                            <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700 text-xl p-1"><FiTrash2 /></button>
                        </div>
                    </div>
                    {isExpanded && hasChildren && renderRows(item.children, level + 1)}
                </React.Fragment>
            );
        });
    };

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            {/* Barra de Ações (inalterada) */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="relative flex-grow min-w-[250px]"><FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" /><input type="text" placeholder="Pesquisar" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"/></div>
                <select className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"><option value="">Categoria</option></select>
                <button className="flex items-center gap-2 bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"><FiPlus /> Adicionar Item</button>
            </div>

            {/* Tabela de Dados */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="flex justify-between bg-blue-50 text-blue-800 font-bold p-4"><span>Nome / Identificador</span><span>Ações</span></div>
                <div>{renderRows(data)}</div>
            </div>
        </div>
    );
};

export default GerenciamentoDadosMestres;