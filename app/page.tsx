"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const WHATSAPP_NUMBER = "+94764779861";
  const LOCATION_TEXT = "68/D/1/1, Kawdana RD, Dehiwala";
  const DIRECTIONS_LINK = "https://maps.app.goo.gl/fyHXyLoEcC5SiogB6";
  const WA_MESSAGE = "Hi! I would like to book Rian Rest. Please send availability, prices, and details. Thank you!";
  
  const amenities = [
    "Wi-Fi", "Hot water", "Kitchen", 
    "Air conditioning", "TV", "Clean bedding", "Family friendly"
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
    <div className="min-h-screen text-[#eef2f7] selection:bg-[#22c55e]/30 font-sans"
         style={{
           backgroundColor: '#0b0d10',
           backgroundImage: `
             radial-gradient(1200px 600px at 20% -10%, rgba(96,165,250,0.25), transparent 60%),
             radial-gradient(1000px 500px at 90% 0%, rgba(34,197,94,0.18), transparent 55%)
           `
         }}>
      
      {/* Header */}
      <header className="sticky top-0 z-[60] backdrop-blur-md bg-[#0b0d10]/80 border-b border-white/5">
        <div className="max-w-[1100px] mx-auto px-5 py-4 flex items-center justify-between">
          <a href="#top" className="font-extrabold tracking-tight text-lg">Rian Rest</a>
          
          <nav className={`
            ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} 
            md:translate-y-0 md:opacity-100 md:pointer-events-auto
            fixed md:relative top-[72px] md:top-0 left-0 right-0 
            flex flex-col md:flex-row 
            gap-6 md:gap-6 
            p-8 md:p-0 
            bg-[#111318] md:bg-transparent 
            border-b md:border-none border-white/10
            transition-all duration-300 ease-in-out z-[50]
          `}>
            {['About', 'Photos', 'Amenities', 'Location', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMenuOpen(false)} 
                className="text-[#a9b3bf] font-bold text-sm hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
             <a href={waLink} target="_blank" className="bg-[#22c55e] text-black px-4 py-2 rounded-full text-xs font-black hover:scale-105 transition">
              BOOK NOW
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-1.5"
            >
              <span className={`w-5 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="max-w-[1100px] mx-auto px-5">
        {/* Hero Section */}
        <section className="pt-10 pb-10 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="order-2 md:order-1">
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[#a9b3bf] font-bold text-[11px] uppercase tracking-wider">Apartment • Dehiwala</span>
            <h1 className="text-4xl md:text-6xl font-black mt-4 mb-4 leading-tight">Comfortable stay at <span className="text-[#22c55e]">Rian Rest</span></h1>
            <p className="text-[#a9b3bf] leading-relaxed text-base md:text-lg max-w-md">A clean, cozy apartment for couples, families, and solo travelers. Check availability and rates instantly via WhatsApp.</p>
            
            <div className="flex gap-3 mt-8">
              <a href="#photos" className="bg-white/5 border border-white/10 px-6 py-3 rounded-full font-bold text-sm hover:bg-white/10 transition">Photos</a>
              <a href={waLink} target="_blank" className="bg-[#22c55e]/10 border border-[#22c55e]/30 px-6 py-3 rounded-full font-bold text-sm text-[#22c55e] hover:bg-[#22c55e]/20 transition">WhatsApp</a>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-4 mt-10">
              {[{t:'Check-in', v:'Flexible'}, {t:'Stay', v:'Daily'}, {t:'For', v:'Families'}].map(s=>(
                <div key={s.t} className="p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm text-center">
                  <p className="text-[#a9b3bf] text-[10px] font-black uppercase tracking-tighter mb-1">{s.t}</p>
                  <p className="text-xs md:text-sm font-bold">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative rounded-[32px] border border-white/10 overflow-hidden shadow-2xl h-[300px] md:h-[500px]">
             <img src="/images/hero.jpg" alt="Hero" className="w-full h-full object-cover" />
             <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md">
              <p className="font-bold text-sm">Instant Reservation</p>
              <p className="text-[#a9b3bf] text-xs">Chat with us for best rates</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 border-t border-white/5">
            <h2 className="text-3xl font-black mb-6">About Rian Rest</h2>
            <p className="text-[#a9b3bf] leading-relaxed mb-8 text-lg">
              Rian Rest is a private apartment stay designed for comfort and convenience. 
              Close to key locations, ideal for relaxing after travel or work. (SLTDA Approved)
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 border border-white/5 bg-white/5 rounded-3xl">
                <h3 className="text-lg font-bold mb-2">Clean & Cozy</h3>
                <p className="text-[#a9b3bf] text-xs leading-relaxed">A well-maintained, private space designed for your comfort and relaxation.</p>
              </div>
              
              <div className="p-6 border border-white/5 bg-white/5 rounded-3xl">
                <h3 className="text-lg font-bold mb-2">Great Location</h3>
                <p className="text-[#a9b3bf] text-xs leading-relaxed">Located in Dehiwala, just minutes away from KFC, Burger King, and Pizza Hut for easy dining.</p>
              </div>
              
              <div className="p-6 border border-white/5 bg-white/5 rounded-3xl">
                <h3 className="text-lg font-bold mb-2">Quick Support</h3>
                <p className="text-[#a9b3bf] text-xs leading-relaxed">Skip the wait—message us directly on WhatsApp for instant booking updates any time.</p>
              </div>
            </div>
        </section>

        {/* Photos Grid */}
        <section id="photos" className="py-12">
          <h2 className="text-3xl font-black mb-6">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map(num => (
              <div key={num} onClick={() => setSelectedImage(`/images/${num}.jpg`)} className="aspect-square border border-white/5 bg-white/5 rounded-2xl overflow-hidden cursor-pointer active:scale-95 transition-transform">
                <img src={`/images/${num}.jpg`} className="h-full w-full object-cover" alt={`Gallery ${num}`} />
              </div>
            ))}
          </div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="py-12">
          <h2 className="text-3xl font-black mb-6">Amenities</h2>
          <div className="flex flex-wrap gap-2">
            {amenities.map(item => (
              <div key={item} className="px-5 py-3 rounded-2xl border border-white/5 bg-white/5 font-bold text-xs text-[#a9b3bf]">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section id="location" className="py-12">
          <h2 className="text-3xl font-black mb-4">Location</h2>
          <div className="rounded-[32px] border border-white/10 overflow-hidden h-[350px] bg-zinc-900 mb-4">
            <iframe src="https://www.google.com/maps?q=68/D/1/1,+Kawdana+RD,+Dehiwala&output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
          </div>
          <a href={DIRECTIONS_LINK} target="_blank" className="block text-center w-full bg-white/5 border border-white/10 py-4 rounded-2xl font-bold text-sm">Open in Google Maps</a>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12 mb-20">
            <h2 className="text-3xl font-black mb-6 text-center">Contact Us</h2>
            <div className="max-w-xl mx-auto p-8 border border-white/5 bg-white/5 rounded-[40px] text-center">
              <p className="text-[#a9b3bf] mb-6">Message us on WhatsApp and we’ll reply with availability and rates.</p>
              <a href={waLink} target="_blank" className="inline-block bg-[#22c55e] text-black px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition shadow-xl shadow-[#22c55e]/20">
                CHAT ON WHATSAPP
              </a>
              <div className="mt-8 pt-8 border-t border-white/5 text-sm text-[#a9b3bf]">
                <p className="mb-2 font-bold text-white">Rian Rest Apartment</p>
                <p>{LOCATION_TEXT}</p>
              </div>
            </div>
        </section>
      </main>

      <footer className="py-10 border-t border-white/5 text-center text-[#a9b3bf] text-xs">
        <p>© {new Date().getFullYear()} Rian Rest. Built by TNikil.</p>
      </footer>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-5" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} className="max-w-full max-h-[80vh] rounded-2xl" alt="Preview" />
          <p className="fixed bottom-10 text-white font-bold">Tap anywhere to close</p>
        </div>
      )}

      {/* Floating WhatsApp - Fixed for Mobile */}
      <a href={waLink} target="_blank" className="md:hidden fixed right-6 bottom-6 w-14 h-14 bg-[#22c55e] rounded-full flex items-center justify-center shadow-2xl z-[50] active:scale-90 transition">
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-black"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.893 9.885z"/></svg>
      </a>
    </div>
  );
}