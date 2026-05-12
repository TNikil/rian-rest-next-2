"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const WHATSAPP_NUMBER = "+94764779861";
  const WA_MESSAGE = "Hi! I would like to book Rian Rest. Please send availability, prices, and details. Thank you!";
  
  const amenities = [
    "Wi-Fi", "Hot water", "Kitchen",
    "Air conditioning", "TV", "Clean bedding", "Family friendly", "Rooftop access"
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("/images/1.jpg");
  const [waLink, setWaLink] = useState("");

  useEffect(() => {
    const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
    const encodedMsg = encodeURIComponent(WA_MESSAGE);
    setWaLink(`https://wa.me/${cleanNumber}?text=${encodedMsg}`);
  }, []);

  const galleryImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="min-h-screen text-[#222222] selection:bg-black selection:text-white font-sans bg-[#F0F4F7]">
      
      {/* Header */}
      <header className="sticky top-0 z-[60] backdrop-blur-md bg-[#F0F4F7]/90 border-b border-black/5">
        <div className="max-w-[1100px] mx-auto px-5 py-6 flex items-center justify-between">
          <a href="#top" className="transition-transform hover:opacity-70">
             <img 
               src="/logo.png" 
               alt="Rian Rest Logo" 
               className="h-10 md:h-12 w-auto object-contain" 
             />
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {['About', 'Photos', 'Amenities', 'Location'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[13px] font-extrabold tracking-[0.2em] uppercase hover:text-[#22c55e] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
            <a 
              href={waLink} 
              target="_blank" 
              className="bg-[#22c55e] text-white px-5 md:px-8 py-2.5 md:py-3 text-[11px] md:text-[12px] font-bold tracking-[0.15em] uppercase hover:bg-black transition-all shadow-sm"
            >
              BOOK NOW
            </a>
            <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-black text-3xl">☰</button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#F0F4F7] flex flex-col items-center justify-center gap-12 md:hidden">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-6 text-black text-4xl p-2">✕</button>
          <img src="/logo.png" alt="Logo" className="h-12 w-auto mb-6" />
          {['About', 'Photos', 'Amenities', 'Location'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-serif tracking-[0.2em] uppercase font-black hover:text-[#22c55e]"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      <main id="top">
        {/* Hero Section */}
        <section className="max-w-[1100px] mx-auto px-5 pt-12 md:pt-24 pb-20 md:pb-28 grid md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-center">
          <div>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#666666] mb-4 block">Private Apartment • Dehiwala</span>
            <h1 className="text-4xl md:text-7xl font-serif leading-[1.2] md:leading-[1.1] mb-8 uppercase tracking-tight">
              A refined stay <br className="hidden md:block"/>in the <span className="italic">heart</span> of city.
            </h1>
            <p className="text-[#444444] text-lg md:text-2xl leading-relaxed mb-10 max-w-md font-medium">
              An SLTDA approved sanctuary designed for those who seek tranquility and convenience.
            </p>
            <div className="flex gap-8">
              <a href="#photos" className="border-b-2 border-black pb-1 text-[11px] font-bold tracking-[0.2em] uppercase hover:text-[#22c55e] transition-all">View Gallery</a>
              <a href="#location" className="border-b-2 border-black pb-1 text-[11px] font-bold tracking-[0.2em] uppercase hover:text-[#22c55e] transition-all">Location</a>
            </div>
          </div>
          <div className="aspect-[4/5] bg-white/40 overflow-hidden shadow-sm hidden md:block">
            <img src="/images/hero.jpg" alt="Interior" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* About Section - Bolded & Larger Text */}
        <section id="about" className="bg-[#F8FAFC] py-20 md:py-28 border-y border-black/5">
          <div className="max-w-[1100px] mx-auto px-5">
            <div className="grid md:grid-cols-3 gap-12 md:gap-16">
              {[
                { h: "Clean & Cozy", p: "A meticulously maintained private space designed for absolute relaxation." },
                { h: "Prime Location", p: "Nestled in Dehiwala, minutes away from premium dining and travel hubs." },
                { h: "Direct Support", p: "Seamless communication via WhatsApp for personalized booking." }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="text-[15px] font-black tracking-[0.25em] uppercase">{item.h}</h3>
                  <p className="text-[#333333] text-base md:text-lg leading-relaxed">{item.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MODERN GALLERY - FIXED MOBILE VIEW */}
        <section id="photos" className="py-20 md:py-24 max-w-[1100px] mx-auto px-5">
          <div className="grid md:grid-cols-[1fr_320px] gap-8 md:gap-12 items-start">
            
            {/* 1. Main Focus Image - Controlled Height on Mobile */}
            <div className="aspect-square md:aspect-[16/11] bg-white p-2 md:p-3 shadow-xl overflow-hidden">
              <img 
                src={selectedImage} 
                alt="Main Gallery Focus" 
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* 2. Controls & Thumbnails */}
            <div className="flex flex-col gap-6 md:gap-10">
              <div className="text-left">
                <h2 className="text-[12px] font-bold tracking-[0.4em] uppercase mb-2 text-black/40">The Gallery</h2>
                <p className="text-3xl md:text-4xl font-serif italic mb-4 leading-tight">Attention to detail.</p>
              </div>

              {/* Scrollable Thumbnails - Horizontal on Mobile, Grid on Desktop */}
              <div className="flex flex-row md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible pb-4 md:pb-0 gap-3 no-scrollbar scroll-smooth">
                {galleryImages.map((num) => (
                  <div 
                    key={num} 
                    onClick={() => setSelectedImage(`/images/${num}.jpg`)} 
                    className={`flex-none w-20 h-20 md:w-auto md:aspect-square cursor-pointer overflow-hidden transition-all duration-300 border-2 ${
                        selectedImage === `/images/${num}.jpg` ? 'border-[#22c55e] scale-95 shadow-md' : 'border-transparent opacity-50'
                    }`}
                  >
                    <img src={`/images/${num}.jpg`} className="w-full h-full object-cover" alt={`Thumb ${num}`}/>
                  </div>
                ))}
              </div>
              
              <p className="md:hidden text-[10px] font-bold tracking-[0.1em] text-black/30 uppercase italic">← Swipe to see more</p>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="py-20 md:py-24 border-t border-black/10 max-w-[1100px] mx-auto px-5 text-center">
          <h2 className="text-[12px] font-black tracking-[0.4em] uppercase mb-12">Curated Amenities</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {amenities.map((item) => (
              <div key={item} className="px-6 md:px-8 py-3 md:py-4 border border-black/10 text-[11px] font-black tracking-[0.2em] uppercase text-[#333333]">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-20 md:py-24 bg-[#F8FAFC] border-t border-black/5">
          <div className="max-w-[1100px] mx-auto px-5">
            <h2 className="text-[12px] font-black tracking-[0.4em] uppercase mb-16 text-center">Proximity Guide</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
              {[
                { name: "KFC / BK", dist: "1.1 km", time: "5 MIN" },
                { name: "Supermarket", dist: "500 m", time: "2 MIN" },
                { name: "Beach", dist: "3.2 km", time: "15 MIN" },
                { name: "Hospital", dist: "2.8 km", time: "12 MIN" },
                { name: "Airport", dist: "42 km", time: "55 MIN" },
              ].map((place, i) => (
                <div key={i} className="border-l-2 border-black/20 pl-4 md:pl-8">
                  <p className="text-[10px] font-black text-black/40 tracking-[0.2em] mb-2">{place.time}</p>
                  <p className="text-[13px] md:text-[14px] font-black tracking-[0.1em] uppercase mb-1">{place.name}</p>
                  <p className="text-[11px] text-black/50 uppercase">{place.dist}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 h-[350px] md:h-[450px] bg-white border border-black/5 p-1 md:p-2 shadow-sm">
               <iframe src="https://www.google.com/maps?q=68/D/1/1,+Kawdana+RD,+Dehiwala&output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 text-center border-t border-black/10">
        <p className="text-[12px] font-black tracking-[0.5em] uppercase text-black/40 mb-4">Rian Rest Apartment</p>
        <p className="text-[10px] text-black/30 tracking-[0.2em] uppercase font-bold">© {new Date().getFullYear()} — Built by Creovx</p>
      </footer>
    </div>
  );
}
