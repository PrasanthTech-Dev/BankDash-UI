import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { mockLoansSummary, mockLoansList } from '../data/mockData';

export default function LoansPage() {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [loans, setLoans] = useState(mockLoansList);
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('Personal');
  const [success, setSuccess] = useState(false);

  const [selectedLoanId, setSelectedLoanId] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.repay-btn')) {
        setSelectedLoanId(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handlePayInstallment = (id) => {
    setSelectedLoanId(id);
  };

  const handleApplyLoan = (e) => {
    e.preventDefault();
    const newLoan = {
      id: `loan-${Date.now()}`,
      slNo: `${(loans.length + 1).toString().padStart(2, '0')}.`,
      loanMoney: `$${parseFloat(loanAmount).toLocaleString()}`,
      leftToRepay: `$${parseFloat(loanAmount).toLocaleString()}`,
      duration: "12 Months",
      interestRate: "9.5%",
      installment: `$${(parseFloat(loanAmount) / 12).toFixed(0)} / month`,
      isPrimary: false
    };
    setLoans([...loans, newLoan]);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setShowApplyModal(false);
      setLoanAmount('');
    }, 1500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* 4 Summary Cards */}
      <div className="space-y-4 min-w-0">
        <div className="flex overflow-x-auto gap-4 snap-x pb-2 scrollbar-none sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 sm:overflow-visible">
          {mockLoansSummary.map((item, idx) => (
            <div
              key={idx}
              className="w-[220px] sm:w-auto shrink-0 snap-start bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs flex items-center space-x-4"
            >
              <div className={`w-13 h-13 rounded-full ${item.bgColor} flex items-center justify-center shrink-0`}>
                <img src={item.icon} alt={item.title} className="w-6 h-6 object-contain" />
              </div>
              <div>
                <p className="text-xs font-medium text-[#718EBF] dark:text-slate-400">{item.title}</p>
                <h3 className="text-base sm:text-lg font-bold text-[#232323] dark:text-slate-100 mt-0.5">{item.amount}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Loans Overview Table */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-[#343C6A] dark:text-slate-100">Active Loans Overview</h2>

        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xs overflow-hidden p-3.5 sm:p-6">
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left border-collapse min-w-full">
              <thead>
                <tr className="border-b border-[#EDF2F7] dark:border-slate-800 text-[#718EBF] dark:text-slate-400 text-xs font-semibold">
                  <th className="py-3 px-2 sm:px-4 hidden sm:table-cell">SL No</th>
                  <th className="py-3 px-1.5 sm:px-4">Loan Money</th>
                  <th className="py-3 px-1.5 sm:px-4">Left to repay</th>
                  <th className="py-3 px-2 sm:px-4 hidden md:table-cell">Duration</th>
                  <th className="py-3 px-2 sm:px-4 hidden lg:table-cell">Interest rate</th>
                  <th className="py-3 px-2 sm:px-4 hidden lg:table-cell">Installment</th>
                  <th className="py-3 px-1.5 sm:px-4 text-center">Repay</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4F5F7] dark:divide-slate-800/60 text-xs sm:text-sm text-[#232323] dark:text-slate-200">
                {loans.map((loan) => (
                  <tr key={loan.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="py-3.5 px-2 sm:px-4 text-[#718EBF] font-medium hidden sm:table-cell">{loan.slNo}</td>
                    <td className="py-3.5 px-1.5 sm:px-4 font-semibold text-[#232323] dark:text-slate-100 whitespace-nowrap">{loan.loanMoney}</td>
                    <td className="py-3.5 px-1.5 sm:px-4 text-[#232323] dark:text-slate-200 whitespace-nowrap">{loan.leftToRepay}</td>
                    <td className="py-3.5 px-2 sm:px-4 text-[#232323] dark:text-slate-200 hidden md:table-cell">{loan.duration}</td>
                    <td className="py-3.5 px-2 sm:px-4 text-[#232323] dark:text-slate-200 hidden lg:table-cell">{loan.interestRate}</td>
                    <td className="py-3.5 px-2 sm:px-4 text-[#232323] dark:text-slate-200 hidden lg:table-cell">{loan.installment}</td>
                    <td className="py-3.5 px-1.5 sm:px-4 text-center">
                      <button
                        onClick={() => handlePayInstallment(loan.id)}
                        className="repay-btn px-3.5 py-1 rounded-full border border-[#00A389] dark:border-[#16DBCC] text-[#00A389] dark:text-[#16DBCC] text-xs font-semibold hover:bg-teal-50 dark:hover:bg-teal-950/40 transition-colors active:scale-95 whitespace-nowrap"
                      >
                        Repay
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-[#EDF2F7] dark:border-slate-800 font-semibold text-[#FF4B4A] text-xs sm:text-sm">
                  <td className="py-3.5 px-2 sm:px-4 hidden sm:table-cell">Total</td>
                  <td className="py-3.5 px-1.5 sm:px-4 whitespace-nowrap">
                    <span className="block text-xs font-normal text-[#FF4B4A] mb-0.5 sm:hidden">Total</span>
                    <span className="font-bold text-xs sm:text-sm">$125,0000</span>
                  </td>
                  <td className="py-3.5 px-1.5 sm:px-4 font-bold whitespace-nowrap align-bottom">$750,000</td>
                  <td className="py-3.5 px-2 sm:px-4 hidden md:table-cell"></td>
                  <td className="py-3.5 px-2 sm:px-4 hidden lg:table-cell"></td>
                  <td className="py-3.5 px-2 sm:px-4 hidden lg:table-cell">$50,000 / month</td>
                  <td className="py-3.5 px-1.5 sm:px-4"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      {/* Apply Loan Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 dark:border-slate-800">
            {success ? (
              <div className="py-8 flex flex-col items-center justify-center text-center space-y-3">
                <CheckCircle2 className="w-16 h-16 text-teal-500 animate-bounce" />
                <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">Loan Approved & Funded!</h4>
                <p className="text-xs text-slate-400">Funds transferred immediately to your checking account.</p>
              </div>
            ) : (
              <form onSubmit={handleApplyLoan} className="space-y-4">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Instant Business & Personal Loan</h3>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Loan Purpose</label>
                  <select
                    value={loanPurpose}
                    onChange={(e) => setLoanPurpose(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-none text-sm text-slate-800 dark:text-slate-100"
                  >
                    <option value="Personal">Personal Loan</option>
                    <option value="Corporate">Corporate Expansion</option>
                    <option value="Business">Business Capital</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Requested Amount ($)</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 25000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-none text-sm text-slate-800 dark:text-slate-100"
                  />
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowApplyModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-slate-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-xl bg-[#00A389] hover:bg-teal-700 text-white font-semibold text-xs shadow-md shadow-teal-600/20"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

