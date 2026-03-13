import React from 'react';

export default function TrustpilotBadge() {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#f4fdfa] border border-dashed border-gray-400 rounded-xl text-sm whitespace-nowrap overflow-x-auto max-w-full my-4">
      <span className="font-bold text-[#1e293b] text-base">"Amazing"</span>
      
      <div className="flex items-center gap-[2px]">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-6 h-6 bg-[#00b67a] flex items-center justify-center rounded-sm">
            <svg viewBox="0 0 512 512" className="w-4 h-4 fill-white text-white">
              <path d="M256 38.013l73.163 151.724 167.318 24.314-121.08 118.02 28.58 166.654L256 416.208l-147.98 77.784 28.58-166.654L15.52 214.05l167.318-24.314z"/>
            </svg>
          </div>
        ))}
        <div className="w-6 h-6 bg-[#dcdce6] relative overflow-hidden flex items-center justify-center rounded-sm">
          <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#00b67a]"></div>
          <svg viewBox="0 0 512 512" className="w-4 h-4 fill-white text-white relative z-10">
            <path d="M256 38.013l73.163 151.724 167.318 24.314-121.08 118.02 28.58 166.654L256 416.208l-147.98 77.784 28.58-166.654L15.52 214.05l167.318-24.314z"/>
          </svg>
        </div>
      </div>

      <span className="text-[#475569] text-sm">Rated 4.4/5 on</span>
      
      <div className="flex items-center gap-1">
        <svg viewBox="0 0 512 512" className="w-7 h-7 fill-[#00b67a]">
          <path d="M256 38.013l73.163 151.724 167.318 24.314-121.08 118.02 28.58 166.654L256 416.208l-147.98 77.784 28.58-166.654L15.52 214.05l167.318-24.314z"/>
        </svg>
        <span className="font-bold text-[#1e293b] text-lg tracking-tight">Trustpilot</span>
      </div>
    </div>
  );
}
