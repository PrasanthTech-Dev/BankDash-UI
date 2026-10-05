import React, { useState, useEffect } from 'react';
import { mockServicesTopCards, mockBankServicesList } from '../data/mockData';

export default function ServicesPage() {
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.service-btn')) {
        setSelectedServiceId(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top 3 Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockServicesTopCards.map((card) => (
          <div
            key={card.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-xs flex items-center space-x-5"
          >
            <div className={`w-14 h-14 rounded-full ${card.bgColor} flex items-center justify-center shrink-0`}>
              <img src={card.icon} alt={card.title} className="w-6 h-6 object-contain" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#232323] dark:text-slate-100">{card.title}</h3>
              <p className="text-xs font-medium text-[#718EBF] dark:text-slate-400 mt-0.5">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bank Services List Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-[#343C6A] dark:text-slate-100">Bank Services List</h2>

        <div className="space-y-4">
          {mockBankServicesList.map((service) => {
            const isSelected = selectedServiceId === service.id;
            return (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Column 1: Icon + Title + Subtitle */}
                <div className="flex items-center space-x-4 min-w-[220px]">
                  <div className={`w-13 h-13 rounded-2xl ${service.bgColor} flex items-center justify-center shrink-0`}>
                    <img src={service.icon} alt={service.title} className="w-6 h-6 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#232323] dark:text-slate-100">{service.title}</h3>
                    <p className="text-xs font-medium text-[#718EBF] dark:text-slate-400 mt-0.5">{service.subtitle}</p>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="hidden sm:block">
                  <h4 className="text-sm font-bold text-[#232323] dark:text-slate-100">{service.col2Title}</h4>
                  <p className="text-xs text-[#718EBF] dark:text-slate-400 mt-0.5">{service.col2Subtitle}</p>
                </div>

                {/* Column 3 */}
                <div className="hidden md:block">
                  <h4 className="text-sm font-bold text-[#232323] dark:text-slate-100">{service.col3Title}</h4>
                  <p className="text-xs text-[#718EBF] dark:text-slate-400 mt-0.5">{service.col3Subtitle}</p>
                </div>

                {/* Column 4 */}
                <div className="hidden lg:block">
                  <h4 className="text-sm font-bold text-[#232323] dark:text-slate-100">{service.col4Title}</h4>
                  <p className="text-xs text-[#718EBF] dark:text-slate-400 mt-0.5">{service.col4Subtitle}</p>
                </div>

                {/* Action Button */}
                <div>
                  <button
                    onClick={() => setSelectedServiceId(service.id)}
                    onBlur={() => setSelectedServiceId(null)}
                    className={`service-btn px-6 py-2 rounded-full border text-xs font-semibold transition-all duration-200 active:scale-95 focus:outline-none ${
                      isSelected
                        ? 'border-[#00A389] text-[#00A389] font-bold ring-1 ring-[#00A389]'
                        : 'border-[#718EBF] text-[#718EBF] dark:border-slate-600 dark:text-slate-300 hover:border-[#00A389] hover:text-[#00A389]'
                    }`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

