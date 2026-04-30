"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  // --- CONFIG ---
  const WHATSAPP_NUMBER = "+94764779861";
  const LOCATION_TEXT = "68/D/1/1, Kawdana RD, Dehiwala";
  const DIRECTIONS_LINK = "https://maps.app.goo.gl/fyHXyLoEcC5SiogB6";
  const WA_MESSAGE = "Hi! I would like to book Rian Rest. Please send availability, prices, and details. Thank you!";
  
  const amenities = [
    "Wi-Fi", "Parking", "Hot water", "Kitchen", 
    "Air conditioning", "TV", "Clean bedding", "Family friendly"
  ];

  // --- STATE ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [waLink, setWaLink] = useState("");

  useEffect(() => {
    const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
    const encodedMsg = encodeURIComponent(WA_MESSAGE);
    setWaLink(`https://wa.me/${cleanNumber}?text=${encodedMsg}`);
  }, []);

  const galleryImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="min-h-screen text-[#eef2f7] selection:bg-[#22c55e]/30"
         style={{
           backgroundColor: '#0b0d10',
           backgroundImage: `
             radial-gradient(1200px 600px at 20% -10%, rgba(96,165,250,0.25), transparent 60%),
             radial-gradient(1000px 500px at 90% 0%, rgba(34,197,94,0.18), transparent 55%)
           `
         }}>
      
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-[10px] bg-[#0b0d10]/65 border-b border-white/5">
        <div className="max-w-[1100px] mx-auto px-[4%] py-3 flex items-center justify-between">
          <a href="#top" className="font-[800] tracking-[0.3px]">Rian Rest</a>
          
          <nav className={`
            ${isMenuOpen ? 'flex' : 'hidden'} 
            md:flex 
            absolute md:relative 
            top-[68px] md:top-0 
            left-4 right-4 md:left-0 md:right-0 
            flex-col md:flex-row 
            gap-4 md:gap-[22px] 
            p-5 md:p-0 
            rounded-[22px] md:rounded-none 
            border md:border-none border-white/10 
            bg-[#111318] md:bg-transparent 
            shadow-2xl md:shadow-none
          `}>
            {['About', 'Photos', 'Amenities', 'Location', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMenuOpen(false)} 
                className="text-[#a9b3bf] font-[700] text-[13px] hover:text-[#eef2f7] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden w-[42px] h-[42px] rounded-[12px] border border-white/5 bg-white/[0.02] flex flex-col items-center justify-center gap-[4px]"
            >
              <span className={`w-[18px] h-[2px] bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-[18px] h-[2px] bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-[18px] h-[2px] bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
            <a href={waLink} target="_blank" className="bg-[#22c55e]/15 border border-[#22c55e]/25 px-[14px] py-[10px] rounded-full text-sm font-[800] hover:bg-[#22c55e]/22 transition">
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="max-w-[1100px] mx-auto px-[4%]">
        {/* Hero Section */}
        <section className="pt-14 pb-5 grid md:grid-cols-[1.15fr_0.85fr] gap-[26px] items-center">
          <div>
            <span className="inline-flex px-[10px] py-[6px] rounded-full border border-white/5 bg-white/[0.03] text-[#a9b3bf] font-[700] text-[12px]">Apartment • Short & Long Stays</span>
            <h1 className="text-[clamp(34px,4vw,52px)] font-bold mt-[14px] mb-[10px] leading-[1.05]">Comfortable stay at <span className="text-[#22c55e]">Rian Rest</span></h1>
            <p className="text-[#a9b3bf] leading-[1.7] max-w-md">A clean, cozy apartment for couples, families, and solo travelers. Check availability and rates instantly via WhatsApp.</p>
            <div className="flex gap-3 mt-[18px] flex-wrap">
              <a href="#photos" className="bg-white/[0.04] border border-white/5 px-[14px] py-[10px] rounded-full font-[800] text-sm hover:bg-white/[0.06] transition">View Photos</a>
              <a href={waLink} target="_blank" className="bg-[#22c55e]/15 border border-[#22c55e]/25 px-[14px] py-[10px] rounded-full font-[800] text-sm hover:bg-[#22c55e]/22 transition">Chat on WhatsApp</a>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-[22px]">
              {[{t:'Check-in', v:'Flexible'}, {t:'Stay type', v:'Daily/Monthly'}, {t:'Best for', v:'Families'}].map(s=>(
                <div key={s.t} className="p-[14px] rounded-[18px] border border-white/5 bg-white/[0.03]">
                  <p className="text-[#a9b3bf] text-[12px] font-[800] uppercase">{s.t}</p>
                  <p className="text-sm font-[900] mt-1">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[28px] border border-white/5 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.45)] h-[420px] bg-zinc-800">
             <img src="/images/hero.jpg" alt="Hero" className="w-full h-full object-cover" />
             <div className="absolute left-[14px] bottom-[14px] p-[12px_14px] rounded-[18px] border border-white/5 bg-[#12161b]/70 backdrop-blur-[10px]">
              <p className="font-[900]">Fast booking</p>
              <p className="text-[#a9b3bf] text-[12px]">WhatsApp us to reserve</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-[46px] grid md:grid-cols-[1.2fr_0.8fr] gap-[18px]">
          <div>
            <h2 className="text-[28px] font-bold mb-[6px]">About Rian Rest</h2>
            <p className="text-[#a9b3bf] leading-[1.7]">Rian Rest is a private apartment stay designed for comfort and convenience. Close to key locations, ideal for relaxing after travel or work. (SLTDA Approved)</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              {['Clean & Cozy', 'Great Location', 'Quick Support'].map(t => (
                <div key={t} className="p-[14px] border border-white/5 bg-white/[0.03] rounded-[18px]">
                  <h3 className="text-base font-bold mb-1.5">{t}</h3>
                  <p className="text-[#a9b3bf] text-xs">Top tier comfort and accessibility.</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-[18px] border border-white/5 bg-white/[0.03] rounded-[22px]">
            <h3 className="font-bold text-lg">At a glance</h3>
            <ul className="my-3 space-y-2">
              {['Private apartment', 'Suitable for couples', 'Short & monthly stays', 'Easy booking'].map(item => (
                <li key={item} className="flex gap-2.5 text-[#a9b3bf] text-sm"><span className="text-[#22c55e]">✔</span> {item}</li>
              ))}
            </ul>
            <a href={waLink} target="_blank" className="block text-center w-full bg-[#22c55e]/15 border border-[#22c55e]/25 p-2.5 rounded-full font-[800] text-sm">WhatsApp to Book</a>
          </div>
        </section>

        {/* Photos Grid */}
        <section id="photos" className="py-[46px]">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-[28px] font-bold">Photo Gallery</h2>
            <a href="#contact" className="text-[#60a5fa] font-[800] hover:underline">Need rates? →</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map(num => (
              <div key={num} onClick={() => setSelectedImage(`/images/${num}.jpg`)} className="h-[220px] border border-white/5 bg-white/[0.02] rounded-[18px] overflow-hidden cursor-pointer group">
                <img src={`/images/${num}.jpg`} className="h-full w-full object-cover group-hover:scale-[1.05] transition-transform duration-300" alt={`Room ${num}`} />
              </div>
            ))}
          </div>
        </section>

        {/* Amenities Section */}
        <section id="amenities" className="py-[46px]">
          <h2 className="text-[28px] font-bold mb-4">Amenities</h2>
          <div className="flex flex-wrap gap-[10px]">
            {amenities.map(item => (
              <div key={item} className="px-3 py-2.5 rounded-full border border-white/5 bg-white/[0.03] font-[800] text-[13px] text-[#a9b3bf]">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-[46px]">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-[28px] font-bold">Location</h2>
              <p className="text-[#a9b3bf]">Rian Rest – tap “Get Directions” or view the map below.</p>
            </div>
            <a href={DIRECTIONS_LINK} target="_blank" className="bg-white/[0.04] border border-white/5 px-[14px] py-[10px] rounded-full font-[800] text-sm transition">Get Directions</a>
          </div>
          <div className="rounded-[22px] border border-white/5 overflow-hidden h-[420px] bg-zinc-900">
            <iframe src="https://www.google.com/maps?q=68/D/1/1,+Kawdana+RD,+Dehiwala&output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-[46px] grid md:grid-cols-2 gap-[18px]">
          <div>
            <h2 className="text-[28px] font-bold mb-2">Contact & Booking</h2>
            <p className="text-[#a9b3bf] mb-4">Message us on WhatsApp and we’ll reply with availability, rates, and details.</p>
            <div className="p-[14px] border border-white/5 bg-white/[0.03] rounded-[18px]">
              <div className="flex justify-between py-[10px] border-b border-white/5">
                <span className="text-[#a9b3bf] font-[900] text-[12px]">WhatsApp</span>
                <span className="font-[900]">{WHATSAPP_NUMBER}</span>
              </div>
              <div className="flex justify-between py-[10px]">
                <span className="text-[#a9b3bf] font-[900] text-[12px]">Location</span>
                <span className="font-[900] text-right">{LOCATION_TEXT}</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4 flex-wrap">
              <a href={waLink} target="_blank" className="bg-[#22c55e]/15 border border-[#22c55e]/25 px-6 py-3 rounded-full font-bold">Book on WhatsApp</a>
            </div>
          </div>
          <div className="p-[18px] border border-white/5 bg-white/[0.03] rounded-[22px]">
            <h3 className="font-bold">Quick message template</h3>
            <p className="text-[#a9b3bf] text-xs italic mb-2">Auto-fills in WhatsApp:</p>
            <div className="bg-black/25 p-3 rounded-[16px] border border-white/5 text-[#a9b3bf] text-sm leading-relaxed">
              {WA_MESSAGE}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 border-t border-white/5 bg-[#0b0d10]/55 text-center">
        <p className="text-[#a9b3bf] text-[13px]">© {new Date().getFullYear()} Rian Rest Apartment. All rights reserved.</p>
      </footer>

      {/* Lightbox Pop-up */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-[20px]" onClick={() => setSelectedImage(null)}>
          <button className="fixed top-6 right-6 text-white text-2xl font-black">✕</button>
          <img src={selectedImage} className="max-w-full max-h-full rounded-[12px] shadow-2xl" alt="Enlarged view" />
        </div>
      )}

      {/* Floating WhatsApp */}
      <a href={waLink} target="_blank" className="fixed right-[20px] bottom-[20px] px-5 py-3 rounded-full bg-[#22c55e]/20 border border-[#22c55e]/30 font-[900] shadow-2xl z-40">
        WhatsApp
      </a>
    </div>
  );
}