import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function AdminLayout({ children, pageTitle, userName }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Área de conteúdo principal com a rolagem */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        
        {/* Container que aplica o padding para o Header e o conteúdo */}
        <div className="p-8">
          <Header 
            title={pageTitle} 
            userName={userName} 
            onMenuClick={() => setIsSidebarOpen(true)} 
          />
          <main>
            {children}
          </main>
        </div>

      </div>
    </div>
  );
}

export default AdminLayout;