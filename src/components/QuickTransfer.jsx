import React, { useState } from 'react';
import { Send, ChevronRight, CheckCircle2 } from 'lucide-react';
import { mockQuickTransferContacts } from '../data/mockData';

export default function QuickTransfer() {
  const [selectedContact, setSelectedContact] = useState(mockQuickTransferContacts[0]);
  const [amount, setAmount] = useState('525.50');
  const [isSending, setIsSending] = useState(false);
  const [transferred, setTransferred] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const visibleContacts = mockQuickTransferContacts.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < mockQuickTransferContacts.length) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) return;
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setTransferred(true);
      setTimeout(() => {
        setTransferred(false);
      }, 3000);
    }, 800);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[25px] p-6 sm:p-7 border border-[#DFEAF2] dark:border-slate-800 shadow-xs h-[275px] flex flex-col justify-between relative overflow-hidden">
      {/* Contact Avatars Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-7 sm:space-x-8">
          {visibleContacts.map((contact) => {
            const isSelected = selectedContact.id === contact.id;
            return (
              <button
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                className="flex flex-col items-center focus:outline-hidden group cursor-pointer transition-transform active:scale-95"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
                  <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className={`text-base mt-3 text-center truncate max-w-[90px] ${
                  isSelected ? 'font-bold text-[#232323] dark:text-slate-100' : 'font-normal text-[#232323] dark:text-slate-300'
                }`}>
                  {contact.name}
                </p>
                <p className={`text-sm mt-0.5 text-center ${
                  isSelected ? 'font-bold text-[#718EBF] dark:text-slate-300' : 'font-normal text-[#718EBF] dark:text-slate-400'
                }`}>
                  {contact.role}
                </p>
              </button>
            );
          })}
        </div>

        {/* Scroll right arrow button */}
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 text-[#718EBF] hover:text-[#1814F3] hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center shrink-0 cursor-pointer active:scale-95"
          aria-label="Next contacts"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>

      {/* Transfer Amount Input & Send Action */}
      <form onSubmit={handleSend} className="flex items-center space-x-4">
        <label className="text-base font-normal text-[#718EBF] shrink-0">Write Amount</label>

        <div className="relative flex-1 flex items-center bg-[#EDF1F7] dark:bg-slate-800/90 rounded-full p-1 pl-6">
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-transparent text-base font-bold text-[#718EBF] dark:text-slate-200 outline-hidden"
            placeholder="0.00"
          />

          <button
            type="submit"
            disabled={isSending}
            className="flex items-center space-x-2 px-7 py-3 rounded-full bg-[#00938A] hover:bg-[#007E77] text-white font-bold text-base shadow-md shadow-[#00938A]/25 transition-all duration-200 shrink-0 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>{isSending ? 'Sending...' : 'Send'}</span>
            <Send className="w-4 h-4 ml-1" />
          </button>
        </div>
      </form>

      {/* Toast Notification on Success */}
      {transferred && (
        <div className="absolute inset-0 bg-[#343C6A]/95 backdrop-blur-md rounded-[25px] flex items-center justify-center text-white p-6 z-20 animate-in fade-in zoom-in duration-300">
          <div className="flex flex-col items-center text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-teal-300 animate-bounce" />
            <p className="font-bold text-base">Transferred ${amount} to {selectedContact.name}!</p>
            <p className="text-xs text-slate-300">Transaction ID: #TRX-{Math.floor(100000 + Math.random() * 900000)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
