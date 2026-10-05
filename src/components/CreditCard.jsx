import React from 'react';

export default function CreditCard({ card, styleType = 'primary' }) {
  if (styleType === 'primary') {
    return (
      <div className="w-full h-[235px] rounded-[25px] bg-gradient-to-r from-[#16DBCC] to-[#059669] text-white flex flex-col justify-between overflow-hidden shadow-lg shadow-emerald-600/20 font-sans card-hover-lift transition-all duration-300">
        {/* Top & Middle Info Area */}
        <div className="p-6 pb-3 flex-1 flex flex-col justify-between">
          {/* Top Row: Balance & Chip */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-normal uppercase tracking-wider text-white/80">BALANCE</p>
              <h3 className="text-2xl font-bold mt-0.5 tracking-tight">{card?.balance || "$5,756"}</h3>
            </div>
            {card?.chip ? (
              <img src={card.chip} alt="Chip" className="w-9 h-9 object-contain" />
            ) : (
              <div className="w-9 h-7 bg-amber-300/30 rounded-md border border-amber-200/40" />
            )}
          </div>

          {/* Middle Row: Card Holder & Valid Thru */}
          <div className="flex justify-start space-x-16 items-center">
            <div>
              <p className="text-[10px] uppercase font-normal text-white/80 tracking-wider">CARD HOLDER</p>
              <p className="text-sm font-semibold mt-0.5">{card?.cardHolder || "Eddy Cusuma"}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-normal text-white/80 tracking-wider">VALID THRU</p>
              <p className="text-sm font-semibold mt-0.5">{card?.validThru || "12/22"}</p>
            </div>
          </div>
        </div>

        {/* Bottom Row: Card Number & Logo Emblem */}
        <div className="h-16 bg-gradient-to-b from-white/20 to-white/0 border-t border-white/20 px-6 flex items-center justify-between">
          <p className="text-base sm:text-lg font-normal tracking-wider font-mono whitespace-nowrap">{card?.cardNumber || "3778 **** **** 1234"}</p>
          {card?.logo ? (
            <img src={card.logo} alt="Logo" className="h-8 object-contain" />
          ) : (
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-white/40" />
              <div className="w-7 h-7 rounded-full bg-white/20" />
            </div>
          )}
        </div>
      </div>
    );
  }

  if (styleType === 'accent') {
    return (
      <div className="w-full h-[235px] rounded-[25px] bg-gradient-to-r from-[#059669] to-[#024933] text-white flex flex-col justify-between overflow-hidden shadow-lg shadow-emerald-950/20 font-sans card-hover-lift transition-all duration-300">
        {/* Top & Middle Info Area */}
        <div className="p-6 pb-3 flex-1 flex flex-col justify-between">
          {/* Top Row: Balance & Chip */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-normal uppercase tracking-wider text-white/70">BALANCE</p>
              <h3 className="text-2xl font-bold mt-0.5 tracking-tight">{card?.balance || "$5,756"}</h3>
            </div>
            {card?.chip ? (
              <img src={card.chip} alt="Chip" className="w-9 h-9 object-contain" />
            ) : (
              <div className="w-9 h-7 bg-amber-300/30 rounded-md border border-amber-200/40" />
            )}
          </div>

          {/* Middle Row: Card Holder & Valid Thru */}
          <div className="flex justify-start space-x-16 items-center">
            <div>
              <p className="text-[10px] uppercase font-normal text-white/70 tracking-wider">CARD HOLDER</p>
              <p className="text-sm font-semibold mt-0.5">{card?.cardHolder || "Eddy Cusuma"}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-normal text-white/70 tracking-wider">VALID THRU</p>
              <p className="text-sm font-semibold mt-0.5">{card?.validThru || "12/22"}</p>
            </div>
          </div>
        </div>

        {/* Bottom Row: Card Number & Logo Emblem */}
        <div className="h-16 bg-gradient-to-b from-white/15 to-white/0 border-t border-white/15 px-6 flex items-center justify-between">
          <p className="text-base sm:text-lg font-normal tracking-wider font-mono whitespace-nowrap">{card?.cardNumber || "3778 **** **** 1234"}</p>
          {card?.logo ? (
            <img src={card.logo} alt="Logo" className="h-8 object-contain" />
          ) : (
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-white/40" />
              <div className="w-7 h-7 rounded-full bg-white/20" />
            </div>
          )}
        </div>
      </div>
    );
  }

  // Secondary White Card
  return (
    <div className="w-full h-[235px] rounded-[25px] bg-white dark:bg-slate-900 border border-[#DFEAF2] dark:border-slate-800 text-[#343C6A] dark:text-slate-100 flex flex-col justify-between overflow-hidden shadow-xs font-sans card-hover-lift transition-all duration-300">
      {/* Top & Middle Info Area */}
      <div className="p-6 pb-3 flex-1 flex flex-col justify-between">
        {/* Top Row: Balance & Chip */}
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs font-normal uppercase tracking-wider text-[#718EBF] dark:text-slate-400">BALANCE</p>
            <h3 className="text-2xl font-bold mt-0.5 tracking-tight text-[#343C6A] dark:text-white">{card?.balance || "$5,756"}</h3>
          </div>
          {card?.chip ? (
            <img src={card.chip} alt="Chip" className="w-9 h-9 object-contain" />
          ) : (
            <div className="w-9 h-7 bg-slate-200 rounded-md" />
          )}
        </div>

        {/* Middle Row: Card Holder & Valid Thru */}
        <div className="flex justify-start space-x-16 items-center">
          <div>
            <p className="text-[10px] uppercase font-normal text-[#718EBF] dark:text-slate-400 tracking-wider">CARD HOLDER</p>
            <p className="text-sm font-semibold mt-0.5 text-[#343C6A] dark:text-white">{card?.cardHolder || "Eddy Cusuma"}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase font-normal text-[#718EBF] dark:text-slate-400 tracking-wider">VALID THRU</p>
            <p className="text-sm font-semibold mt-0.5 text-[#343C6A] dark:text-white">{card?.validThru || "12/22"}</p>
          </div>
        </div>
      </div>

      {/* Bottom Row: Card Number & Logo Emblem */}
      <div className="h-16 border-t border-[#DFEAF2] dark:border-slate-800 px-6 flex items-center justify-between">
        <p className="text-base sm:text-lg font-normal tracking-wider font-mono whitespace-nowrap text-[#343C6A] dark:text-white">{card?.cardNumber || "3778 **** **** 1234"}</p>
        {card?.logo ? (
          <img src={card.logo} alt="Logo" className="h-8 object-contain" />
        ) : (
          <div className="flex -space-x-2">
            <div className="w-7 h-7 rounded-full bg-slate-300" />
            <div className="w-7 h-7 rounded-full bg-slate-200" />
          </div>
        )}
      </div>
    </div>
  );
}
