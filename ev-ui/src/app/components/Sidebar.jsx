"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClass = (path) => {
    const isActive = pathname === path;
    return `flex items-center gap-3 p-3 rounded-md transition-colors duration-150 ${
      isActive ? "bg-white text-[#00b36b] font-semibold" : "text-white hover:bg-white/10"
    }`;
  };

  return (
    <>
      {/* --- MOBILE VIEW: Icon on Top Right with Dropdown Below --- */}
      <div className="md:hidden flex justify-end p-4 sticky top-0 z-50">
        {/* Relative container zaroori hai dropdown ki sahi position ke liye */}
        <div className="relative"> 
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#005f73] text-white p-3 rounded-md focus:outline-none flex items-center justify-center w-10 h-10"
          >
            {isOpen ? (
               <span className="text-xl">✕</span> 
            ) : (
               <span className="text-2xl font-bold">⋮</span> 
            )}
          </button>

          {/* --- DROPDOWN: Ab ye Right side se align hokar niche khulega --- */}
          {isOpen && (
            <div className="absolute top-12 right-0 w-56 bg-[#005f73] rounded-md p-3 shadow-lg z-50">
              <nav className="flex flex-col">
                <Link href="/Dashboard" onClick={() => setIsOpen(false)} className={getLinkClass("/Dashboard")}>
                  <span className="text-lg">📊</span>
                  <span className="text-sm">Evi Dashboard</span>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* --- DESKTOP SIDEBAR (Same as before) --- */}
      <div className="hidden md:block w-56 bg-[#005f73] min-h-[90vh] text-white p-4 m-4 rounded-md sticky top-6">
        <div className="flex items-center mb-8 px-2">
          <Logo className="w-[120px] h-[40px] object-contain" />
        </div>
        
        <nav className="flex flex-col gap-2">
          <Link href="/Dashboard" className={getLinkClass("/Dashboard")}>
            <span className="text-xl">📊</span>
            <p className="text-sm">Dashboard</p>
          </Link>
        </nav>
      </div>

      {/* Backdrop tap-to-close */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}