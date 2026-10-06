import React, { useState } from 'react';
import { Pencil, CheckCircle2, Shield, Lock, Bell, ChevronDown } from 'lucide-react';
import { mockUser } from '../data/mockData';

export default function SettingsPage() {
  const [activeSubTab, setActiveSubTab] = useState('profile');
  const [formData, setFormData] = useState({ ...mockUser });
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [passwords, setPasswords] = useState({ current: '', newPass: '', confirm: '' });

  const [prefCurrency, setPrefCurrency] = useState('USD');
  const [prefTimeZone, setPrefTimeZone] = useState('(GMT-12:00) International Date Line West');
  const [sendReceiveDigitalCurrency, setSendReceiveDigitalCurrency] = useState(true);
  const [receiveMerchantOrder, setReceiveMerchantOrder] = useState(false);
  const [recommendationAccount, setRecommendationAccount] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xs p-6 sm:p-8 animate-in fade-in duration-300">
      {/* Settings Sub-tabs Header */}
      <div className="flex items-center space-x-8 border-b border-slate-100 dark:border-slate-800 mb-8 overflow-x-auto">
        {[
          { id: 'profile', label: 'Edit Profile' },
          { id: 'preference', label: 'Preference' },
          { id: 'security', label: 'Security' },
        ].map((tab) => {
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`pb-3.5 text-sm font-semibold relative transition-colors whitespace-nowrap ${
                isActive
                  ? 'text-[#00A389] dark:text-teal-400 font-bold'
                  : 'text-[#718EBF] hover:text-slate-600 dark:hover:text-slate-200'
              }`}
            >
              {tab.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00A389] dark:bg-teal-400 rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab 1: Edit Profile */}
      {activeSubTab === 'profile' && (
        <form onSubmit={handleSave} className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Avatar Section */}
          <div className="flex justify-center lg:justify-start w-full lg:w-auto shrink-0 pt-1">
            <div className="relative">
              <img
                src={formData.avatar}
                alt="Profile Avatar"
                className="w-28 h-28 rounded-full object-cover ring-4 ring-slate-100 dark:ring-slate-800"
              />
              <button
                type="button"
                onClick={() => alert("Avatar upload dialog opened.")}
                className="absolute bottom-1 right-1 p-2.5 rounded-full bg-[#00A389] text-white shadow-md hover:bg-teal-700 transition-colors"
              >
                <Pencil className="w-3.5 h-3.5 fill-current" />
              </button>
            </div>
          </div>

          {/* Form Fields Grid */}
          <div className="flex-1 w-full space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {/* Row 1 */}
              <div>
                <label className="block text-sm font-medium text-[#232323] dark:text-slate-200 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Charlene Reed"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-[#DFEAF2] dark:border-slate-700 text-sm font-medium text-[#718EBF] placeholder:text-[#718EBF] dark:text-slate-300 outline-none focus:border-[#00A389]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#232323] dark:text-slate-200 mb-2">
                  User Name
                </label>
                <input
                  type="text"
                  placeholder="Charlene Reed"
                  value={formData.username}
                  onChange={(e) => handleChange('username', e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-[#DFEAF2] dark:border-slate-700 text-sm font-medium text-[#718EBF] placeholder:text-[#718EBF] dark:text-slate-300 outline-none focus:border-[#00A389]"
                />
              </div>

              {/* Row 2 */}
              <div>
                <label className="block text-sm font-medium text-[#232323] dark:text-slate-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="charlenereed@gmail.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-[#DFEAF2] dark:border-slate-700 text-sm font-medium text-[#718EBF] placeholder:text-[#718EBF] dark:text-slate-300 outline-none focus:border-[#00A389]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#232323] dark:text-slate-200 mb-2">
                  Password
                </label>
                <input
                  type="text"
                  placeholder="**********"
                  value={formData.password || '**********'}
                  onChange={(e) => handleChange('password', e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-[#DFEAF2] dark:border-slate-700 text-sm font-medium text-[#718EBF] placeholder:text-[#718EBF] dark:text-slate-300 outline-none focus:border-[#00A389]"
                />
              </div>

              {/* Row 3 */}
              <div>
                <label className="block text-sm font-medium text-[#232323] dark:text-slate-200 mb-2">
                  Date of Birth
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="25 January 1990"
                    value={formData.dob}
                    onChange={(e) => handleChange('dob', e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-[#DFEAF2] dark:border-slate-700 text-sm font-medium text-[#718EBF] placeholder:text-[#718EBF] dark:text-slate-300 outline-none focus:border-[#00A389] pr-10"
                  />
                  <ChevronDown className="w-4 h-4 text-[#718EBF] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#232323] dark:text-slate-200 mb-2">
                  Present Address
                </label>
                <input
                  type="text"
                  placeholder="San Jose, California, USA"
                  value={formData.presentAddress}
                  onChange={(e) => handleChange('presentAddress', e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-[#DFEAF2] dark:border-slate-700 text-sm font-medium text-[#718EBF] placeholder:text-[#718EBF] dark:text-slate-300 outline-none focus:border-[#00A389]"
                />
              </div>

              {/* Row 4 */}
              <div>
                <label className="block text-sm font-medium text-[#232323] dark:text-slate-200 mb-2">
                  Permanent Address
                </label>
                <input
                  type="text"
                  placeholder="San Jose, California, USA"
                  value={formData.permanentAddress}
                  onChange={(e) => handleChange('permanentAddress', e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-[#DFEAF2] dark:border-slate-700 text-sm font-medium text-[#718EBF] placeholder:text-[#718EBF] dark:text-slate-300 outline-none focus:border-[#00A389]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#232323] dark:text-slate-200 mb-2">
                  City
                </label>
                <input
                  type="text"
                  placeholder="San Jose"
                  value={formData.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-[#DFEAF2] dark:border-slate-700 text-sm font-medium text-[#718EBF] placeholder:text-[#718EBF] dark:text-slate-300 outline-none focus:border-[#00A389]"
                />
              </div>

              {/* Row 5 */}
              <div>
                <label className="block text-sm font-medium text-[#232323] dark:text-slate-200 mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  placeholder="45962"
                  value={formData.postalCode}
                  onChange={(e) => handleChange('postalCode', e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-[#DFEAF2] dark:border-slate-700 text-sm font-medium text-[#718EBF] placeholder:text-[#718EBF] dark:text-slate-300 outline-none focus:border-[#00A389]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#232323] dark:text-slate-200 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="USA"
                  value={formData.country}
                  onChange={(e) => handleChange('country', e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-[#DFEAF2] dark:border-slate-700 text-sm font-medium text-[#718EBF] placeholder:text-[#718EBF] dark:text-slate-300 outline-none focus:border-[#00A389]"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="flex flex-col sm:flex-row items-center justify-end space-y-2 sm:space-y-0 sm:space-x-4 pt-4">
              {saveSuccess && (
                <span className="flex items-center space-x-2 text-xs font-bold text-emerald-500 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Profile updated successfully!</span>
                </span>
              )}
              <button
                type="submit"
                className="w-full sm:w-auto px-12 py-3.5 rounded-2xl bg-[#00A389] hover:bg-[#008771] dark:bg-[#16DBCC] dark:hover:bg-teal-400 text-white dark:text-slate-900 font-bold text-sm shadow-md shadow-[#00A389]/25 transition-all active:scale-98"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Tab 2: Preference */}
      {activeSubTab === 'preference' && (
        <form onSubmit={handleSave} className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            <div>
              <label className="block text-sm font-medium text-[#232323] dark:text-slate-200 mb-2">
                Currency
              </label>
              <input
                type="text"
                placeholder="USD"
                value={prefCurrency}
                onChange={(e) => setPrefCurrency(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-[#DFEAF2] dark:border-slate-700 text-sm font-medium text-[#718EBF] placeholder:text-[#718EBF] dark:text-slate-300 outline-none focus:border-[#00A389]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#232323] dark:text-slate-200 mb-2">
                Time Zone
              </label>
              <input
                type="text"
                placeholder="(GMT-12:00) International Date Line West"
                value={prefTimeZone}
                onChange={(e) => setPrefTimeZone(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-[#DFEAF2] dark:border-slate-700 text-sm font-medium text-[#718EBF] placeholder:text-[#718EBF] dark:text-slate-300 outline-none focus:border-[#00A389]"
              />
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <h3 className="text-base font-bold text-[#343C6A] dark:text-slate-100">Notification</h3>

            {/* Toggle 1 */}
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => setSendReceiveDigitalCurrency(!sendReceiveDigitalCurrency)}
                className={`w-12 h-6 rounded-full transition-colors relative focus:outline-none ${
                  sendReceiveDigitalCurrency ? 'bg-[#16DBCC]' : 'bg-[#E7EDFF] dark:bg-slate-700'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full bg-white shadow-xs absolute top-0.5 transition-transform ${
                    sendReceiveDigitalCurrency ? 'translate-x-6.5' : 'translate-x-0.5'
                  }`}
                />
              </button>
              <span className="text-sm font-medium text-[#232323] dark:text-slate-200">
                I send or receive digita currency
              </span>
            </div>

            {/* Toggle 2 */}
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => setReceiveMerchantOrder(!receiveMerchantOrder)}
                className={`w-12 h-6 rounded-full transition-colors relative focus:outline-none ${
                  receiveMerchantOrder ? 'bg-[#16DBCC]' : 'bg-[#E7EDFF] dark:bg-slate-700'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full bg-white shadow-xs absolute top-0.5 transition-transform ${
                    receiveMerchantOrder ? 'translate-x-6.5' : 'translate-x-0.5'
                  }`}
                />
              </button>
              <span className="text-sm font-medium text-[#232323] dark:text-slate-200">
                I receive merchant order
              </span>
            </div>

            {/* Toggle 3 */}
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => setRecommendationAccount(!recommendationAccount)}
                className={`w-12 h-6 rounded-full transition-colors relative focus:outline-none ${
                  recommendationAccount ? 'bg-[#16DBCC]' : 'bg-[#E7EDFF] dark:bg-slate-700'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full bg-white shadow-xs absolute top-0.5 transition-transform ${
                    recommendationAccount ? 'translate-x-6.5' : 'translate-x-0.5'
                  }`}
                />
              </button>
              <span className="text-sm font-medium text-[#232323] dark:text-slate-200">
                There are recommendation for my account
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-end space-y-2 sm:space-y-0 sm:space-x-4 pt-6">
            {saveSuccess && (
              <span className="flex items-center space-x-2 text-xs font-bold text-emerald-500 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4" />
                <span>Preferences saved!</span>
              </span>
            )}
            <button
              type="submit"
              className="w-full sm:w-auto px-12 py-3.5 rounded-2xl bg-[#00A389] hover:bg-[#008771] dark:bg-[#16DBCC] dark:hover:bg-teal-400 text-white dark:text-slate-900 font-bold text-sm shadow-md shadow-[#00A389]/25 transition-all active:scale-98"
            >
              Save
            </button>
          </div>
        </form>
      )}

      {/* Tab 3: Security */}
      {activeSubTab === 'security' && (
        <form onSubmit={handleSave} className="space-y-6">
          {/* Two-factor Authentication Section */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#343C6A] dark:text-slate-100">Two-factor Authentication</h3>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                className={`w-12 h-6 rounded-full transition-colors relative focus:outline-none ${
                  twoFactorEnabled ? 'bg-[#16DBCC]' : 'bg-[#E7EDFF] dark:bg-slate-700'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full bg-white shadow-xs absolute top-0.5 transition-transform ${
                    twoFactorEnabled ? 'translate-x-6.5' : 'translate-x-0.5'
                  }`}
                />
              </button>
              <span className="text-sm font-medium text-[#232323] dark:text-slate-200">
                Enable or disable two factor authentication
              </span>
            </div>
          </div>

          {/* Change Password Section */}
          <div className="space-y-4 pt-2">
            <h3 className="text-base font-bold text-[#343C6A] dark:text-slate-100">Change Password</h3>

            <div className="max-w-md space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#232323] dark:text-slate-200 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  placeholder="**********"
                  value={passwords.current}
                  onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-[#DFEAF2] dark:border-slate-700 text-sm font-medium text-[#718EBF] placeholder:text-[#718EBF] dark:text-slate-300 outline-none focus:border-[#00A389]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#232323] dark:text-slate-200 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="**********"
                  value={passwords.newPass}
                  onChange={(e) => setPasswords({ ...passwords, newPass: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-[#DFEAF2] dark:border-slate-700 text-sm font-medium text-[#718EBF] placeholder:text-[#718EBF] dark:text-slate-300 outline-none focus:border-[#00A389]"
                />
              </div>
            </div>
          </div>

          {/* Save Action */}
          <div className="flex flex-col sm:flex-row items-center justify-end space-y-2 sm:space-y-0 sm:space-x-4 pt-6">
            {saveSuccess && (
              <span className="flex items-center space-x-2 text-xs font-bold text-emerald-500 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4" />
                <span>Security settings saved!</span>
              </span>
            )}
            <button
              type="submit"
              className="w-full sm:w-auto px-12 py-3.5 rounded-2xl bg-[#00A389] hover:bg-[#008771] dark:bg-[#16DBCC] dark:hover:bg-teal-400 text-white dark:text-slate-900 font-bold text-sm shadow-md shadow-[#00A389]/25 transition-all active:scale-98"
            >
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
