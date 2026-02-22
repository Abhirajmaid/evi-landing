import React from "react";
import Logo from "../components/Logo";
import { stylizeSymbols } from "../../lib/stylizeSymbols";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#005f73] flex flex-col items-center px-4 sm:px-8 pt-12 sm:pt-14 pb-6 relative overflow-hidden">
      {/* Logo */}
      <div className="mb-6 sm:mb-8 -mt-2 sm:-mt-4 transform transition-transform hover:scale-105">
        <Logo className="w-[170px] h-[65px] object-contain" />
      </div>

      {/* White Contact Box */}
      <div
        className="w-[90%] sm:w-full max-w-xl mx-auto bg-[#f8f9fa] rounded-[35px] sm:rounded-[55px] 
                      p-6 sm:p-10 shadow-2xl z-20 flex flex-col items-start 
                      relative mb-6 sm:mb-8"
      >
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
            <p className="text-[#888] whitespace-nowrap">
              {stylizeSymbols("+91 00000 00000")}
            </p>

            {/* Social Icons Container */}
            <div className="flex items-center gap-3 sm:gap-4 text-[#226471]">
              <a
                href="#"
                className="hover:scale-110 transition-transform"
                aria-label="YouTube"
              >
                <Icon
                  icon="mdi:youtube"
                  className="w-6 h-6 sm:w-8 sm:h-8 text-[#226471]"
                />
              </a>
              <a
                href="#"
                className="hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <Icon
                  icon="mdi:facebook"
                  className="w-5 h-5 sm:w-7 sm:h-7 text-[#226471]"
                />
              </a>
              <a
                href="#"
                className="hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <Icon
                  icon="mdi:linkedin"
                  className="w-5 h-5 sm:w-7 sm:h-7 text-[#226471]"
                />
              </a>
              <a
                href="#"
                className="hover:scale-110 transition-transform flex items-center justify-center rounded-lg h-7 w-7 sm:h-9 sm:w-9 p-[3px]"
                aria-label="Instagram"
              >
                <Icon
                  icon="mdi:instagram"
                  className="w-full h-full text-[#226471]"
                />
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
/* Icons now use Iconify via @iconify/react */
