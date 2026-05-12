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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [waLink, setWaLink] = useState("");

  useEffect(() => {
    const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
    const encodedMsg = encodeURIComponent(WA_MESSAGE);
    setWaLink(`https://wa.me/${cleanNumber}?text=${encodedMsg}`);
  }, []);

  const galleryImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="min-h-screen text-[#222222] selection:bg-black selection:text-white font-sans bg-white">
      
      {/* Header */}
      <header className="sticky top-0 z-[60] backdrop-blur-md bg-white/90 border-b border-[#eeeeee]">
        <div className="max-w-[1100px] mx-auto px-5 py-5 flex items-center justify-between">
          
          <a href="#top" className="transition-transform hover:opacity-70">
             <span className="font-serif text-xl tracking-[0.2em] uppercase font-bold">Rian Rest</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {['About', 'Photos', 'Amenities', 'Location'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[10px] font-bold tracking-[0.25em] uppercase hover:text-[#22c55e] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href={waLink} 
              target="_blank" 
              className="bg-[#22c55e] text-white px-6 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-black transition-all shadow-sm"
            >
              BOOK NOW
            </a>
            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="md:hidden text-black text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center gap-12 md:hidden">
          {/* Close Button Inside Overlay */}
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="absolute top-7 right-5 text-black text-3xl p-2"
          >
            ✕
          </button>

          {['About', 'Photos', 'Amenities', 'Location'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-serif tracking-[0.3em] uppercase font-bold hover:text-[#22c55e] transition-colors"
            >
              {item}
            </a>
          ))}
          
          <a 
            href={waLink} 
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 border-b border-black pb-1 text-[10px] font-bold tracking-[0.2em] uppercase"
          >
            Contact via WhatsApp
          </a>
        </div>
      )}

      <main id="top">
        {/* Hero Section */}
        <section className="max-w-[1100px] mx-auto px-5 pt-20 pb-24 grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#999999] mb-4 block">
              Private Apartment • Dehiwala
            </span>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 uppercase tracking-tight">
              A refined stay <br/>in the <span className="italic">heart</span> of city.
            </h1>
            <p className="text-[#666666] text-lg md:text-xl leading-relaxed mb-12 max-w-md font-medium">
              An SLTDA approved sanctuary designed for those who seek tranquility, comfort, and effortless convenience.
            </p>
            <div className="flex gap-8">
              <a href="#photos" className="border-b border-black pb-1 text-[10px] font-bold tracking-[0.2em] uppercase hover:text-[#22c55e] hover:border-[#22c55e] transition-all">
                View Gallery
              </a>
              <a href="#location" className="border-b border-black pb-1 text-[10px] font-bold tracking-[0.2em] uppercase hover:text-[#22c55e] hover:border-[#22c55e] transition-all">
                Explore Location
              </a>
            </div>
          </div>
          <div className="aspect-[4/5] bg-[#f9f9f9] relative overflow-hidden shadow-sm">
            <img src="/images/hero.jpg" alt="Interior" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-[#f9f9f9] py-24">
          <div className="max-w-[1100px] mx-auto px-5">
            <div className="grid md:grid-cols-3 gap-16">
              <div className="space-y-4">
                <h3 className="text-[11px] font-bold tracking-[0.3em] uppercase">Clean & Cozy</h3>
                <p className="text-[#666666] text-sm leading-relaxed">A meticulously maintained private space designed for absolute relaxation and peace of mind.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-[11px] font-bold tracking-[0.3em] uppercase">Prime Location</h3>
                <p className="text-[#666666] text-sm leading-relaxed">Nestled in Dehiwala, minutes away from premium dining and essential travel hubs.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-[11px] font-bold tracking-[0.3em] uppercase">Direct Support</h3>
                <p className="text-[#666666] text-sm leading-relaxed">Seamless communication via WhatsApp for personalized booking and instant assistance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section id="photos" className="py-24 max-w-[1100px] mx-auto px-5 text-center">
          <h2 className="text-[11px] font-bold tracking-[0.4em] uppercase mb-16">The Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((num) => (
              <div 
                key={num} 
                onClick={() => setSelectedImage(`/images/${num}.jpg`)} 
                className="aspect-square bg-[#f9f9f9] cursor-pointer hover:opacity-80 transition-opacity overflow-hidden"
              >
                <img src={`/images/${num}.jpg`} className="w-full h-full object-cover" alt="Gallery" />
              </div>
            ))}
          </div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="py-24 border-t border-[#eeeeee] max-w-[1100px] mx-auto px-5 text-center">
          <h2 className="text-[11px] font-bold tracking-[0.4em] uppercase mb-12">Curated Amenities</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {amenities.map((item) => (
              <div key={item} className="px-6 py-3 border border-[#eeeeee] text-[10px] font-bold tracking-[0.2em] uppercase text-[#666666]">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section id="location" className="py-24 bg-[#f9f9f9]">
          <div className="max-w-[1100px] mx-auto px-5">
            <h2 className="text-[11px] font-bold tracking-[0.4em] uppercase mb-20 text-center">Proximity Guide</h2>
            <div className="grid md:grid-cols-4 gap-y-16 gap-x-12">
              {[
                { name: "KFC / Burger King", dist: "1.1 km", time: "5 MIN" },
                { name: "Cargills / Keells", dist: "500 m", time: "2 MIN" },
                { name: "Dehiwala Beach", dist: "3.0 km", time: "15 MIN" },
                { name: "Airport (BIA)", dist: "42 km", time: "55 MIN" },
              ].map((place, i) => (
                <div key={i} className="border-l border-[#dddddd] pl-8">
                  <p className="text-[9px] font-bold text-[#999999] tracking-[0.2em] mb-3">{place.time}</p>
                  <p className="text-[12px] font-bold tracking-[0.1em] uppercase mb-1">{place.name}</p>
                  <p className="text-[11px] text-[#999999] uppercase">{place.dist}</p>
                </div>
              ))}
            </div>
            <div className="mt-20 h-[400px] bg-white border border-[#eeeeee] p-2 shadow-sm">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15846.50293144558!2d79.8659178!3d6.8143213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b0000000000%3A0x0!2zNsKwNDgnNTEuNSJOIDc5wrA1MicxNy4zIkU!5e0!3m2!1sen!2slk!4v1715000000000!5m2!1sen!2slk" width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 text-center border-t border-[#eeeeee]">
        <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#999999] mb-4">Rian Rest Apartment</p>
        <p className="text-[9px] text-[#cccccc] tracking-[0.2em] uppercase">© {new Date().getFullYear()} — Built by Creovx</p>
      </footer>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-white/98 z-[100] flex items-center justify-center p-8" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} className="max-w-full max-h-[85vh] shadow-2xl" alt="Preview" />
        </div>
      )}
    </div>
  );
}
