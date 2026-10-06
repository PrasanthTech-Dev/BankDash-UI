import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AddCardModal from './components/AddCardModal';

// Pages
import DashboardOverview from './pages/DashboardOverview';
import TransactionsPage from './pages/TransactionsPage';
import AccountsPage from './pages/AccountsPage';
import InvestmentsPage from './pages/InvestmentsPage';
import CreditCardsPage from './pages/CreditCardsPage';
import LoansPage from './pages/LoansPage';
import ServicesPage from './pages/ServicesPage';
import PrivilegesPage from './pages/PrivilegesPage';
import SettingsPage from './pages/SettingsPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('bankdash_theme');
    return saved ? JSON.parse(saved) : false;
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);

  // Synchronize dark class on document element
  useEffect(() => {
    localStorage.setItem('bankdash_theme', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenAddCard = () => {
    setIsAddCardOpen(true);
  };

  const handleAddCardSubmit = (newCard) => {
    console.log('New Card Added:', newCard);
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview setActiveTab={setActiveTab} onOpenAddCard={handleOpenAddCard} />;
      case 'transactions':
        return <TransactionsPage onOpenAddCard={handleOpenAddCard} searchQuery={searchQuery} />;
      case 'accounts':
        return <AccountsPage setActiveTab={setActiveTab} />;
      case 'investments':
        return <InvestmentsPage />;
      case 'credit-cards':
        return <CreditCardsPage onOpenAddCard={handleOpenAddCard} />;
      case 'loans':
        return <LoansPage />;
      case 'services':
        return <ServicesPage />;
      case 'privileges':
        return <PrivilegesPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardOverview setActiveTab={setActiveTab} onOpenAddCard={handleOpenAddCard} />;
    }
  };

  return (
    <div className="h-screen w-screen bg-[#F4F5F7] dark:bg-[#0B132B] text-slate-800 dark:text-slate-100 flex transition-colors duration-200 font-sans overflow-hidden">
      {/* Sidebar navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full min-w-0 lg:pl-64 transition-all duration-300 overflow-hidden">
        {/* Header navigation bar */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setSidebarOpen={setSidebarOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Page Content Container (Slide/Content Section) */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-7xl w-full mx-auto overflow-y-auto overflow-x-auto">
          {renderActivePage()}
        </main>
      </div>

      {/* Global Add Credit Card Modal */}
      <AddCardModal
        isOpen={isAddCardOpen}
        onClose={() => setIsAddCardOpen(false)}
        onAddCard={handleAddCardSubmit}
      />
    </div>
  );
}
