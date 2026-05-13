import React from 'react';

export default function Hero() {
  return (
    <section className="max-w-[1100px] mx-auto px-5 pt-12 md:pt-24 pb-24 md:pb-28 grid md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-center">
      <div>
        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#666666] mb-4 block">
          Private Apartment • Dehiwala
        </span>
        <h1 className="text-5xl md:text-7xl font-mories leading-[1.1] mb-8 uppercase tracking-tight">
          A refined stay <br/>in the heart of city.
        </h1>
        <p className="text-[#444444] text-lg md:text-xl leading-relaxed mb-12 max-w-md font-railway text-justify [hyphens:auto]">
          An SLTDA approved sanctuary designed for those who seek tranquility, comfort, and effortless convenience.
        </p>
      </div>
      <div className="aspect-[4/5] bg-white/40 relative overflow-hidden shadow-sm w-full block">
        <img src="/images/hero.jpg" alt="Interior" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}