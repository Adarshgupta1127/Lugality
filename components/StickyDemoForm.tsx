
import React from 'react';
import { X, ChevronDown } from 'lucide-react';

const StickyDemoForm: React.FC<{ floating?: boolean }> = ({ floating = true }) => {
  return (
    <div className={`${floating ? 'fixed bottom-10 right-10 z-[100] w-[380px] shadow-[0_20px_50px_rgba(0,0,0,0.15)]' : 'w-full'} bg-white rounded-2xl border border-slate-100 overflow-hidden`}>
      <div className="p-7">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-[19px] font-bold text-slate-900 leading-tight">Schedule your free live demo</h3>
          {floating && <button className="text-slate-300 hover:text-slate-500"><X className="w-5 h-5" /></button>}
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-1.5">
            <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-black">1</span>
            <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight">Fill out the form</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-[10px] flex items-center justify-center font-black">2</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Book a time slot</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-[10px] flex items-center justify-center font-black">3</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Attend a demo</span>
          </div>
        </div>

        <form className="space-y-3.5">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none"
          />
          <input 
            type="email" 
            placeholder="Business Email" 
            className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none"
          />
          <input 
            type="text" 
            placeholder="Company Name" 
            className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none"
          />
          <div className="flex">
            <div className="w-[70px] px-3 py-3 border border-slate-200 rounded-l-lg flex items-center justify-between text-sm bg-white cursor-pointer">
              +91 <ChevronDown className="w-3 h-3 text-slate-400" />
            </div>
            <input 
              type="tel" 
              placeholder="Phone Number" 
              className="flex-1 px-4 py-3 border-y border-r border-slate-200 rounded-r-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>
          <button className="w-full py-4 bg-[#2563eb] text-white font-bold rounded-lg hover:bg-blue-700 transition-colors mt-2 text-[15px]">
            Schedule your Demo
          </button>
        </form>

        <p className="text-[10px] text-center text-slate-400 mt-5 leading-relaxed px-4">
          By submitting, you accept our <span className="underline cursor-pointer">Privacy Policy</span> and <span className="underline cursor-pointer">Terms</span>.
        </p>
      </div>
    </div>
  );
};

export default StickyDemoForm;
