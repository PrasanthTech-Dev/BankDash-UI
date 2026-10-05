import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import CreditCard from '../components/CreditCard';
import {
  mockCards,
  mockCardListItems,
  mockCardSettingsList,
} from '../data/mockData';

export default function CreditCardsPage({ onOpenAddCard }) {
  const [cardsList] = useState(mockCards);

  // Form State
  const [formData, setFormData] = useState({
    cardType: 'Classic',
    nameOnCard: 'My Cards',
    cardNumber: '**** **** **** ****',
    expirationDate: '25 January 2025',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('New card request submitted!');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 1. My Cards Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-[#343C6A] dark:text-slate-100">My Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsList.map((card, idx) => (
            <CreditCard
              key={card.id}
              card={card}
              styleType={idx === 0 ? 'primary' : idx === 1 ? 'accent' : 'secondary'}
            />
          ))}
        </div>
      </div>

      {/* 2. Card Expense Statistics & Card List Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Card Expense Statistics (Cols 4) */}
        <div className="lg:col-span-4 flex flex-col space-y-4">
          <h2 className="text-xl font-bold text-[#343C6A] dark:text-slate-100">Card Expense Statistics</h2>
          <div className="bg-white dark:bg-slate-900 rounded-[25px] p-6 border border-[#DFEAF2] dark:border-slate-800 shadow-xs flex-1 flex flex-col items-center justify-between min-h-[345px]">
            {/* Chart Area */}
            <div className="w-full h-56 relative flex items-center justify-center py-2">
              <svg viewBox="0 0 240 240" className="w-52 h-52 overflow-visible">
                {/* 1. DBL Bank (Top-Left, Green) */}
                <path
                  d="M 120 42 A 78 78 0 0 0 42 120 L 82 120 A 38 38 0 0 1 120 82 Z"
                  fill="#10B981"
                  className="transition-all duration-300 hover:opacity-90 cursor-pointer"
                  style={{ filter: 'drop-shadow(-3px -3px 8px rgba(16, 185, 129, 0.3))' }}
                >
                  <title>DBL Bank: 25%</title>
                </path>

                {/* 2. ABM Bank (Top-Right, Red - Largest Radius) */}
                <path
                  d="M 212 120 A 92 92 0 0 0 120 28 L 120 82 A 38 38 0 0 1 158 120 Z"
                  fill="#FF4B4A"
                  className="transition-all duration-300 hover:opacity-90 cursor-pointer"
                  style={{ filter: 'drop-shadow(4px -4px 10px rgba(255, 75, 74, 0.3))' }}
                >
                  <title>ABM Bank: 30%</title>
                </path>

                {/* 3. MCP Bank (Bottom-Left, Dark Gray) */}
                <path
                  d="M 42 120 A 78 78 0 0 0 120 198 L 120 158 A 38 38 0 0 1 82 120 Z"
                  fill="#343C6A"
                  className="transition-all duration-300 hover:opacity-90 cursor-pointer"
                  style={{ filter: 'drop-shadow(-3px 4px 8px rgba(52, 60, 106, 0.3))' }}
                >
                  <title>MCP Bank: 20%</title>
                </path>

                {/* 4. BRC Bank (Bottom-Right, Sky-Blue - Inset Radius) */}
                <path
                  d="M 120 185 A 65 65 0 0 0 185 120 L 158 120 A 38 38 0 0 1 120 158 Z"
                  fill="#38BDF8"
                  className="transition-all duration-300 hover:opacity-90 cursor-pointer"
                  style={{ filter: 'drop-shadow(3px 4px 8px rgba(56, 189, 248, 0.3))' }}
                >
                  <title>BRC Bank: 25%</title>
                </path>

                {/* Center White Hole */}
                <circle cx="120" cy="120" r="37" className="fill-white dark:fill-slate-900" />
              </svg>
            </div>

            {/* Donut Legend (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 w-full pt-4 border-t border-[#F4F5F7] dark:border-slate-800 text-xs font-semibold text-[#718EBF] dark:text-slate-300">
              <div className="flex items-center space-x-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] shrink-0" />
                <span>DBL Bank</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#38BDF8] shrink-0" />
                <span>BRC Bank</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#FF4B4A] shrink-0" />
                <span>ABM Bank</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#343C6A] shrink-0" />
                <span>MCP Bank</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card List (Cols 8) */}
        <div className="lg:col-span-8 flex flex-col space-y-4">
          <h2 className="text-xl font-bold text-[#343C6A] dark:text-slate-100">Card List</h2>
          <div className="space-y-4 flex-1 flex flex-col justify-between">
            {mockCardListItems.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-[25px] px-6 py-4.5 border border-[#DFEAF2] dark:border-slate-800 shadow-xs grid grid-cols-12 items-center gap-2 transition-all hover:shadow-sm h-[90px]"
              >
                {/* 1. Icon Container (Col 1) */}
                <div className="col-span-2 lg:col-span-1 flex items-center justify-start">
                  <div className={`w-14 h-14 rounded-[20px] ${item.bgColor} flex items-center justify-center shrink-0`}>
                    <img src={item.icon} alt={item.bank} className="w-6.5 h-6.5 object-contain" />
                  </div>
                </div>

                {/* 2. Card Type (Col 2) */}
                <div className="col-span-2 sm:col-span-2 pl-2 sm:pl-3">
                  <h4 className="font-bold text-[#232323] dark:text-slate-100 text-sm">Card Type</h4>
                  <p className="text-sm font-medium text-[#718EBF] dark:text-slate-400 mt-0.5">{item.cardType}</p>
                </div>

                {/* 3. Bank (Col 2) */}
                <div className="col-span-2 sm:col-span-2">
                  <h4 className="font-bold text-[#232323] dark:text-slate-100 text-sm">Bank</h4>
                  <p className="text-sm font-medium text-[#718EBF] dark:text-slate-400 mt-0.5">{item.bank}</p>
                </div>

                {/* 4. Card Number (Col 3) */}
                <div className="col-span-3 sm:col-span-3">
                  <h4 className="font-bold text-[#232323] dark:text-slate-100 text-sm whitespace-nowrap">Card Number</h4>
                  <p className="text-sm font-medium text-[#718EBF] dark:text-slate-400 mt-0.5 font-mono whitespace-nowrap">{item.cardNumber}</p>
                </div>

                {/* 5. Namain Card (Col 2) */}
                <div className="col-span-2 sm:col-span-2">
                  <h4 className="font-bold text-[#232323] dark:text-slate-100 text-sm">Namain Card</h4>
                  <p className="text-sm font-medium text-[#718EBF] dark:text-slate-400 mt-0.5">{item.nameInCard}</p>
                </div>

                {/* 6. View Details Action (Col 2, Right Aligned) */}
                <div className="col-span-1 sm:col-span-2 text-right">
                  <button className="text-sm font-semibold text-[#00A389] dark:text-[#16DBCC] hover:text-[#008771] dark:hover:text-teal-300 hover:underline whitespace-nowrap">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Add New Card & Card Setting Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Add New Card */}
        <div className="lg:col-span-7 flex flex-col space-y-3">
          <h2 className="text-lg font-bold text-[#343C6A] dark:text-slate-100">Add New Card</h2>
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm flex-1 flex flex-col justify-between space-y-6">
            <p className="text-xs text-slate-400 leading-relaxed">
              Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                    Card Type
                  </label>
                  <input
                    type="text"
                    value={formData.cardType}
                    onChange={(e) => setFormData({ ...formData, cardType: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#00A389]"
                    placeholder="Classic"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                    Name On Card
                  </label>
                  <input
                    type="text"
                    value={formData.nameOnCard}
                    onChange={(e) => setFormData({ ...formData, nameOnCard: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#00A389]"
                    placeholder="My Cards"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#00A389] font-mono"
                    placeholder="**** **** **** ****"
                  />
                </div>

                <div className="relative">
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                    Expiration Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.expirationDate}
                      onChange={(e) => setFormData({ ...formData, expirationDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#00A389] pr-10"
                      placeholder="25 January 2025"
                    />
                    <ChevronDown className="absolute right-4 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-9 py-3.5 rounded-2xl bg-[#00A389] hover:bg-[#008771] text-white font-bold text-sm shadow-md shadow-[#00A389]/25 transition-all cursor-pointer"
                >
                  Add Card
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Card Setting */}
        <div className="lg:col-span-5 flex flex-col space-y-3">
          <h2 className="text-lg font-bold text-[#343C6A] dark:text-slate-100">Card Setting</h2>
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm flex-1 flex flex-col justify-between space-y-4">
            {mockCardSettingsList.map((setting) => (
              <div
                key={setting.id}
                className="flex items-center space-x-4 p-2.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <div className={`w-12 h-12 rounded-2xl ${setting.bgColor} flex items-center justify-center shrink-0`}>
                  <img src={setting.icon} alt={setting.title} className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">{setting.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{setting.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
