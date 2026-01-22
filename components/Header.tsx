
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Products', hasDropdown: true },
    { label: 'Solutions', hasDropdown: true },
    { label: 'Resources', hasDropdown: true },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Newsroom', path: '/newsroom' },
    { label: 'Careers', path: '/careers' },
    { label: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#dce4ec] border-b border-slate-300/30">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
        <div className="flex justify-between items-center h-[90px]">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="flex items-center text-slate-900 tracking-[-0.04em]">
                <span className="text-[52px] font-serif font-black leading-none -mb-1.5">L</span>
                <span className="text-[21px] font-[900] mt-1.5 ml-0.5 tracking-tight">UGALITY</span>
              </div>
            </Link>
          </div>

          {/* Navigation Ribbon (The middle section) */}
          <div className="hidden lg:flex items-center justify-center space-x-9">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group h-full flex items-center"
                onMouseEnter={() => item.hasDropdown && setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  to={item.path || '#'}
                  className="flex items-center text-[15px] font-[700] text-slate-800 hover:text-blue-700 transition-colors"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown 
                      className={`ml-1.5 w-[14px] h-[14px] transition-transform duration-300 ${activeMenu === item.label ? 'rotate-180' : ''}`} 
                      strokeWidth={3} 
                    />
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Action Buttons Section */}
          <div className="hidden md:flex items-center space-x-3.5">
            <button 
              onClick={() => navigate('/signin')}
              className="px-7 py-3 bg-[#1e293b] text-white rounded-[6px] text-[15px] font-bold hover:bg-slate-800 transition-all shadow-sm"
            >
              Sign In
            </button>
            <button className="px-7 py-3 bg-[#1e293b] text-white rounded-[6px] text-[15px] font-bold hover:bg-slate-800 transition-all shadow-sm">
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
