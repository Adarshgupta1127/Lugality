
import React from 'react';

const SignIn: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6">
      {/* Sign In Card */}
      <div className="w-full max-w-[460px] bg-white rounded-[24px] shadow-[0_15px_60px_-15px_rgba(0,0,0,0.08)] p-10 lg:p-14 border border-slate-100/50">
        <div className="text-center mb-10">
          <h1 className="text-[34px] font-[800] text-slate-900 mb-2 tracking-tight">Sign In</h1>
          <p className="text-[17px] font-medium text-slate-500">Access your account</p>
        </div>
        
        <form className="space-y-7">
          <div className="space-y-2.5">
            <label className="text-[15px] font-bold text-slate-700 block pl-1">Email</label>
            <input 
              type="email" 
              className="w-full px-5 py-4 border border-slate-200 rounded-[14px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all bg-white text-slate-900 font-medium"
              placeholder=""
            />
          </div>
          <div className="space-y-2.5">
            <label className="text-[15px] font-bold text-slate-700 block pl-1">Password</label>
            <input 
              type="password" 
              className="w-full px-5 py-4 border border-slate-200 rounded-[14px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all bg-white text-slate-900 font-medium"
              placeholder=""
            />
          </div>
          <div className="pt-3">
            <button className="w-full py-4 bg-[#2563eb] text-white font-bold text-[16px] rounded-[14px] hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 active:scale-[0.98]">
              Sign In
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <button className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors">
            Forgot password?
          </button>
        </div>
      </div>
      
      {/* Footer Version Info */}
      <div className="mt-10 text-slate-400 text-[13px] font-bold tracking-tight">
        Lugality v5.8.0
      </div>
    </div>
  );
};

export default SignIn;
