export default function Hero() {
  return (
    <section className="w-full md:min-h-[60vh] min-h-[30vh] flex flex-col justify-center items-center py-16 px-4 bg-gradient-to-b from-[#22d3ee] to-[#7dd3fc] text-center text-white">
      
      {/* Small Heading - Added font-purista */}
      <h2 className="font-purista text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-1 sm:mb-2 uppercase opacity-90">
        Start Your Own
      </h2>

      {/* Main Big Heading - Added font-purista */}
      {/* Note: Purista Bold file use ho rahi hai, toh text solid dikhega */}
      <h1 className="font-purista text-4xl sm:text-8xl md:text-9xl font-[900] tracking-tighter leading-[0.9] mb-6 sm:mb-8 uppercase drop-shadow-sm">
        EV Dealership
      </h1>

      {/* Description - Added font-cerapro */}
      <p className="font-cerapro max-w-[280px] xs:max-w-md sm:max-w-2xl mx-auto text-sm sm:text-xl md:text-2xl font-medium leading-snug sm:leading-relaxed opacity-95 px-2">
        Everything you need to launch, operate, and grow with confidence.
      </p>

    </section>
  );
}