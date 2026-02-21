import React from "react";
import Image from "next/image";

export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="w-full h-20 relative rounded-md overflow-hidden bg-transparent flex-shrink-0">
        {/* Use next/image with explicit size for optimization */}
        <Image src="/logo.png" alt="EVI logo" width={100} height={100} className="object-contain h-full w-auto" />
      </div>
    </div>
  );
}

