'use client';

import { Home as HouseIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Photos from '../components/Photos';
import Amenities from '../components/Amenities';
import Location from '../components/Location';
import { motion } from 'framer-motion';
import LogoIcon from '@/components/icons/LogoIcon';

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
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18.521 18.521"
              fill="none"
              className="w-12 h-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.08,
                rotate: -2,
              }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
              }}
            >
              {/* Center Square */}
              <motion.rect
                width="5.623"
                height="5.623"
                x="6.449"
                y="6.449"
                rx=".572"
                ry=".463"
                fill="transparent"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  ease: 'easeInOut',
                }}
              />

              {/* Outer Crest */}
              <motion.path
                d="M11.057.473c-.382 1.045-1.212 1.808-2.073 2.463C8.247 3.6 7.94 4.65 8.12 5.614c-.783-.014-1.698-.057-2.225.645-.58-.647-.63-1.543-.633-2.365-.17-.677-.303-1.88-.936-2.12.458.992.434 2.1.28 3.155-.1.944.468 1.8 1.023 2.45v2.107c-1.152.262-2.24-.359-2.98-1.195-.6-.36-1.543-1.11-2.161-.838 1.05.38 1.81 1.217 2.47 2.078.64.789 1.813.965 2.67.91.029.71-.168 1.579.526 2.052.064.52-1.278.792-1.887.728-.81.096-2.128.276-2.478.961.992-.457 2.1-.431 3.156-.277.942.099 1.802-.466 2.446-1.024H9.5c.262 1.151-.359 2.238-1.194 2.98-.36.6-1.111 1.542-.839 2.161.381-1.045 1.21-1.808 2.07-2.463.738-.664 1.045-1.713.866-2.678.783.014 1.699.057 2.226-.646.58.647.628 1.543.632 2.364.17.68.306 1.877.936 2.121-.458-.991-.432-2.099-.278-3.154.1-.945-.47-1.802-1.025-2.452V9.01c1.152-.262 2.24.359 2.98 1.195.6.36 1.543 1.11 2.161.838-1.044-.38-1.807-1.21-2.462-2.07-.664-.738-1.713-1.044-2.679-.865-.034-.726.182-1.618-.525-2.105-.065-.521 1.277-.794 1.887-.73.808-.095 2.132-.274 2.478-.959-.992.457-2.1.431-3.156.277-.943-.1-1.801.467-2.446 1.024H9.024c-.262-1.151.358-2.24 1.194-2.98.336-.57 1.138-1.585.839-2.161ZM7.282 6.594h3.958c.374 0 .675.244.675.546v4.215c0 .302-.301.546-.675.546H7.282c-.374 0-.675-.244-.675-.546V7.14c0-.302.301-.546.675-.546z"
                fill="#bf9950"
                stroke="#bf9950"
                strokeWidth={0.254378}
                strokeLinecap="square"
                strokeOpacity={0.639216}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                }}
              />

              {/* Inner Monogram */}
              <motion.path
                d="M8.285 7.756q-.127 0-.282.012l-.44.032c-.175.012-.206.023-.207.073 0 .01.037.022.083.028.045.005.1.023.122.039.08.059.08.077.076 1.103l-.005.954-.05.045a.3.3 0 0 1-.111.055l-.08.016c-.03.01-.042.056-.017.072.012.008.231.012.487.01l.466-.003v-.039c0-.034-.01-.04-.089-.056-.117-.023-.167-.058-.187-.13-.01-.039-.016-.413-.017-1.057v-.997l.057-.011a1 1 0 0 1 .17-.002c.331.024.522.2.522.484 0 .17-.037.264-.15.385a.65.65 0 0 1-.315.199l-.13.034c-.071.018-.074.036-.012.069.067.034.103.077.185.22l.138.238c.036.06.071.123.077.139.016.042.146.223.258.36q.079.095.17.182a1.627 1.627 0 0 1-.677.369c-.266.059-.614.033-.797-.06q-.121-.06-.08.007c.028.045.296.176.425.21.096.024.17.03.338.029.118 0 .252-.008.299-.016.118-.019.333-.093.495-.17q.124-.06.253-.153.13.093.254.153c.162.077.377.15.495.17.047.008.181.015.3.016.167.002.24-.005.337-.03.13-.032.396-.164.425-.209q.04-.067-.08-.007c-.183.093-.53.119-.796.06a1.6 1.6 0 0 1-.528-.246 2 2 0 0 1-.15-.123q.091-.087.17-.182c.112-.137.242-.318.258-.36a2 2 0 0 1 .077-.14c.036-.06.099-.167.138-.236.082-.144.118-.187.185-.221.062-.033.059-.05-.012-.07l-.13-.033a.65.65 0 0 1-.316-.199.49.49 0 0 1-.15-.385c0-.283.192-.46.523-.484a1 1 0 0 1 .17.002l.056.01v.998c0 .644-.005 1.018-.016 1.056-.02.073-.07.108-.187.13-.078.016-.088.023-.088.057v.038l.465.004c.256.002.475-.003.488-.01.024-.016.013-.063-.018-.072l-.08-.016a.3.3 0 0 1-.11-.055l-.051-.046-.005-.953c-.004-1.026-.003-1.045.076-1.104a.3.3 0 0 1 .122-.039c.046-.005.083-.017.083-.027-.001-.05-.032-.061-.207-.073l-.44-.032c-.417-.03-.66-.005-.867.093-.149.07-.213.13-.272.25-.049.1-.053.118-.051.257 0 .188.034.27.161.4.114.115.2.17.354.224l.122.043-.081.089a3 3 0 0 0-.213.288c-.072.11-.165.243-.206.295l-.145.182q-.025.032-.06.07l-.06-.07-.144-.182a6 6 0 0 1-.207-.295 3 3 0 0 0-.212-.288l-.082-.09.123-.042a.8.8 0 0 0 .353-.225c.128-.13.161-.211.162-.4.001-.138-.003-.157-.051-.256-.06-.12-.124-.18-.273-.25-.155-.073-.33-.106-.584-.105"
                fill="#0a4887"
                stroke="#0a4887"
                strokeWidth={0.08}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 2.5,
                  delay: 0.4,
                  ease: 'easeInOut',
                }}
              />
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
          <LogoIcon className="w-23 h-23" />

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
