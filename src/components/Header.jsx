import React from 'react';

// --- Ícones para o Header ---
const MenuIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>;
const BellIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>;

function Header({ title, userName, onMenuClick }) {
  return (
    <header className="flex justify-between items-center mb-8">
      
      <div className="flex items-center">
        <button onClick={onMenuClick} className="text-gray-500 focus:outline-none lg:hidden mr-4">
          <MenuIcon />
        </button>
        <h1 className="text-3xl font-bold text-slate-800">{title}</h1>
      </div>

      <div className="flex items-center gap-6">
        {/* CORREÇÃO: Cor do ícone do sino alterada */}
        <button className="text-[#061C43] hover:text-blue-800 relative">
          <BellIcon />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* CORREÇÃO: Espessura da borda ajustada */}
        <button className="flex items-center gap-3 bg-white p-2 rounded-lg border-[0.5px] border-[#061C43] shadow-sm">
          <div className="w-9 h-9 rounded-md bg-orange-100 flex items-center justify-center font-bold text-orange-500 text-sm">
            MS
          </div>
          <div className="text-left hidden md:block">
            <p className="text-xs text-gray-400">Bem-vindo,</p>
            <span className="font-semibold text-sm text-gray-700">{userName}</span>
          </div>       
        </button>
      </div>
    </header>
  );
}

export default Header;