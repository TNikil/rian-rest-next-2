"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const WHATSAPP_NUMBER = "+94764779861";
  const LOCATION_TEXT = "68/D/1/1, Kawdana Road, Dehiwala, Sri Lanka";
  const DIRECTIONS_LINK = "https://maps.google.com/?q=Rian+Rest+Apartment+Dehiwala";
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
      
      {/* Header - Increased Nav Link Size */}
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

          <div className="flex items-center gap-6">
            <a 
              href={waLink} 
              target="_blank" 
              className="bg-[#22c55e] text-white px-8 py-3 text-[12px] font-bold tracking-[0.15em] uppercase hover:bg-black transition-all shadow-sm"
            >
              BOOK NOW
            </a>
            {/* Hamburger Menu - Made slightly larger */}
            <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-black text-4xl">☰</button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Increased Font Sizes as per screenshot */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#F0F4F7] flex flex-col items-center justify-center gap-14 md:hidden">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-6 text-black text-4xl p-2">✕</button>
          <img src="/logo.png" alt="Logo" className="h-12 w-auto mb-6" />
          {['About', 'Photos', 'Amenities', 'Location'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-serif tracking-[0.2em] uppercase font-black hover:text-[#22c55e] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      <main id="top">
        {/* Hero Section */}
        <section className="max-w-[1100px] mx-auto px-5 pt-24 pb-28 grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#666666] mb-4 block">Private Apartment • Dehiwala</span>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 uppercase tracking-tight">
              A refined stay <br/>in the <span className="italic">heart</span> of city.
            </h1>
            <p className="text-[#444444] text-xl md:text-2xl leading-relaxed mb-12 max-w-md font-medium">
              An SLTDA approved sanctuary designed for those who seek tranquility, comfort, and effortless convenience.
            </p>
            <div className="flex gap-10">
              <a href="#photos" className="border-b-2 border-black pb-1 text-[11px] font-bold tracking-[0.2em] uppercase hover:text-[#22c55e] hover:border-[#22c55e] transition-all">View Gallery</a>
              <a href="#location" className="border-b-2 border-black pb-1 text-[11px] font-bold tracking-[0.2em] uppercase hover:text-[#22c55e] hover:border-[#22c55e] transition-all">Explore Location</a>
            </div>
          </div>
          <div className="aspect-[4/5] bg-white/40 relative overflow-hidden shadow-sm">
            <img src="/images/hero.jpg" alt="Interior" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* About Section - Increased Headings as per screenshot */}
        <section id="about" className="bg-[#F8FAFC] py-28 border-y border-black/5">
          <div className="max-w-[1100px] mx-auto px-5">
            <div className="grid md:grid-cols-3 gap-16">
              <div className="space-y-5">
                <h3 className="text-[14px] font-black tracking-[0.25em] uppercase">Clean & Cozy</h3>
                <p className="text-[#333333] text-base leading-relaxed">A meticulously maintained private space designed for absolute relaxation.</p>
              </div>
              <div className="space-y-5">
                <h3 className="text-[14px] font-black tracking-[0.25em] uppercase">Prime Location</h3>
                <p className="text-[#333333] text-base leading-relaxed">Nestled in Dehiwala, minutes away from premium dining and travel hubs.</p>
              </div>
              <div className="space-y-5">
                <h3 className="text-[14px] font-black tracking-[0.25em] uppercase">Direct Support</h3>
                <p className="text-[#333333] text-base leading-relaxed">Seamless communication via WhatsApp for personalized booking.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Design 2 (Filmstrip) */}
        <section id="photos" className="py-24 max-w-[1100px] mx-auto px-5">
          <div className="grid md:grid-cols-[1fr_320px] gap-12 items-center">
            <div className="aspect-[3/4] md:aspect-[16/10] bg-white p-3 shadow-xl overflow-hidden group">
              <img 
                src={selectedImage} 
                alt="Main Gallery Focus" 
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            <div className="flex flex-col gap-10">
              <div className="text-left">
                <h2 className="text-[12px] font-bold tracking-[0.4em] uppercase mb-4 text-black/40">The Gallery</h2>
                <p className="text-4xl font-serif italic mb-4 leading-tight">Attention to <br/>every detail.</p>
                <p className="text-[10px] text-black/40 tracking-widest uppercase font-bold">Select a view to expand</p>
              </div>

              <div className="flex flex-row md:grid md:grid-cols-3 overflow-x-auto pb-4 gap-3 no-scrollbar scroll-smooth">
                {galleryImages.map((num) => (
                  <div 
                    key={num} 
                    onClick={() => setSelectedImage(`/images/${num}.jpg`)} 
                    className={`flex-none w-24 h-24 md:w-auto md:aspect-square cursor-pointer overflow-hidden transition-all duration-300 border-2 ${
                        selectedImage === `/images/${num}.jpg` ? 'border-[#22c55e] scale-95 shadow-inner' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={`/images/${num}.jpg`} className="w-full h-full object-cover" alt={`Thumb ${num}`}/>
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
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-12">
              {[
                { name: "KFC / Burger King", dist: "1.1 km", time: "5 MIN" },
                { name: "Cargills / Keells", dist: "500 m", time: "2 MIN" },
                { name: "Beach", dist: "3.2 km", time: "15 MIN" },
                { name: "Hospital", dist: "2.8 km", time: "12 MIN" },
                { name: "Airport", dist: "42 km", time: "55 MIN" },
              ].map((place, i) => (
                <div key={i} className="border-l-2 border-black/20 pl-8">
                  <p className="text-[10px] font-black text-black/40 tracking-[0.2em] mb-3">{place.time}</p>
                  <p className="text-[14px] font-black tracking-[0.1em] uppercase mb-1">{place.name}</p>
                  <p className="text-[12px] text-black/50 uppercase">{place.dist}</p>
                </div>
              ))}
            </div>
            <div className="mt-20 h-[450px] bg-white border border-black/5 p-2 shadow-sm">
               <iframe src="https://www.google.com/maps?q=68/D/1/1,+Kawdana+RD,+Dehiwala&output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-black/10">
        <p className="text-[12px] font-black tracking-[0.5em] uppercase text-black/40 mb-4">Rian Rest Apartment</p>
        <p className="text-[10px] text-black/30 tracking-[0.2em] uppercase font-bold">© {new Date().getFullYear()} — Built by Creovx</p>
      </footer>
    </div>
  );
}
