import React from 'react';
import {
  assetImages,
  mockInvestmentsSummary,
  mockYearlyTotalInvestment,
  mockMonthlyRevenue,
  mockMyInvestmentsList,
  mockTrendingStocks,
} from '../data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function InvestmentsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Total Invested Amount */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center space-x-4">
          <div className="w-14 h-14 rounded-full bg-[#DCFAF8] dark:bg-teal-950/60 flex items-center justify-center shrink-0">
            <img src={assetImages.moneyBagIcon} alt="Total Invested Amount" className="w-7 h-7 object-contain" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400">Total Invested Amount</p>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mt-1">
              {mockInvestmentsSummary.totalInvestment}
            </h3>
          </div>
        </div>

        {/* Card 2: Number of Investments */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center space-x-4">
          <div className="w-14 h-14 rounded-full bg-[#FFE0EB] dark:bg-pink-950/60 flex items-center justify-center shrink-0">
            <img src={assetImages.pieChartIcon} alt="Number of Investments" className="w-7 h-7 object-contain" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400">Number of Investments</p>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mt-1">
              {mockInvestmentsSummary.investmentCount}
            </h3>
          </div>
        </div>

        {/* Card 3: Rate of Return */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center space-x-4">
          <div className="w-14 h-14 rounded-full bg-[#E7EDFF] dark:bg-blue-950/60 flex items-center justify-center shrink-0">
            <img src={assetImages.repeatIcon} alt="Rate of Return" className="w-7 h-7 object-contain" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400">Rate of Return</p>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mt-1">
              {mockInvestmentsSummary.rateOfReturn}
            </h3>
          </div>
        </div>
      </div>

      {/* Yearly Total Investment & Monthly Revenue Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Yearly Total Investment */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-[#343C6A] dark:text-slate-100">Yearly Total Investment</h2>
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockYearlyTotalInvestment} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E6EFF5" opacity={0.6} />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 12 }} />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#718EBF', fontSize: 12 }}
                    domain={[0, 40000]}
                    ticks={[0, 10000, 20000, 30000, 40000]}
                    tickFormatter={(v) => `$${v.toLocaleString()}`}
                  />
                  <Tooltip
                    formatter={(val) => [`$${val.toLocaleString()}`, 'Investment']}
                    contentStyle={{ backgroundColor: '#1e293b', borderRadius: '12px', border: 'none', color: '#fff' }}
                  />
                  <Line
                    type="linear"
                    dataKey="value"
                    stroke="#FF82AC"
                    strokeWidth={3}
                    dot={{ r: 5, fill: '#FFFFFF', stroke: '#FF82AC', strokeWidth: 3 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Monthly Revenue */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-[#343C6A] dark:text-slate-100">Monthly Revenue</h2>
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockMonthlyRevenue} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E6EFF5" opacity={0.6} />
                  <XAxis dataKey="displayYear" axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 12 }} />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#718EBF', fontSize: 12 }}
                    domain={[0, 40000]}
                    ticks={[0, 10000, 20000, 30000, 40000]}
                    tickFormatter={(v) => `$${v.toLocaleString()}`}
                  />
                  <Tooltip
                    formatter={(val) => [`$${val.toLocaleString()}`, 'Revenue']}
                    contentStyle={{ backgroundColor: '#1e293b', borderRadius: '12px', border: 'none', color: '#fff' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#1814F3"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* My Investment & Trending Stock Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* My Investment Column */}
        <div className="lg:col-span-7 flex flex-col space-y-3">
          <h2 className="text-lg font-bold text-[#343C6A] dark:text-slate-100">My Investment</h2>
          <div className="space-y-4 flex-1 flex flex-col justify-between">
            {mockMyInvestmentsList.map((inv) => (
              <div
                key={inv.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-100 dark:border-slate-800 shadow-sm grid grid-cols-12 items-center gap-2 sm:gap-4 transition-all hover:shadow-md"
              >
                <div className="col-span-5 flex items-center space-x-3 sm:space-x-4 min-w-0">
                  <div className={`w-12 h-12 rounded-2xl ${inv.bgColor} flex items-center justify-center shrink-0`}>
                    <img src={inv.icon} alt={inv.name} className="w-6 h-6 object-contain" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base truncate">{inv.name}</h4>
                    <p className="text-xs text-slate-400 mt-0.5 truncate">{inv.category}</p>
                  </div>
                </div>

                <div className="col-span-4 text-left pl-2">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base">{inv.value}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{inv.valueLabel}</p>
                </div>

                <div className="col-span-3 text-right">
                  <h4 className={`font-bold text-sm sm:text-base ${inv.returnType === 'positive' ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {inv.returnRate}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">{inv.returnLabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Stock Column */}
        <div className="lg:col-span-5 flex flex-col space-y-3">
          <h2 className="text-lg font-bold text-[#343C6A] dark:text-slate-100">Trending Stock</h2>
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-sm flex-1 flex flex-col justify-center">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[#718EBF] text-xs font-semibold uppercase border-b border-slate-100 dark:border-slate-800 pb-3">
                    <th className="pb-3 font-semibold">SL No</th>
                    <th className="pb-3 font-semibold">Name</th>
                    <th className="pb-3 font-semibold">Price</th>
                    <th className="pb-3 font-semibold text-right">Return</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800/60 text-sm">
                  {mockTrendingStocks.map((stock) => (
                    <tr key={stock.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="py-3.5 text-slate-500 dark:text-slate-400 text-xs font-medium">{stock.id}</td>
                      <td className="py-3.5 font-bold text-slate-800 dark:text-slate-100">{stock.name}</td>
                      <td className="py-3.5 font-semibold text-slate-700 dark:text-slate-200">{stock.price}</td>
                      <td className={`py-3.5 text-right font-bold ${stock.returnType === 'positive' ? 'text-emerald-500' : 'text-rose-500'}`}>
                        {stock.returnRate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
