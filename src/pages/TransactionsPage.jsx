import React, { useState } from 'react';
import { Plus, ArrowUpCircle, ArrowDownCircle, Download, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import CreditCard from '../components/CreditCard';
import { mockCards, mockRecentTransactions, mockMonthlyExpensesChart, assetImages } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function TransactionsPage({ onOpenAddCard, searchQuery }) {
  const [activeTabFilter, setActiveTabFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Extended transactions list for table display matching reference design
  const allTransactions = [
    {
      id: "tx-1",
      title: "Spotify Subscription",
      transactionId: "#12548796",
      type: "Expense",
      category: "Shopping",
      card: "1234 ****",
      date: "28 Jan, 12.30 AM",
      amount: "-$2,500",
      rawAmount: -2500,
      status: "Completed"
    },
    {
      id: "tx-2",
      title: "Freepik Sales",
      transactionId: "#12548796",
      type: "Income",
      category: "Transfer",
      card: "1234 ****",
      date: "25 Jan, 10.40 PM",
      amount: "+$750",
      rawAmount: 750,
      status: "Completed"
    },
    {
      id: "tx-3",
      title: "Mobile Service",
      transactionId: "#12548796",
      type: "Expense",
      category: "Service",
      card: "1234 ****",
      date: "20 Jan, 10.40 PM",
      amount: "-$150",
      rawAmount: -150,
      status: "Completed"
    },
    {
      id: "tx-4",
      title: "Wilson",
      transactionId: "#12548796",
      type: "Expense",
      category: "Transfer",
      card: "1234 ****",
      date: "15 Jan, 03.29 PM",
      amount: "-$1050",
      rawAmount: -1050,
      status: "Completed"
    },
    {
      id: "tx-5",
      title: "Emilly",
      transactionId: "#12548796",
      type: "Income",
      category: "Transfer",
      card: "1234 ****",
      date: "14 Jan, 10.40 PM",
      amount: "+$840",
      rawAmount: 840,
      status: "Completed"
    }
  ];

  // Filter logic
  const filteredTransactions = allTransactions.filter((tx) => {
    const matchesTab =
      activeTabFilter === 'All' ||
      (activeTabFilter === 'Income' && tx.rawAmount > 0) ||
      (activeTabFilter === 'Expense' && tx.rawAmount < 0);

    const matchesSearch =
      !searchQuery ||
      tx.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.transactionId.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Grid: Cards + My Expense Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* My Cards (Cols 7) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">My Cards</h2>
            <button
              onClick={onOpenAddCard}
              className="flex items-center space-x-1.5 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Card</span>
            </button>
          </div>

          <div className="flex overflow-x-auto gap-4 snap-x pb-2 scrollbar-none sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible">
            <div className="w-[285px] sm:w-auto shrink-0 snap-start">
              <CreditCard card={mockCards[0]} styleType="primary" />
            </div>
            <div className="w-[285px] sm:w-auto shrink-0 snap-start">
              <CreditCard
                card={{
                  ...mockCards[1],
                  chip: assetImages.chipCardDarkImg,
                  logo: assetImages.mastercardLightLogo
                }}
                styleType="secondary"
              />
            </div>
          </div>
        </div>

        {/* My Expense Chart (Cols 5) */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">My Expense</h2>
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between h-[230px]">
            <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
              <span>Monthly Overview</span>
              <span className="font-bold text-teal-600 dark:text-teal-400">$12,500 Peak</span>
            </div>
            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockMonthlyExpensesChart}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '11px'
                    }}
                  />
                  <Bar dataKey="amount" radius={[8, 8, 8, 8]} barSize={24}>
                    {mockMonthlyExpensesChart.map((entry, idx) => (
                      <Cell
                        key={`bar-${idx}`}
                        fill={entry.month === 'Dec' ? '#0d9488' : '#e2e8f0'}
                        className="transition-colors hover:fill-teal-500"
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions Table Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">Recent Transactions</h2>

        {/* Tabs Row */}
        <div className="flex items-center space-x-8 border-b border-slate-200 dark:border-slate-800">
          {['All Transactions', 'Income', 'Expense'].map((tab) => {
            const filterKey = tab === 'All Transactions' ? 'All' : tab;
            const isActive = activeTabFilter === filterKey;
            return (
              <button
                key={tab}
                onClick={() => setActiveTabFilter(filterKey)}
                className={`pb-3 text-sm font-semibold relative transition-colors ${isActive
                  ? 'text-teal-600 dark:text-teal-400'
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                  }`}
              >
                {tab}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 dark:bg-teal-400 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Table Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden p-4 sm:p-0">
          {/* Mobile Item List View matching reference image */}
          <div className="block sm:hidden space-y-4">
            {filteredTransactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800/60 last:border-0">
                <div className="flex items-center space-x-3.5">
                  <div className="w-11 h-11 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[#718EBF] shrink-0">
                    {tx.rawAmount < 0 ? (
                      <ArrowUpCircle className="w-6 h-6 stroke-[1.5]" />
                    ) : (
                      <ArrowDownCircle className="w-6 h-6 stroke-[1.5]" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100 text-sm">{tx.title}</h4>
                    <p className="text-xs text-[#718EBF] mt-0.5">{tx.date}</p>
                  </div>
                </div>
                <span className={`font-bold text-sm ${tx.rawAmount < 0 ? 'text-[#FF4B4A]' : 'text-[#41D4A8]'}`}>
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800 text-[#718EBF] text-sm font-medium">
                  <th className="py-4 px-6 font-medium">Description</th>
                  <th className="py-4 px-6 font-medium">Transaction ID</th>
                  <th className="py-4 px-6 font-medium">Type</th>
                  <th className="py-4 px-6 font-medium">Card</th>
                  <th className="py-4 px-6 font-medium">Date</th>
                  <th className="py-4 px-6 font-medium">Amount</th>
                  <th className="py-4 px-6 text-right font-medium">Receipt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                {filteredTransactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-6 flex items-center space-x-3">
                      <div className="text-[#718EBF] shrink-0">
                        {tx.rawAmount < 0 ? (
                          <ArrowUpCircle className="w-7 h-7 stroke-[1.5]" />
                        ) : (
                          <ArrowDownCircle className="w-7 h-7 stroke-[1.5]" />
                        )}
                      </div>
                      <span className="font-normal text-[#232323] dark:text-slate-100">{tx.title}</span>
                    </td>
                    <td className="py-4 px-6 text-[#232323] dark:text-slate-300 font-normal">{tx.transactionId}</td>
                    <td className="py-4 px-6 text-[#232323] dark:text-slate-300 font-normal">{tx.category}</td>
                    <td className="py-4 px-6 text-[#232323] dark:text-slate-300 font-normal">{tx.card}</td>
                    <td className="py-4 px-6 text-[#232323] dark:text-slate-300 font-normal">{tx.date}</td>
                    <td className={`py-4 px-6 font-medium ${tx.rawAmount < 0 ? 'text-[#FE5C73]' : 'text-[#16DBCC]'
                      }`}>
                      {tx.amount}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => alert(`Downloading PDF receipt for ${tx.transactionId}...`)}
                        className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full border border-teal-500/40 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/60 text-xs font-semibold transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-end space-x-2 px-6 py-4 border-t border-slate-100 dark:border-slate-800 text-sm">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-teal-600 dark:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-xl font-bold text-xs flex items-center justify-center transition-colors ${currentPage === page
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(Math.min(4, currentPage + 1))}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-teal-600 dark:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
