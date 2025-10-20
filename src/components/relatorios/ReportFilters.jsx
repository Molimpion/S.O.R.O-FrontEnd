import React from 'react';

// Se o projeto tiver uma biblioteca de ícones como react-icons, 
// é ideal usá-los no lugar dos spans de texto (ex: CalendarIcon, ChevronDownIcon)

const ReportFilters = ({ onSearch, onFilterChange }) => {
  return (
    <section className="flex flex-wrap items-center justify-start gap-3 bg-white p-2 rounded-xl shadow-md border border-gray-100">
      
      {/* Input de Pesquisa */}
      <div className="flex-1 min-w-[200px] max-w-xs relative">
        <input
          type="text"
          placeholder="Pesquisar:"
          className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
          // ... handlers
        />
        {/* Ícone de lupa ou search (opcional) */}
      </div>

      {/* Dropdown 1: Tempo */}
      <div className="relative">
          <select className="p-2 pl-4 pr-8 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-blue-500 focus:border-blue-500 text-sm cursor-pointer shadow-sm">
            <option>Últimos 30 dias</option>
            {/* ... */}
          </select>
          {/* Ícone de Calendário (mock) */}
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">📅</span>
      </div>
      
      {/* Dropdown 2: Status */}
      <div className="relative">
          <select className="p-2 pl-4 pr-8 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-blue-500 focus:border-blue-500 text-sm cursor-pointer shadow-sm">
            <option>Status</option>
            {/* ... */}
          </select>
          {/* Ícone de Status (mock) */}
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">⚙️</span>
      </div>

      {/* Dropdown 3: Bairro */}
      <div className="relative">
          <select className="p-2 pl-4 pr-8 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-blue-500 focus:border-blue-500 text-sm cursor-pointer shadow-sm">
            <option>Bairro</option>
            {/* ... */}
          </select>
          {/* Ícone de Local (mock) */}
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">📍</span>
      </div>
      
      {/* Dropdown 4: Natureza */}
      <div className="relative">
          <select className="p-2 pl-4 pr-8 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-blue-500 focus:border-blue-500 text-sm cursor-pointer shadow-sm">
            <option>Natureza</option>
            {/* ... */}
          </select>
          {/* Ícone de Natureza (mock) */}
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">🌱</span>
      </div>

    </section>
  );
};

export default ReportFilters;
