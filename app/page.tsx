'use client';

import { Home as HouseIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Photos from '../components/Photos';
import Amenities from '../components/Amenities';
import Location from '../components/Location';
import { motion } from 'framer-motion';

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
      <header className="sticky top-0 z-[60] backdrop-blur-md bg-[#F0F4F7]/90 border-b-[#7eb0d2] border-b md:border-b-black/5">
        <div className="max-w-[1100px] mx-auto px-4 md:px-5 py-4 md:py-6 flex items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-2 md:gap-3 transition-transform hover:opacity-70 flex-shrink-0"
          >
            <motion.svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-10 h-10 text-[#2D3648]"
              whileHover={{
                scale: 1.08,
              }}
            >
              <motion.path
                d="M.627 4.09v8.748c2.844 4.085 6.996 5.057 8.634 5.057s5.789-.972 8.633-5.057V4.09c-4.81-.745-7.457-2.261-8.634-2.261S5.438 3.345.627 4.089z"
                opacity={0.638298}
                fill="#0a4887"
                stroke="#bf9950"
                strokeWidth={0.6}
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeOpacity={1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                }}
              />
              <path
                d="M6.105 5.44q-.41 0-.913.039l-1.423.102c-.567.04-.667.075-.669.237 0 .031.12.071.267.088s.325.075.395.127c.256.19.26.251.245 3.57l-.015 3.084-.163.146a.85.85 0 0 1-.358.178 3 3 0 0 0-.258.053c-.1.031-.137.18-.057.231.039.025.749.04 1.577.034l1.506-.012v-.124c0-.11-.033-.13-.286-.18-.38-.076-.54-.189-.605-.424-.034-.124-.053-1.334-.054-3.418V5.945l.183-.035c.1-.019.347-.022.549-.007 1.073.08 1.69.65 1.691 1.567.001.547-.12.855-.485 1.246-.317.339-.647.547-1.019.643l-.421.109c-.231.06-.242.119-.04.223.216.112.332.25.598.715.128.225.33.57.447.767.118.196.23.398.249.45.051.137.471.722.836 1.164q.254.307.547.59c-.18.158-.35.302-.485.397-.513.364-1.196.683-1.705.796-.86.19-1.985.106-2.576-.192-.257-.129-.349-.121-.258.022.09.145.955.57 1.372.677.312.08.552.101 1.094.096.381-.003.817-.026.968-.051.383-.063 1.078-.303 1.601-.551.266-.127.544-.297.82-.495.276.198.555.368.82.495.524.248 1.219.488 1.601.551.152.025.587.048.969.051.542.005.781-.016 1.094-.096.417-.106 1.281-.532 1.372-.677.09-.143 0-.151-.258-.022-.59.298-1.717.382-2.576.192-.509-.113-1.192-.432-1.706-.796a6 6 0 0 1-.484-.397q.293-.283.547-.59c.364-.442.785-1.027.836-1.165.02-.05.131-.253.248-.45.118-.196.32-.541.448-.766.266-.465.382-.603.598-.715.201-.104.19-.163-.04-.223l-.421-.109c-.373-.096-.702-.304-1.02-.643-.365-.391-.485-.7-.484-1.246 0-.917.618-1.488 1.691-1.567.201-.015.448-.012.549.007l.182.035V9.17c0 2.084-.019 3.294-.053 3.418-.065.235-.226.348-.605.423-.253.05-.286.071-.286.18v.125l1.506.012c.828.007 1.538-.009 1.577-.034.08-.05.043-.2-.057-.231a3 3 0 0 0-.259-.053.85.85 0 0 1-.357-.178l-.164-.146-.014-3.084c-.015-3.318-.011-3.38.245-3.57.07-.052.248-.11.395-.127s.267-.057.267-.088c-.003-.162-.103-.197-.67-.237l-1.423-.102c-1.348-.1-2.134-.015-2.803.302-.482.228-.689.418-.881.808-.157.32-.17.38-.166.83.004.608.112.874.522 1.292.368.375.648.553 1.146.728l.394.138-.262.287a10 10 0 0 0-.688.934c-.234.356-.535.785-.669.953l-.466.59c-.053.067-.12.145-.195.226a5 5 0 0 1-.194-.225l-.467-.59a18 18 0 0 1-.668-.954 10 10 0 0 0-.688-.934l-.263-.287.395-.138A2.6 2.6 0 0 0 8.52 8.71c.411-.418.52-.684.523-1.292.003-.45-.009-.51-.166-.83-.192-.39-.399-.58-.881-.808-.502-.238-1.07-.345-1.89-.342"
                fill="#bf9950"
                strokeWidth=".19294"
                fillOpacity="1"
              />
              <g stroke="#fff" strokeOpacity="1">
                <path
                  d="M7.201 4.606c1.288-.449 2.641-.546 4.117 0"
                  fill="none"
                  stroke="#fff"
                  strokeWidth=".340421"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeDasharray="none"
                  strokeOpacity="1"
                  transform="translate(2.876 1.838)scale(.68946)"
                />
                <path
                  d="M7.202 4.97c1.287-.448 2.64-.545 4.116 0"
                  fill="none"
                  stroke="#fff"
                  strokeWidth=".152527"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeDasharray="none"
                  strokeOpacity="1"
                  transform="translate(2.876 1.838)scale(.68946)"
                />
                <path
                  d="m6.895 4.091-.989-1.917 2.018.908L9.26 1.498l1.337 1.584 2.018-.908-.989 1.917"
                  fill="none"
                  stroke="#fff"
                  strokeWidth=".340421"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeDasharray="none"
                  strokeOpacity="1"
                  transform="translate(2.876 1.838)scale(.68946)"
                />
              </g>
            </motion.svg>
            <div className="w-[3px] h-6 bg-[#bf9950]"></div>
            <img
              src="/icons/rain_rest_name.svg"
              alt="Rian Rest Logo"
              className="h-8 md:h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {['About', 'Photos', 'Amenities', 'Location'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[13px] font-extrabold tracking-[0.2em] uppercase hover:text-[#7EB0D2] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <a
              href={waLink}
              target="_blank"
              className="text-white px-4 md:px-8 py-2.5 md:py-3 text-[10px] md:text-[12px] font-bold tracking-[0.1em] md:tracking-[0.15em] uppercase transition-all shadow-sm whitespace-nowrap"
              style={{ backgroundColor: '#2D3648' }}
            >
              BOOK NOW
            </a>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-black text-2xl p-1"
            >
              ☰
            </button>
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
          <img src="/logo.png" alt="Logo" className="h-10 w-auto mb-4" />
          {['About', 'Photos', 'Amenities', 'Location'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-serif tracking-[0.15em] uppercase font-bold hover:text-[#7EB0D2]"
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
