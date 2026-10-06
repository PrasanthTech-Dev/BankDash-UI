import React, { useState } from 'react';
import { Search, Bell, Menu, Sun, Moon, LogOut, Shield, User } from 'lucide-react';
import { mockUser, mockNotifications } from '../data/mockData';
import settingsIconAsset from '../assets/Maindashicons/settings 1.png';

export default function Header({
  activeTab,
  setActiveTab,
  setSidebarOpen,
  darkMode,
  setDarkMode,
  searchQuery,
  setSearchQuery
}) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const getTitle = () => {
    switch (activeTab) {
      case 'dashboard':
        return 'Overview';
      case 'transactions':
        return 'Transactions';
      case 'accounts':
        return 'Accounts';
      case 'investments':
        return 'Investments';
      case 'credit-cards':
        return 'Credit Cards';
      case 'loans':
        return 'Loans';
      case 'services':
        return 'Services';
      case 'privileges':
        return 'My Privileges';
      case 'settings':
        return 'Setting';
      default:
        return 'Overview';
    }
  };

  const unreadCount = mockNotifications.filter(n => !n.read).length;

  return (
    <header className="shrink-0 sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 md:px-8 py-3 md:py-0 md:h-20 flex flex-col justify-center transition-colors">
      {/* Top Header Row */}
      <div className="relative flex items-center justify-between w-full">
        {/* Left side: Hamburger (Mobile) */}
        <div className="flex items-center space-x-3 md:space-x-0 z-10">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-1.5 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Open sidebar"
          >
            <Menu className="w-6 h-6 text-[#343C6A] dark:text-slate-200" />
          </button>

          {/* Desktop Title */}
          <h1 className="hidden md:block text-2xl font-bold tracking-tight text-[#343C6A] dark:text-slate-100">
            {getTitle()}
          </h1>
        </div>

        {/* Mobile Center Title */}
        <div className="md:hidden absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-xl font-bold tracking-tight text-[#343C6A] dark:text-slate-100">
            {getTitle()}
          </h1>
        </div>

        {/* Right side: Search bar (desktop) & Quick actions */}
        <div className="flex items-center space-x-2.5 sm:space-x-4 z-10">
          {/* Search Input (Desktop) */}
          <div className="relative hidden md:block w-64 lg:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718EBF]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for something"
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-transparent focus:border-teal-500 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-[#718EBF] outline-hidden transition-all duration-200"
            />
          </div>

          {/* Quick Settings Icon Asset */}
          <button
            onClick={() => setActiveTab('settings')}
            className="hidden sm:flex p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors items-center justify-center"
            title="Quick Settings"
          >
            <img
              src={settingsIconAsset}
              alt="Settings"
              className="w-5 h-5 object-contain opacity-75 dark:opacity-90 hover:opacity-100 transition-opacity"
            />
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hidden sm:flex p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors items-center justify-center"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
          </button>

          {/* Notification Bell Dropdown */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfileMenu(false);
              }}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-rose-500 transition-colors relative flex items-center justify-center"
              title="Notifications"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white dark:ring-slate-900 animate-pulse" />
              )}
            </button>

            {/* Notifications Panel */}
            {showNotifications && (
              <div className="absolute right-0 mt-3 w-72 sm:w-96 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">Notifications</h4>
                  <span className="text-xs bg-teal-50 text-teal-600 dark:bg-teal-950 dark:text-teal-400 px-2 py-0.5 rounded-full font-medium">
                    {unreadCount} New
                  </span>
                </div>
                <div className="space-y-3 max-h-72 overflow-y-auto">
                  {mockNotifications.map((n) => (
                    <div key={n.id} className="p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
                      <div className="flex justify-between items-start">
                        <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{n.title}</p>
                        <span className="text-[10px] text-slate-400">{n.time}</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{n.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile Avatar & Menu */}
          <div className="relative">
            <button
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
                setShowNotifications(false);
              }}
              className="flex items-center focus:outline-hidden ring-2 ring-teal-500/30 rounded-full p-0.5 hover:ring-teal-500 transition-all"
            >
              <img
                src={mockUser.avatar}
                alt={mockUser.name}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
              />
            </button>

            {/* Profile Dropdown */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-3 w-60 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-3 py-2.5 border-b border-slate-100 dark:border-slate-800 mb-1">
                  <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">{mockUser.name}</p>
                  <p className="text-xs text-slate-400 truncate">{mockUser.email}</p>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('settings');
                    setShowProfileMenu(false);
                  }}
                  className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <User className="w-4 h-4 text-teal-600" />
                  <span>My Profile</span>
                </button>
                <button
                  onClick={() => {
                    setActiveTab('settings');
                    setShowProfileMenu(false);
                  }}
                  className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <Shield className="w-4 h-4 text-indigo-500" />
                  <span>Security & 2FA</span>
                </button>
                <div className="my-1 border-t border-slate-100 dark:border-slate-800" />
                <button
                  onClick={() => setShowProfileMenu(false)}
                  className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Log Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search Row (visible on < md screens) */}
      <div className="relative md:hidden mt-2.5 w-full">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718EBF]" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for something"
          className="w-full pl-10 pr-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-transparent focus:border-teal-500 text-xs text-slate-800 dark:text-slate-100 placeholder-[#718EBF] outline-hidden transition-all duration-200"
        />
      </div>
    </header>
  );
}
