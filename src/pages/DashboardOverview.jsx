import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area, Sector
} from 'recharts';
import CreditCard from '../components/CreditCard';
import QuickTransfer from '../components/QuickTransfer';
import {
  mockCards,
  mockRecentTransactions,
  mockWeeklyActivity,
  mockExpenseStatistics,
  mockBalanceHistory,
  assetImages
} from '../data/mockData';
import { CreditCard as CardIcon, DollarSign, User, Music, Briefcase } from 'lucide-react';

const renderExplodedSector = (props) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;
  const RADIAN = Math.PI / 180;

  // "Bill Expense" orange slice explodes further outward to match reference screenshot
  const isBillExpense = payload?.name === 'Bill Expense';
  const offset = isBillExpense ? 12 : 5;

  const dx = offset * Math.cos(-midAngle * RADIAN);
  const dy = offset * Math.sin(-midAngle * RADIAN);

  return (
    <Sector
      cx={cx + dx}
      cy={cy + dy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
    />
  );
};

export default function DashboardOverview({ setActiveTab, onOpenAddCard }) {
  const renderTxIcon = (type) => {
    switch (type) {
      case 'card':
        return <CardIcon className="w-5 h-5 text-amber-500" />;
      case 'paypal':
        return <DollarSign className="w-5 h-5 text-teal-500" />;
      case 'user':
        return <User className="w-5 h-5 text-emerald-500" />;
      case 'music':
        return <Music className="w-5 h-5 text-rose-500" />;
      default:
        return <Briefcase className="w-5 h-5 text-cyan-500" />;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Grid: My Cards & Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* My Cards (Cols 8) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#343C6A] dark:text-slate-100">My Cards</h2>
            <button
              onClick={() => setActiveTab('credit-cards')}
              className="text-base font-bold text-[#343C6A] dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              See All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <CreditCard card={mockCards[0]} styleType="primary" />
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

        {/* Recent Transaction (Cols 4) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#343C6A] dark:text-slate-100">Recent Transaction</h2>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-[25px] p-6 border border-[#DFEAF2] dark:border-slate-800 shadow-xs h-[235px] flex flex-col justify-between">
            {mockRecentTransactions.slice(0, 3).map((tx) => (
              <div key={tx.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-13 h-13 rounded-full flex items-center justify-center shrink-0 overflow-hidden ${tx.id === 'tx-1' ? 'bg-[#FFF5D9]' : tx.id === 'tx-2' ? 'bg-[#E7EDFF]' : 'bg-[#DCFAF8]'
                    }`}>
                    <img src={tx.iconImage} alt={tx.title} className="w-7 h-7 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#232323] dark:text-slate-100">{tx.title}</h4>
                    <p className="text-sm font-normal text-[#718EBF] mt-0.5">{tx.date}</p>
                  </div>
                </div>
                <span className={`text-base font-bold ${tx.rawAmount < 0 ? 'text-[#FF4B4A]' : 'text-[#41D4A8]'
                  }`}>
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Grid: Weekly Activity (Bar) & Expense Statistics (Pie) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Weekly Activity */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#343C6A] dark:text-slate-100">Weekly Activity</h2>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-[25px] p-6 border border-[#DFEAF2] dark:border-slate-800 shadow-xs h-[348px] flex flex-col justify-between">
            {/* Custom Legend Header */}
            <div className="flex items-center justify-end space-x-6 mb-2 text-xs font-medium text-[#718EBF]">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#16DBCC]"></span>
                <span>Deposit</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#232323] dark:bg-slate-300"></span>
                <span>Withdraw</span>
              </div>
            </div>

            <div className="w-full h-full pb-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockWeeklyActivity} barGap={12}>
                  <CartesianGrid strokeDasharray="0" vertical={false} stroke="#F3F4F6" opacity={0.8} />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 13 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 13 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#343C6A',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '12px'
                    }}
                  />
                  <Bar dataKey="Withdraw" fill="#232323" radius={[30, 30, 30, 30]} barSize={15} />
                  <Bar dataKey="Deposit" fill="#16DBCC" radius={[30, 30, 30, 30]} barSize={15} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Expense Statistics Pie */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#343C6A] dark:text-slate-100">Expense Statistics</h2>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-[25px] p-6 border border-[#DFEAF2] dark:border-slate-800 shadow-xs flex flex-col items-center justify-center h-[348px]">
            <div className="w-full h-full flex items-center justify-center">
              <PieChart width={300} height={280}>
                <g>
                  {[
                    { name: 'Entertainment', value: 30, color: '#343C6A', startAngle: 135, endAngle: 45, midAngle: 90, isExploded: false },
                    { name: 'Bill Expense', value: 15, color: '#FF82AC', startAngle: 45, endAngle: 0, midAngle: 22.5, isExploded: true },
                    { name: 'Others', value: 35, color: '#1814F3', startAngle: 360, endAngle: 270, midAngle: 315, isExploded: false },
                    { name: 'Investment', value: 20, color: '#16DBCC', startAngle: 270, endAngle: 135, midAngle: 202.5, isExploded: false },
                  ].map((slice) => {
                    const RADIAN = Math.PI / 180;
                    const offset = slice.isExploded ? 14 : 0;
                    const dx = offset * Math.cos(slice.midAngle * RADIAN);
                    const dy = -offset * Math.sin(slice.midAngle * RADIAN);

                    const cx = 150;
                    const cy = 140;
                    const outerRadius = 105;

                    const sliceCx = cx + dx;
                    const sliceCy = cy + dy;

                    const labelRadius = outerRadius * 0.55;
                    const lx = sliceCx + labelRadius * Math.cos(slice.midAngle * RADIAN);
                    const ly = sliceCy - labelRadius * Math.sin(slice.midAngle * RADIAN);

                    return (
                      <g key={slice.name}>
                        <Sector
                          cx={sliceCx}
                          cy={sliceCy}
                          innerRadius={0}
                          outerRadius={outerRadius}
                          startAngle={slice.startAngle}
                          endAngle={slice.endAngle}
                          fill={slice.color}
                          stroke="#ffffff"
                          strokeWidth={5}
                        />
                        <text
                          x={lx}
                          y={ly}
                          fill="#ffffff"
                          textAnchor="middle"
                          dominantBaseline="central"
                          className="font-bold font-sans pointer-events-none select-none"
                        >
                          <tspan x={lx} dy="-0.6em" className="font-extrabold text-sm">{`${slice.value}%`}</tspan>
                          <tspan x={lx} dy="1.3em" className="font-bold text-[11px]">{slice.name}</tspan>
                        </text>
                      </g>
                    );
                  })}
                </g>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#343C6A',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '13px'
                  }}
                />
              </PieChart>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid: Quick Transfer & Balance History */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Quick Transfer */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-2xl font-bold text-[#343C6A] dark:text-slate-100">Quick Transfer</h2>
          <QuickTransfer />
        </div>

        {/* Balance History Line Chart */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-2xl font-bold text-[#343C6A] dark:text-slate-100">Balance History</h2>

          <div className="bg-white dark:bg-slate-900 rounded-[25px] p-6 border border-[#DFEAF2] dark:border-slate-800 shadow-xs h-[275px] flex flex-col justify-between">
            <div className="w-full h-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockBalanceHistory}>
                  <defs>
                    <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#16DBCC" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#16DBCC" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} stroke="#EFDFDF" opacity={0.6} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 13 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 13 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#343C6A',
                      borderRadius: '12px',
                      color: '#fff'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="balance"
                    stroke="#16DBCC"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#balanceGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
