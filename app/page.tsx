"use client";

import { Home as HouseIcon } from 'lucide-react';
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
    <div className="min-h-screen text-[#222222] selection:bg-black selection:text-white font-sans bg-[#F0F4F7] overflow-x-hidden">
      
      {/* Header */}
      <header 
        className="sticky top-0 z-[60] backdrop-blur-md bg-[#F0F4F7]/90 border-b-[#7eb0d2] border-b md:border-b-black/5"
        style={{ boxSizing: 'border-box' }}
      >
        <div className="max-w-[1100px] mx-auto px-5 py-6 flex items-center justify-between">
          {/* Logo Section with House Icon and Separator */}
          <a href="#top" className="flex items-center gap-3 transition-transform hover:opacity-70">
             <HouseIcon size={24} className="text-[#2D3648]" strokeWidth={2} />
             <div className="w-[1.5px] h-6 bg-black/10"></div>
             <img src="/logo.png" alt="Rian Rest Logo" className="h-10 md:h-12 w-auto object-contain" />
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

          <div className="flex items-center gap-4">
            <a 
              href={waLink} 
              target="_blank" 
              className="text-white px-6 md:px-8 py-3 text-[11px] md:text-[12px] font-bold tracking-[0.15em] uppercase transition-all shadow-sm"
              style={{ backgroundColor: '#2D3648' }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#7EB0D2')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#2D3648')}
            >
              BOOK NOW
            </a>
            <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-black text-3xl">☰</button>
          </div>
        </div>
      </header>

      {/* MOBILE NAV MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#F0F4F7] flex flex-col items-center justify-center gap-8 md:hidden">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-6 text-black text-3xl p-2">✕</button>
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
        {/* Hero Section */}
        <section className="max-w-[1100px] mx-auto px-5 pt-12 md:pt-24 pb-24 md:pb-28 grid md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-center">
          <div>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#666666] mb-4 block">Private Apartment • Dehiwala</span>
            <h1 className="text-5xl md:text-7xl font-playfair leading-[1.1] mb-8 uppercase tracking-tight">
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

        {/* About Section */}
        <section id="about" className="bg-[#F8FAFC] py-24 md:py-28 border-y border-black/5">
          <div className="max-w-[1100px] mx-auto px-5">
            <div className="grid md:grid-cols-3 gap-16">
              {[
                {h: "Clean & Cozy", p: "A meticulously maintained private space designed for absolute relaxation."},
                {h: "Prime Location", p: "Nestled in Dehiwala, minutes away from premium dining and travel hubs."},
                {h: "Direct Support", p: "Seamless communication via WhatsApp for personalized booking."}
              ].map((item, i) => (
                <div key={i} className="space-y-5">
                  <h3 className="text-[15px] font-black tracking-[0.25em] uppercase">{item.h}</h3>
                  <p className="text-[#333333] text-base md:text-lg leading-relaxed font-railway text-justify [hyphens:auto]">
                    {item.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="photos" className="py-20 md:py-32 bg-[#F0F4F7]">
          <div className="max-w-[1100px] mx-auto px-5">
            <div className="hidden md:grid md:grid-cols-[1fr_350px] gap-12 items-start">
              <div className="aspect-[16/10] bg-white p-3 shadow-2xl overflow-hidden">
                <img src={selectedImage} alt="Main" className="w-full h-full object-cover transition-all duration-500" />
              </div>
              <div className="flex flex-col gap-8">
                <h2 className="text-[12px] font-black tracking-[0.4em] uppercase text-[#222222]">The Gallery</h2>
                <div className="grid grid-cols-3 gap-3">
                  {galleryImages.map((num) => (
                    <div 
                      key={num} 
                      onClick={() => setSelectedImage(`/images/${num}.jpg`)} 
                      className={`aspect-square cursor-pointer overflow-hidden transition-all duration-300 border-2`}
                      style={{ borderColor: selectedImage === `/images/${num}.jpg` ? '#2D3648' : 'transparent' }}
                    >
                      <img src={`/images/${num}.jpg`} className="w-full h-full object-cover" alt="Gallery item" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <h2 className="text-[12px] font-black tracking-[0.4em] uppercase text-[#222222] mb-6">The Gallery</h2>
              <div className="grid grid-cols-2 gap-3">
                {galleryImages.map((num) => (
                  <div key={num} className="aspect-square bg-white shadow-md overflow-hidden rounded-sm">
                    <img src={`/images/${num}.jpg`} className="w-full h-full object-cover" alt="Gallery item" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="py-24 border-t border-black/10 max-w-[1100px] mx-auto px-5 text-center">
          <h2 className="text-[12px] font-black tracking-[0.4em] uppercase mb-12">Curated Amenities</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {amenities.map((item) => (
              <div key={item} className="px-8 py-4 border border-black/10 text-[11px] font-black tracking-[0.2em] uppercase text-[#333333]">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-24 bg-[#F8FAFC] border-t border-black/5">
          <div className="max-w-[1100px] mx-auto px-5">
            <h2 className="text-[12px] font-black tracking-[0.4em] uppercase mb-20 text-center">Proximity Guide</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-12">
              {[
                { name: "KFC / BK / Pizza Hut", dist: "1.1 km", time: "5 MIN" },
                { name: "Cargills / Keells", dist: "500 m", time: "2 MIN" },
                { name: "Beach", dist: "3.2 km", time: "15 MIN" },
                { name: "Hospital", dist: "2.8 km", time: "12 MIN" },
                { name: "Airport", dist: "42 km", time: "55 MIN" },
                { name: "Makumbura Multimodal Centre", dist: "16 km", time: "30 MIN" },
              ].map((place, i) => (
                <div key={i} className="border-l-2 border-black/20 pl-6 md:pl-8">
                  <p className="text-[10px] font-black text-black/40 tracking-[0.2em] mb-3">{place.time}</p>
                  <p className="text-[13px] md:text-[14px] font-black tracking-[0.1em] uppercase mb-1 leading-tight">{place.name}</p>
                  <p className="text-[11px] text-black/50 uppercase">{place.dist}</p>
                </div>
              ))}
            </div>
            <div className="mt-20 h-[400px] md:h-[450px] bg-white border border-black/5 p-2 shadow-sm">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.2!2d79.8!3d6.8!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnMTEuNSJOIDc5wrA1MycyOC4yIkU!5e0!3m2!1sen!2slk!4v1" width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
            </div>
          </div>
        </section>
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
