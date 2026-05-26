'use client';

import { Home as HouseIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Photos from '../components/Photos';
import Amenities from '../components/Amenities';
import Location from '../components/Location';
import { motion } from 'framer-motion';
import Logo from '@/components/icons/Logo';
import LogoSmall from '@/components/icons/LogoSmall';
import LogoName from '@/components/icons/LogoName';
import LogoSilver from '@/components/icons/LogoSilver';

export default function Home() {
  const WHATSAPP_NUMBER = '+94764779861';
  const WA_MESSAGE =
    'Hi! I would like to book Rian Rest. Please send availability, prices, and details. Thank you!';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [waLink, setWaLink] = useState('');

  useEffect(() => {
    const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, '');
    const encodedMsg = encodeURIComponent(WA_MESSAGE);
    setWaLink(`https://wa.me/${cleanNumber}?text=${encodedMsg}`);
  }, []);

  return (
    <div className="min-h-screen text-[#222222] selection:bg-black selection:text-white font-sans bg-[#F0F4F7] overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-[60] backdrop-blur-md bg-[#F0F4F7]/90 border-b border-[#7eb0d2] md:border-b-black/5">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-4 md:py-5">
          <div className="flex items-center justify-between">
            <a
              href="#top"
              className="flex items-center transition-opacity hover:opacity-70 flex-shrink-0"
            >
              <LogoSmall className="w-auto h-24 md:h-24" />
              <div className="w-[2px] h-6 md:h-7 bg-[#bf9950] mx-3 md:mx-4" />
              <LogoName className="w-auto h-10 md:h-12" />
            </a>

            {/* Navigation - Center (Desktop) */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {['About', 'Photos', 'Amenities', 'Location'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs lg:text-[13px] font-bold tracking-[0.15em] lg:tracking-[0.2em] uppercase text-gray-700 hover:text-[#7EB0D2] transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Action Buttons - Right */}
            <div className="flex items-center gap-3 md:gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2D3648] text-white px-5 md:px-7 py-2.5 text-[11px] md:text-[12px] font-bold tracking-[0.1em] md:tracking-[0.15em] uppercase transition-all hover:bg-[#3d475f] hover:scale-105 active:scale-95 shadow-sm whitespace-nowrap"
              >
                BOOK NOW
              </a>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden text-gray-700 text-2xl p-1 hover:text-[#7EB0D2] transition-colors"
                aria-label="Open menu"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#F0F4F7] flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-6 text-black text-3xl p-2"
          >
            ✕
          </button>
          <LogoSilver className="w-23 h-23" />

          {['About', 'Photos', 'Amenities', 'Location'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-mories uppercase font-bold tracking-[0.18em] hover:text-[#7EB0D2]"
            >
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
        <p className="text-[12px] font-black tracking-[0.5em] uppercase text-black/40 mb-4">
          Rian Rest Apartment
        </p>
        <address className="not-italic text-[11px] text-black/50 tracking-[0.1em] uppercase font-bold mb-2">
          68/D/1/1, Kawdana RD, Dehiwala, Sri Lanka
        </address>
        <p className="text-[11px] text-black/50 tracking-[0.1em] uppercase font-bold mb-6">
          +94 76 477 9861 • +974 5080 7686
        </p>
        <p className="text-[10px] text-black/30 tracking-[0.2em] uppercase font-bold">
          © {new Date().getFullYear()} — Built by Creovx
        </p>
      </footer>
    </div>
  );
}
