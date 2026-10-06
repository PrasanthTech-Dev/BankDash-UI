import React from 'react';
import { X } from 'lucide-react';

import bankDashLogo from '../assets/Maindashicons/iconfinder_vector_65_09_473792 1.png';
import dashboardIcon from '../assets/Maindashicons/Vector (9).png';
import glyphIcon from '../assets/Maindashicons/Glyph.png';
import accountsIcon from '../assets/Maindashicons/user 3 1.png';
import investmentsIcon from '../assets/Maindashicons/Group (1).png';
import creditCardsIcon from '../assets/Maindashicons/Group (2).png';
import loansIcon from '../assets/Maindashicons/Group (3).png';
import servicesIcon from '../assets/Maindashicons/service 1.png';
import privilegesIcon from '../assets/Maindashicons/Group (4).png';
import vector7Icon from '../assets/Maindashicons/Vector (7).png';

export default function Sidebar({ activeTab, setActiveTab, isOpen, setIsOpen }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', iconAsset: dashboardIcon },
    { id: 'transactions', label: 'Transactions', iconAsset: glyphIcon },
    { id: 'accounts', label: 'Accounts', iconAsset: accountsIcon },
    { id: 'investments', label: 'Investments', iconAsset: investmentsIcon },
    { id: 'credit-cards', label: 'Credit Cards', iconAsset: creditCardsIcon },
    { id: 'loans', label: 'Loans', iconAsset: loansIcon },
    { id: 'services', label: 'Services', iconAsset: servicesIcon },
    { id: 'privileges', label: 'My Privileges', iconAsset: privilegesIcon },
    { id: 'settings', label: 'Setting', iconAsset: vector7Icon },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-64 bg-white dark:bg-slate-900 border-r border-slate-200/80 dark:border-slate-800 transition-transform duration-300 ease-in-out flex flex-col justify-between ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Brand Logo Header */}
          <div className="h-20 flex items-center justify-between px-6 border-b border-slate-100 dark:border-slate-800/60">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
              {/* Dual Cards Brand Icon */}
              <div
                className="w-9 h-9 bg-[#16DBCC] shrink-0"
                style={{
                  maskImage: `url("${bankDashLogo}")`,
                  WebkitMaskImage: `url("${bankDashLogo}")`,
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                }}
              />
              <span className="text-2xl font-extrabold tracking-tight text-[#343C6A] dark:text-white">
                BankDash<span className="text-[#16DBCC]">.</span>
              </span>
            </div>

            {/* Close Button on Mobile */}
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 space-y-1">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`group relative w-full flex items-center space-x-4 px-8 py-3.5 text-base transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#00938A] dark:text-teal-400 font-bold'
                      : 'text-[#B1B1B1] hover:text-[#00938A] dark:text-slate-400 dark:hover:text-teal-400 font-medium'
                  }`}
                >
                  {/* Left Active Indicator Bar */}
                  {isActive && (
                    <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#00938A] dark:bg-teal-400 rounded-r-md" />
                  )}

                  {/* Masked Icon - takes exact same color as text on active and hover */}
                  <div
                    className={`w-6 h-6 shrink-0 transition-colors duration-200 ${
                      isActive
                        ? 'bg-[#00938A] dark:bg-teal-400'
                        : 'bg-[#B1B1B1] group-hover:bg-[#00938A] dark:bg-slate-400 dark:group-hover:bg-teal-400'
                    }`}
                    style={{
                      maskImage: `url("${item.iconAsset}")`,
                      WebkitMaskImage: `url("${item.iconAsset}")`,
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                      maskPosition: 'center',
                      WebkitMaskPosition: 'center',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                    }}
                  />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

      </aside>
    </>
  );
}
