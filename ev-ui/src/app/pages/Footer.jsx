import React from "react";
import Logo from "../components/Logo";

// Utility: Wraps symbol characters in a span with a different font (monospace example)
const SYMBOLS_FONT_CLASS = "font-mono";
function stylizeSymbols(text) {
  return text.split("").map((char, idx) => {
    if ("&%+-—©@".includes(char)) {
      return (
        <span key={idx} className={SYMBOLS_FONT_CLASS}>
          {char}
        </span>
      );
    }
    return char;
  });
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#005f73] flex flex-col items-center px-4 sm:px-8 pt-12 sm:pt-14 pb-6 relative overflow-hidden">
      
      {/* Logo */}
      <div className="mb-6 sm:mb-8 -mt-2 sm:-mt-4 transform transition-transform hover:scale-105">
        <Logo className="w-[170px] h-[65px] object-contain" />
      </div>

      {/* White Contact Box */}
      <div className="w-[90%] sm:w-full max-w-xl mx-auto bg-[#f8f9fa] rounded-[35px] sm:rounded-[55px] 
                      p-6 sm:p-10 shadow-2xl z-20 flex flex-col items-start 
                      relative mb-6 sm:mb-8">
        
        {/* Contact Us Heading: Added font-purista and removed Montserrat inline style */}
        <h3 className="font-purista text-[#005f73] text-base sm:text-lg font-black tracking-[0.15em] mb-5 uppercase">
          {/* No symbols to stylize here */}
          CONTACT US
        </h3>

        {/* Info Area: Added font-cerapro for better reading */}
        <div className="font-cerapro space-y-2 text-[17px] sm:text-[20px] text-gray-500 font-semibold tracking-tight w-full">
          <p>India</p>
          <p className="text-[#888] hover:text-[#005f73] transition-colors cursor-pointer">
            {stylizeSymbols("hello@gmail.in")}
          </p>
          
          <div className="flex flex-row items-center justify-between gap-4 w-full pt-2">
            <p className="text-[#888] whitespace-nowrap">{stylizeSymbols("+91 00000 00000")}</p>

            {/* Social Icons Container */}
            <div className="flex items-center gap-3 sm:gap-4 text-[#226471]">
              <a href="#" className="hover:scale-110 transition-transform" aria-label="YouTube">
                <YoutubeIcon size="w-6 h-6 sm:w-8 sm:h-8" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform" aria-label="Facebook">
                <FacebookIcon size="w-5 h-5 sm:w-7 sm:h-7" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform" aria-label="Twitter">
                <TwitterIcon size="w-5 h-5 sm:w-7 sm:h-7" />
              </a>
              <a 
                href="#" 
                className="hover:scale-110 transition-transform flex items-center justify-center rounded-lg border-2 border-[#005f73] h-7 w-7 sm:h-9 sm:w-9 p-[3px]" 
                aria-label="Instagram"
              >
                <InstagramIcon size="w-full h-full" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright: Added font-purista */}
      <p className="font-purista text-xs sm:text-sm text-white/40 font-bold tracking-wider">
        {stylizeSymbols("© 2026 — All Rights Reserved.")}
      </p>
    </footer>
  );
}

/* Icons code remains exactly the same as your input */
function YoutubeIcon({ size }) { return ( <svg className={size} fill="#226471" viewBox="0 0 24 24"> <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" /> </svg> ); }
function FacebookIcon({ size }) { return ( <svg className={size} fill="#226471" viewBox="0 0 24 24"> <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.768h-2.946v-3.411h2.946v-2.511c0-2.92 1.784-4.51 4.388-4.51 1.248 0 2.321.092 2.633.134v3.054h-1.808c-1.417 0-1.691.674-1.691 1.661v2.172h3.381l-.441 3.411h-2.94v8.768h6.101c.731 0 1.325-.593 1.325-1.324v-21.351c0-.732-.594-1.325-1.325-1.325z" /> </svg> ); }
function TwitterIcon({ size }) { return ( <svg className={size} fill="#226471" viewBox="0 0 24 24"> <path d="M23.444 4.834c-.811.358-1.685.6-2.6.711.934-.56 1.65-1.446 1.987-2.497-.874.519-1.846.897-2.877 1.102-.827-.881-2.005-1.431-3.305-1.431-2.503 0-4.532 2.03-4.532 4.532 0 .355.04.7.117 1.03-3.766-.188-7.105-1.993-9.34-4.735-.391.67-.614 1.45-.614 2.278 0 1.572.8 2.958 2.015 3.77-.744-.024-1.444-.228-2.056-.567v.058c0 2.196 1.562 4.027 3.636 4.444-.381.103-.781.158-1.194.158-.292 0-.575-.028-.85-.082.577 1.798 2.246 3.107 4.225 3.143-1.548 1.213-3.498 1.935-5.618 1.935-.365 0-.725-.021-1.079-.063 2.002 1.284 4.381 2.033 6.937 2.033 8.324 0 12.875-6.9 12.875-12.875 0-.196-.004-.391-.013-.586.885-.638 1.652-1.434 2.259-2.345z" /> </svg> ); }
function InstagramIcon({ size }) { return ( <svg className={size} fill="none" stroke="#226471" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"> <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /> <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /> </svg> ); }