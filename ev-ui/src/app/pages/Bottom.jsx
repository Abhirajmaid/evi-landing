"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";

// Utility: Wraps specific symbols (&, %, -) in a span with a special font
const SYMBOLS_FONT_CLASS = "font-mono"; // Use monospaced font as different font, or define your own

function stylizeSymbols(text) {
  // You can extend this RegExp to add additional symbols if you wish
  return text.split("").map((char, idx) => {
    if (["&", "%", "-", "+", "@"].includes(char)) {
      return (
        <span key={idx} className={SYMBOLS_FONT_CLASS}>
          {char}
        </span>
      );
    }
    return char;
  });
}

export default function Bottom() {
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderData = [
    {
      id: 1,
      brand: "CHHOTA BULL",
      img: "/rydan1.jpeg",
      bgColor: "bg-gradient-to-r from-gray-900 to-slate-800",
    },
    {
      id: 2,
      brand: "CHHOTA OTTO",
      img: "/otto1.jpeg",
      bgColor: "bg-gradient-to-r from-gray-900 to-slate-800",
    },
    {
      id: 3,
      brand: "CHHOTA BULL",
      img: "/bull1.jpeg",
      bgColor: "bg-gradient-to-r from-[#0F5C66] to-teal-600",
    },
  ];

  const features = [
    {
      id: 1,
      title: "Strong Govt Support and Incentives",
      icon: "ph:bank",
      align: "left",
    },
    {
      id: 2,
      title: "The Future is Electric",
      icon: "iconamoon:shield-yes-light",
      align: "left",
    },
    {
      id: 3,
      title: "EV Sales Growing 30% Every Year",
      icon: "ph:chart-line-up-light",
      align: "right",
    },
    {
      id: 4,
      title: "Lower Running and Maintenance Costs",
      icon: "ph:chart-line-down",
      align: "right",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  return (
    <div className="bg-white w-full">
      {/* --- SECTION 1: HERO --- */}
      <section className="w-full pt-10 pb-10 md:pb-12 bg-white rounded-[30px] sm:rounded-[50px] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="relative w-full max-w-[1100px] mb-12 sm:mb-20 rounded-[30px] sm:rounded-[50px] overflow-hidden">
            <div className="relative z-15 flex justify-center">
              <Image
                src="/main1.png"
                alt="EV Lineup"
                width={1300}
                height={700}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="text-center px-4 max-w-5xl">
            {/* Heading: Added font-purista */}
            <h2 className="font-purista text-[25px] sm:text-6xl md:text-[85px] font-[1000] text-[#1a2e2e] leading-[1] sm:leading-[0.9] tracking-tighter uppercase">
              {/* Stylize the symbol ampersand (&) */}
              {stylizeSymbols("Electric Vehicles Built for Performance & Reliability")}
            </h2>
            {/* Subtext: Added font-cerapro */}
            <p className="font-cerapro text-gray-500 mt-6 sm:mt-10 text-sm sm:text-xl md:text-2xl font-medium max-w-2xl mx-auto opacity-75">
              {/* No symbol in this text but keep for generality */}
              {stylizeSymbols(
                "Our electric vehicles offer smooth driving, robust build quality, and dependable range."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: SLIDER --- */}
      <section className="w-full px-4 pb-10 bg-white flex justify-center">
        <div className="w-full max-w-[1200px] flex flex-col items-center">
          <div className="relative w-full max-w-[1200px] h-[240px] sm:h-[360px] md:h-[480px] lg:h-[560px] mx-auto rounded-[25px] sm:rounded-[50px] overflow-hidden bg-gray-100 shadow-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center rounded-[25px] sm:rounded-[50px] overflow-hidden"
              >
                <Image
                  src={sliderData[activeSlide].img}
                  alt={sliderData[activeSlide].brand}
                  fill
                  priority
                  className="object-contain p-4 sm:p-6"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center mt-6 gap-3">
            {sliderData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 transition-all duration-300 rounded-full ${activeSlide === index ? "w-10 bg-black" : "w-3 bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: FEATURES --- */}
      <section className="w-full py-24 px-4 bg-[#f3f3f3] overflow-hidden">
        <div className="max-w-5xl mx-auto">

          {/* Heading Animation */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20"
          >
            <h2 className="font-purista text-4xl md:text-7xl font-[1000] text-[#1a2e2e] uppercase tracking-tighter">
              {/* No special symbol in this line but keep stylization for future consistency */}
              {stylizeSymbols("Why Choose EV Dealership")}
            </h2>

            <p className="font-cerapro text-gray-500 mt-6 sm:mt-7 text-sm sm:text-xl md:text-2xl font-medium max-w-3xl mx-auto opacity-75">
              {stylizeSymbols("Tap into a fast-growing market with a future-ready mobility business")}
            </p>
          </motion.div>

          {/* Features List */}
          <div className="flex flex-col gap-10">
            {features.map((f, index) => {
              const isRight = f.align === "right";

              return (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, x: isRight ? 80 : -80, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative flex ${isRight ? "justify-end" : "justify-start"}`}
                >
                  <div className="relative w-full max-w-[600px]">
                    <div
                      className={`flex items-center gap-6 px-12 py-6 w-full 
                border-[#0F5C66] rounded-full bg-white shadow-sm 
                ${isRight 
                        ? "flex-row-reverse text-right border-r-[9px]" 
                        : "border-l-[9px]"}`}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.2 }}
                        className="w-16 h-16 rounded-full bg-[#0F5C66] flex items-center justify-center text-white text-2xl shadow-md shrink-0"
                      >
                        <Icon icon={f.icon} width="26" height="26" />
                      </motion.div>
                      <p className="font-cerapro font-semibold text-[#16323E] text-lg md:text-xl leading-snug">
                        {stylizeSymbols(f.title)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
