import React, { useState } from 'react';
import { X, CreditCard as CardIcon, CheckCircle2 } from 'lucide-react';
import CreditCard from './CreditCard';

export default function AddCardModal({ isOpen, onClose, onAddCard }) {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [theme, setTheme] = useState('primary');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      id: `card-${Date.now()}`,
      balance: "$0.00",
      cardHolder: cardHolder || "EDDY CUSUMA",
      validThru: expiry || "12/28",
      cardNumber: cardNumber || "4000 1234 5678 9010",
      type: theme,
      network: "visa",
      isPrimary: false,
    };
    onAddCard(newCard);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400">
              <CardIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Add New Credit Card</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {success ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
            <CheckCircle2 className="w-16 h-16 text-teal-500 animate-bounce" />
            <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Card Added Successfully!</h4>
            <p className="text-sm text-slate-400">Your new digital card is ready to use.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            {/* Live Interactive Card Preview */}
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Live Preview</p>
              <CreditCard
                card={{
                  balance: "$0.00",
                  cardHolder: cardHolder || "EDDY CUSUMA",
                  validThru: expiry || "12/28",
                  cardNumber: cardNumber ? cardNumber.padEnd(19, ' *') : "3778 **** **** 1234",
                  type: theme,
                }}
                styleType={theme}
              />
            </div>

            {/* Input fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase mb-1.5">
                  Card Holder Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eddy Cusuma"
                  value={cardHolder}
                  onChange={(e) => setCardHolder(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-slate-100 focus:border-teal-500 outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase mb-1.5">
                  Card Number
                </label>
                <input
                  type="text"
                  required
                  maxLength={19}
                  placeholder="3778 9283 1823 1234"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-slate-100 focus:border-teal-500 outline-hidden font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase mb-1.5">
                  Expiration Date
                </label>
                <input
                  type="text"
                  required
                  placeholder="MM/YY"
                  maxLength={5}
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-slate-100 focus:border-teal-500 outline-hidden font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase mb-1.5">
                  Card Theme
                </label>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-slate-100 focus:border-teal-500 outline-hidden"
                >
                  <option value="primary">Emerald Teal Gradient</option>
                  <option value="secondary">Crisp White Minimal</option>
                  <option value="accent">Midnight Slate Luxury</option>
                </select>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-md shadow-teal-600/20 transition-all"
              >
                Add Card
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
