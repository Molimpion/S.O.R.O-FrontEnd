import React from 'react';

// A prop 'color' não é mais necessária
function StatCard({ title, value, iconSrc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-6">
      {/* CORREÇÃO: Removida a classe de cor de fundo */}
      <div className="w-16 h-16 flex items-center justify-center">
        {/* CORREÇÃO: Ícone aumentado de w-8 h-8 para w-12 h-12 */}
        <img src={iconSrc} alt={title} className="w-12 h-12" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-3xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
}

export default StatCard;