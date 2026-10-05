import React from 'react';
import { Sparkles, Plane, Crown, Gift, UtensilsCrossed, ShieldCheck } from 'lucide-react';

export default function PrivilegesPage() {
  const privileges = [
    { title: "Global Airport Lounge Access", desc: "Complimentary access to over 1,400 VIP airport lounges worldwide for you and a guest.", icon: Plane, tag: "Unlimited Pass" },
    { title: "24/7 Personal Concierge", desc: "Dedicated lifestyle manager to book exclusive reservations, flights, and events.", icon: Crown, tag: "VIP Direct" },
    { title: "5% Travel & Dining Cashback", desc: "Earn elevated cashback rewards automatically credited to your monthly statement.", icon: Gift, tag: "Auto Credit" },
    { title: "Fine Dining & Golf Club Perks", desc: "Priority seating at Michelin-starred restaurants and green fee waivers at top resorts.", icon: UtensilsCrossed, tag: "Exclusive" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Tier Status Hero Card */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 rounded-3xl p-8 text-white shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Platinum VIP Status</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">4,850 Premium Reward Points</h2>
          <p className="text-xs text-slate-400">You are 150 points away from unlocking Diamond VIP Tier benefits.</p>
        </div>

        <div className="w-full md:w-64 space-y-2">
          <div className="flex justify-between text-xs font-bold text-slate-300">
            <span>Platinum</span>
            <span>Diamond</span>
          </div>
          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
            <div className="h-full bg-gradient-to-r from-teal-400 to-amber-400 rounded-full w-[85%]" />
          </div>
          <button
            onClick={() => alert("Redeeming points for cash credit...")}
            className="w-full mt-2 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs shadow-md transition-all"
          >
            Redeem Reward Points
          </button>
        </div>
      </div>

      {/* Privileges Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">Exclusive VIP Privileges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {privileges.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm flex items-start space-x-5">
                <div className="p-3.5 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 shrink-0">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">{item.title}</h3>
                    <span className="text-[10px] uppercase font-bold text-teal-600 dark:text-teal-400 px-2 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950/60">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
