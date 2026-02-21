import { ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

export default function Nav() {
  return (
    // Outer container: centered content and responsive padding
    <div className="w-full flex justify-center bg-[#22d3ee] p-6 sm:p-8">
    
      <div className="w-[95%] sm:w-full max-w-6xl mx-auto bg-[#111] rounded-full flex items-center justify-between p-2 sm:p-3 min-h-[60px] sm:min-h-[80px] shadow-lg">

        {/* Logo Section */}
        <div className="flex items-center pl-3 sm:pl-8">
          <Logo className="h-10 sm:h-12 md:h-14 w-auto object-contain" />
        </div>

        {/* Right Section: Text and Button */}
        <div className="flex items-center gap-3 sm:gap-6 pr-1">

          {/* Text: Added font-purista here */}
          <h2 className="text-white font-purista text-[16px] sm:text-2xl md:text-3xl font-bold tracking-tight whitespace-nowrap">
            Become a Dealer
          </h2>

          {/* Circular Button */}
          <button
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 
                       bg-white rounded-full flex items-center justify-center 
                       hover:bg-gray-200 transition-all shrink-0 shadow-md"
            aria-label="Become a Dealer"
          >
            <ArrowUpRight
              className="text-black w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9"
              strokeWidth={3}
            />
          </button>

        </div>

      </div>
    </div>
  );
}