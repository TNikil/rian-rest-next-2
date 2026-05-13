"use client";

import { Home as HouseIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Photos from '../components/Photos';
import Amenities from '../components/Amenities';
import Location from '../components/Location';

export default function Home() {
  const WHATSAPP_NUMBER = "+94764779861";
  const WA_MESSAGE = "Hi! I would like to book Rian Rest. Please send availability, prices, and details. Thank you!";
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [waLink, setWaLink] = useState("");

  useEffect(() => {
    const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
    const encodedMsg = encodeURIComponent(WA_MESSAGE);
    setWaLink(`https://wa.me/${cleanNumber}?text=${encodedMsg}`);
  }, []);

  return (
    <div className="min-h-screen text-[#222222] selection:bg-black selection:text-white font-sans bg-[#F0F4F7] overflow-x-hidden">
      
      {/* Header */}
      <header className="sticky top-0 z-[60] backdrop-blur-md bg-[#F0F4F7]/90 border-b-[#7eb0d2] border-b md:border-b-black/5">
        <div className="max-w-[1100px] mx-auto px-4 md:px-5 py-4 md:py-6 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 md:gap-3 transition-transform hover:opacity-70 flex-shrink-0">
             <HouseIcon size={28} className="text-[#2D3648]" strokeWidth={2} />
             <div className="w-[1.5px] h-6 bg-black/10"></div>
             <img src="/logo.png" alt="Rian Rest Logo" className="h-8 md:h-12 w-auto object-contain" />
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {['About', 'Photos', 'Amenities', 'Location'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[13px] font-extrabold tracking-[0.2em] uppercase hover:text-[#7EB0D2] transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <a href={waLink} target="_blank" className="text-white px-4 md:px-8 py-2.5 md:py-3 text-[10px] md:text-[12px] font-bold tracking-[0.1em] md:tracking-[0.15em] uppercase transition-all shadow-sm whitespace-nowrap" style={{ backgroundColor: '#2D3648' }}>
              BOOK NOW
            </a>
            <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-black text-2xl p-1">☰</button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#F0F4F7] flex flex-col items-center justify-center gap-8 md:hidden">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-6 text-black text-3xl p-2">✕</button>
          <img src="/logo.png" alt="Logo" className="h-10 w-auto mb-4" />
          {['About', 'Photos', 'Amenities', 'Location'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif tracking-[0.15em] uppercase font-bold hover:text-[#7EB0D2]">
              {item}
            </a>
          ))}
        </div>
      )}

      <main id="top">
        <Hero />
        <About />
        <Photos />
        <Amenities />
        <Location />
      </main>

      <footer className="py-20 text-center border-t border-black/10 px-5">
        <p className="text-[12px] font-black tracking-[0.5em] uppercase text-black/40 mb-4">Rian Rest Apartment</p>
        <address className="not-italic text-[11px] text-black/50 tracking-[0.1em] uppercase font-bold mb-2">
          68/D/1/1, Kawdana RD, Dehiwala, Sri Lanka
        </address>
        <p className="text-[11px] text-black/50 tracking-[0.1em] uppercase font-bold mb-6">
          +94 76 477 9861  •  +974 5080 7686
        </p>
        <p className="text-[10px] text-black/30 tracking-[0.2em] uppercase font-bold">© {new Date().getFullYear()} — Built by Creovx</p>
      </footer>
    </div>
  );
}
