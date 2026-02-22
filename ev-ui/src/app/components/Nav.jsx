import { ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

export default function Nav() {
  return (
    // Outer container: centered content and responsive padding
    <div className="w-full flex items-center justify-center bg-[#00586D] p-6 sm:p-8">
      <div className="w-[95%] sm:w-full max-w-6xl mx-auto bg-[#111] rounded-full flex items-center justify-center p-2 md:p-3 min-h-[60px] shadow-lg">
        {/* Logo Section */}
        <div className="flex items-center pl-3 sm:pl-8">
          <Logo className="h-12 md:h-14 w-auto object-contain" />
        </div>
      </div>
    </div>
  );
}
