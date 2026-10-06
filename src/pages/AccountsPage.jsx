import React from 'react';
import CreditCard from '../components/CreditCard';
import { mockAccountsOverview, mockCards, mockDebitCreditData, mockInvoices } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import myBalanceIcon from '../assets/Acc/money-tag 1.png';
import incomeIcon from '../assets/Acc/Group (1).png';
import expenseIcon from '../assets/Acc/001-medical.png';
import savingIcon from '../assets/Acc/003-saving.png';
import appleIcon from '../assets/Acc/apple 2 1.png';
import playstationIcon from '../assets/Acc/playstation 1.png';
import renewIcon from '../assets/Acc/renew 1.png';
import settingsIcon from '../assets/Acc/settings 2 1.png';
import userIcon from '../assets/Acc/Vector (6).png';

export default function AccountsPage({ setActiveTab }) {
  const statCards = [
    { title: "My Balance", value: mockAccountsOverview.myBalance || "$12,750", icon: myBalanceIcon, bg: "bg-[#FFF5D9]" },
    { title: "Income", value: mockAccountsOverview.income || "$5,600", icon: incomeIcon, bg: "bg-[#E7EDFF]" },
    { title: "Expense", value: mockAccountsOverview.expense || "$3,460", icon: expenseIcon, bg: "bg-[#FFE0EB]" },
    { title: "Total Saving", value: mockAccountsOverview.totalSaving || "$7,920", icon: savingIcon, bg: "bg-[#DCFAF8]" },
  ];

  const lastTransactions = [
    { id: "lt-1", title: "Spotify Subscription", date: "25 Jan 2021", category: "Shopping", card: "1234 ****", status: "Pending", amount: "-$150", isPositive: false, icon: renewIcon, bg: "bg-[#DCFAF8]" },
    { id: "lt-2", title: "Mobile Service", date: "25 Jan 2021", category: "Service", card: "1234 ****", status: "Completed", amount: "-$340", isPositive: false, icon: settingsIcon, bg: "bg-[#E7EDFF]" },
    { id: "lt-3", title: "Emilly Wilson", date: "25 Jan 2021", category: "Transfer", card: "1234 ****", status: "Completed", amount: "+$780", isPositive: true, icon: userIcon, bg: "bg-[#FFE0EB]" },
  ];

  const renderInvoiceIcon = (company) => {
    if (company.includes("Apple")) return <img src={appleIcon} alt="Apple" className="w-6 h-6 object-contain" />;
    if (company.includes("Playstation")) return <img src={playstationIcon} alt="Playstation" className="w-6 h-6 object-contain" />;
    return <img src={userIcon} alt="User" className="w-6 h-6 object-contain" />;
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 4 Metric Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        {statCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-900 rounded-[25px] p-4 sm:p-6 border border-[#DFEAF2] dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 transition-transform hover:-translate-y-0.5"
          >
            <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shrink-0 ${card.bg}`}>
              <img src={card.icon} alt={card.title} className="w-5 h-5 sm:w-7 sm:h-7 object-contain" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-normal text-[#718EBF] dark:text-slate-400">{card.title}</p>
              <h3 className="text-lg sm:text-2xl font-bold text-[#232323] dark:text-slate-100 mt-0.5">{card.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Row: Last Transaction & My Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Last Transaction (Cols 8) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#343C6A] dark:text-slate-100">Last Transaction</h2>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-[25px] p-4 sm:p-6 border border-[#DFEAF2] dark:border-slate-800 shadow-xs flex flex-col justify-between gap-4">
            {lastTransactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between gap-2">
                {/* Left: Icon + Title + Date */}
                <div className="flex items-center space-x-3.5 min-w-0 flex-1">
                  <div className={`w-12 h-12 rounded-[16px] flex items-center justify-center shrink-0 ${tx.bg}`}>
                    <img src={tx.icon} alt={tx.title} className="w-6 h-6 object-contain" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-base font-bold text-[#232323] dark:text-slate-100 truncate">{tx.title}</h4>
                    <p className="text-xs font-normal text-[#718EBF] dark:text-slate-400 mt-0.5">{tx.date}</p>
                  </div>
                </div>

                {/* Desktop/Tablet Columns */}
                <span className="text-sm font-normal text-[#718EBF] dark:text-slate-400 hidden sm:inline-block w-24">{tx.category}</span>
                <span className="text-sm font-normal text-[#718EBF] dark:text-slate-400 hidden md:inline-block w-24">{tx.card}</span>
                <span className={`text-xs px-3.5 py-1 rounded-full font-semibold hidden sm:inline-flex items-center justify-center ${
                  tx.status === 'Completed'
                    ? 'bg-[#DCFAF8] text-[#16DBCC]'
                    : 'bg-[#FFF5D9] text-[#FFBB38]'
                }`}>
                  {tx.status}
                </span>

                {/* Right: Amount (Always visible, unclipped) */}
                <span className={`text-sm sm:text-base font-bold shrink-0 text-right ${tx.isPositive ? 'text-[#41D4A8]' : 'text-[#FF4B4A]'}`}>
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* My Card (Cols 4) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#343C6A] dark:text-slate-100">My Card</h2>
            <button onClick={() => setActiveTab('credit-cards')} className="text-base font-bold text-[#343C6A] dark:text-slate-300 hover:text-teal-600 transition-colors">
              See All
            </button>
          </div>
          <CreditCard card={mockCards[0]} styleType="primary" />
        </div>
      </div>

      {/* Bottom Grid: Debit & Credit Overview & Invoices Sent */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Debit & Credit Overview */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#343C6A] dark:text-slate-100">Debit & Credit Overview</h2>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-[25px] p-6 border border-[#DFEAF2] dark:border-slate-800 shadow-xs">
            {/* Header row inside card: text on left, legend on right */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              <p className="text-sm text-[#718EBF]">
                <span className="font-bold text-[#343C6A] dark:text-slate-100">$7,560</span> Debited & <span className="font-bold text-[#343C6A] dark:text-slate-100">$5,420</span> Credited in this Week
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-3.5 h-3.5 rounded-md bg-[#10B981]"></span>
                  <span className="text-[#718EBF] font-normal">Debit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3.5 h-3.5 rounded-md bg-[#16DBCC]"></span>
                  <span className="text-[#718EBF] font-normal">Credit</span>
                </div>
              </div>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockDebitCreditData} barGap={8}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#DFEAF2" opacity={0.6} />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 13 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      borderRadius: '12px',
                      color: '#fff'
                    }}
                  />
                  <Bar dataKey="Debit" fill="#10B981" radius={[10, 10, 10, 10]} barSize={14} />
                  <Bar dataKey="Credit" fill="#16DBCC" radius={[10, 10, 10, 10]} barSize={14} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Invoices Sent */}
        <div className="lg:col-span-4 space-y-4">
          <h2 className="text-2xl font-bold text-[#343C6A] dark:text-slate-100">Invoices Sent</h2>
          <div className="bg-white dark:bg-slate-900 rounded-[25px] p-6 border border-[#DFEAF2] dark:border-slate-800 shadow-xs space-y-5">
            {mockInvoices.map((inv) => (
              <div key={inv.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${inv.iconBg}`}>
                    {renderInvoiceIcon(inv.company)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#718EBF] dark:text-slate-200">{inv.company}</h4>
                    <p className="text-xs font-normal text-[#718EBF] mt-0.5">{inv.time}</p>
                  </div>
                </div>
                <span className="text-base font-bold text-[#718EBF] dark:text-slate-200">{inv.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
