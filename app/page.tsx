"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const WHATSAPP_NUMBER = "+94764779861";
  const LOCATION_TEXT = "68/D/1/1, Kawdana Road, Dehiwala, Sri Lanka";
  const DIRECTIONS_LINK = "https://maps.app.goo.gl/fyHXyLoEcC5SiogB6";
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
    <div className="min-h-screen text-white selection:bg-white/30 font-sans bg-black">
      
      {/* Header with deep green gradient glow */}
      <header className="sticky top-0 z-[60] backdrop-blur-md bg-black/80 border-b border-white/10"
        style={{
          boxShadow: '0 0 40px rgba(34, 197, 94, 0.15)'
        }}
      >
        <div className="max-w-[1100px] mx-auto px-5 py-4 flex items-center justify-between relative">
          
          <a href="#top" className="transition-transform hover:scale-105 active:scale-95">
            <img 
              src="/logo.png" 
              alt="Rian Rest Logo" 
              className="h-8 md:h-10 w-auto object-contain brightness-0 invert" 
            />
          </a>

          <nav
            className={`
              ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} 
              md:translate-y-0 md:opacity-100 md:pointer-events-auto
              fixed md:relative top-[72px] md:top-0 left-0 right-0 
              flex flex-col md:flex-row items-center justify-center md:justify-start
              gap-8 md:gap-6 p-12 md:p-0 bg-black/95 backdrop-blur-xl md:bg-transparent md:backdrop-blur-0
              border-b md:border-none border-white/10 transition-all duration-300 ease-in-out z-[50] min-h-[60vh] md:min-h-0
            `}
          >
            {['About', 'Photos', 'Amenities', 'Location', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-white font-black text-2xl md:text-sm hover:text-[#22c55e] transition-colors text-center"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Green Book Now button with subtle glow */}
            <a
              href={waLink}
              target="_blank"
              className="bg-[#22c55e] text-black px-4 py-2 rounded-full text-xs font-black hover:scale-105 hover:bg-white hover:text-[#22c55e] transition shadow-lg"
              style={{
                boxShadow: '0 0 15px rgba(34, 197, 94, 0.4)'
              }}
            >
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

      <main id="top" className="max-w-[1100px] mx-auto px-5 relative">

        {/* Deep Green gradient in the hero background area */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#22c55e] opacity-10 blur-[120px] rounded-full pointer-events-none z-0"></div>

        {/* Hero Section */}
        <section className="pt-10 pb-10 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center relative z-10">
          <div className="order-2 md:order-1">
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/10 text-white font-bold text-[11px] uppercase tracking-wider">
              Apartment • Dehiwala
            </span>

            <h1 className="text-4xl md:text-6xl font-black mt-4 mb-4 leading-tight text-white">
              Comfortable stay at <span className="text-[#22c55e] drop-shadow-sm">Rian Rest</span>
            </h1>

            <p className="text-white/70 leading-relaxed text-base md:text-xl max-w-md font-bold">
              A clean, cozy apartment for families and solo travelers. SLTDA Approved sanctuary.
            </p>

            <div className="flex gap-3 mt-8">
              <a
                href="#photos"
                className="bg-white px-6 py-3 rounded-full font-bold text-sm text-black hover:bg-[#22c55e] hover:text-white transition shadow-lg"
              >
                Photos
              </a>

              <a
                href={waLink}
                target="_blank"
                className="bg-white px-6 py-3 rounded-full font-bold text-sm text-black hover:bg-[#22c55e] hover:text-white transition shadow-lg"
              >
                WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-4 mt-10">
              {[{ t: 'Check-in', v: 'Flexible' }, { t: 'Stay', v: 'Daily' }, { t: 'For', v: 'Families' }].map((s) => (
                <div
                  key={s.t}
                  className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center"
                >
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-tighter mb-1">
                    {s.t}
                  </p>
                  <p className="text-xs md:text-sm font-bold text-white">{s.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 relative rounded-[32px] border border-white/10 overflow-hidden shadow-2xl h-[300px] md:h-[500px]">
            <img src="/images/hero.jpg" alt="Hero" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 border-t border-white/10">
          <h2 className="text-3xl font-black mb-6 text-white">About Rian Rest</h2>
          <p className="text-white font-bold leading-relaxed mb-8 text-lg md:text-xl">
            Rian Rest is a private apartment stay designed for comfort and convenience.
            Close to key locations, ideal for relaxing after travel or work. (SLTDA Approved)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 border border-white/10 bg-white/5 rounded-3xl">
              <h3 className="text-lg font-bold mb-2 text-white">Clean & Cozy</h3>
              <p className="text-white/50 text-xs leading-relaxed font-semibold">
                A well-maintained, private space designed for your comfort and relaxation.
              </p>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-3xl">
              <h3 className="text-lg font-bold mb-2 text-white">Great Location</h3>
              <p className="text-white/50 text-xs leading-relaxed font-semibold">
                Located in Dehiwala, just minutes away from KFC, Burger King, and Pizza Hut for easy dining.
              </p>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-3xl">
              <h3 className="text-lg font-bold mb-2 text-white">Quick Support</h3>
              <p className="text-white/50 text-xs leading-relaxed font-semibold">
                Message us directly on WhatsApp for instant booking updates any time.
              </p>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section id="photos" className="py-12 border-t border-white/10">
          <h2 className="text-3xl font-black mb-6 text-white">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((num) => (
              <div
                key={num}
                onClick={() => setSelectedImage(`/images/${num}.jpg`)}
                className="aspect-square border border-white/10 bg-white/5 rounded-2xl overflow-hidden cursor-pointer active:scale-95 transition-transform shadow-sm hover:shadow-md"
              >
                <img src={`/images/${num}.jpg`} className="h-full w-full object-cover" alt={`Gallery ${num}`} />
              </div>
            ))}
          </div>
        </section>

        {/* Amenities Section */}
        <section id="amenities" className="py-12 border-t border-white/10">
          <h2 className="text-3xl font-black mb-6 text-white">Amenities</h2>
          <div className="flex flex-wrap gap-2">
            {amenities.map((item) => (
              <div key={item} className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 font-bold text-xs text-white/60">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-12 border-t border-white/10">
          <h2 className="text-3xl font-black mb-6 text-white">Location & Travel</h2>
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
            <div className="space-y-4">
              <div className="rounded-[32px] border border-white/10 overflow-hidden h-[450px] bg-white/5 shadow-inner">
               <iframe src="https://www.google.com/maps?q=68/D/1/1,+Kawdana+RD,+Dehiwala&output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
              </div>
              <a href={DIRECTIONS_LINK} target="_blank" className="block text-center w-full bg-white/5 border border-white/10 py-4 rounded-2xl font-bold text-sm text-white hover:bg-white/10 transition">
                Open in Google Maps
              </a>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-[32px] shadow-lg">
              <h3 className="text-xl font-black mb-6 text-white flex items-center gap-2">
                <span className="text-2xl">📍</span> Proximity Guide
              </h3>
              <div className="space-y-6">
                {[
                  // Restaurants (Grouped)
                  { name: "KFC Dehiwala", dist: "1.1 km", time: "5 min", icon: "🍗" },
                  { name: "Burger King", dist: "1.1 km", time: "5 min", icon: "🍔" },
                  { name: "Pizza Hut", dist: "1.2 km", time: "5 min", icon: "🍕" },
                  
                  // Supermarkets (Grouped)
                  { name: "Cargills Food City", dist: "500 m", time: "2 min", icon: "🛒" },
                  { name: "Keells Super", dist: "750 m", time: "3 min", icon: "🛍️" },

                  // Hospitals (Grouped)
                  { name: "Kalubowila Hospital", dist: "2.8 km", time: "12 min", icon: "🏥" },
                  { name: "Asiri Hospital", dist: "4.5 km", time: "15 min", icon: "🏥" },
                  { name: "Lanka Hospital", dist: "4.8 km", time: "16 min", icon: "🏥" },
                  { name: "Nawaloka Hospital", dist: "9.5 km", time: "30 min", icon: "🏥" },

                  // Landmarks & Travel
                  { name: "Dehiwala Zoo", dist: "1.4 km", time: "6 min", icon: "🦁" },
                  { name: "Bellanwila Temple", dist: "2.5 km", time: "8 min", icon: "🛕" },
                  { name: "Dehiwala Beach", dist: "3.0 km", time: "15 min", icon: "🏖️" },
                  { name: "Galle Face Green", dist: "8.5 km", time: "25 min", icon: "🌊" },
                  { name: "Gangaramaya Temple", dist: "9.0 km", time: "28 min", icon: "🛕" },
                  { name: "Makumbura Multimodal", dist: "13.5 km", time: "35 min", icon: "🚌" },
                  { name: "Katunayake Airport", dist: "42 km", time: "55 min", icon: "✈️" },
                ].map((place, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <span className="text-xl group-hover:scale-125 transition-transform">{place.icon}</span>
                      <div>
                        <p className="font-bold text-sm text-white">{place.name}</p>
                        <p className="text-[10px] font-black text-white/40 uppercase tracking-tighter">{place.dist}</p>
                      </div>
                    </div>
                    <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px] font-black text-white">{place.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 mb-20 relative">
          
          <div className="max-w-xl mx-auto p-10 border border-white/10 bg-white/5 backdrop-blur-md rounded-[48px] text-center shadow-xl relative z-10">
            <h2 className="text-3xl font-black mb-4 text-white">Ready to visit?</h2>
            <p className="text-white/50 mb-8 font-semibold">
              Message us on WhatsApp and we’ll reply with availability and rates.
            </p>
            <a
              href={waLink}
              target="_blank"
              className="inline-block bg-[#22c55e] text-white px-12 py-5 rounded-full font-black text-lg hover:scale-105 hover:bg-white hover:text-[#22c55e] transition shadow-xl"
            >
              CHAT ON WHATSAPP
            </a>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="font-bold text-white italic">Rian Rest Apartment</p>
              <p className="font-medium text-sm text-white/50">{LOCATION_TEXT}</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-10 border-t border-white/10 text-center text-white/20 text-xs font-bold">
        <p>© {new Date().getFullYear()} Rian Rest. Built by Creovx.</p>
      </footer>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-5" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} className="max-w-full max-h-[80vh] rounded-2xl border-4 border-white/10" alt="Preview" />
          <p className="fixed bottom-10 text-white font-bold uppercase tracking-widest text-xs">Tap anywhere to close</p>
        </div>
      )}

      {/* Floating WhatsApp Mobile Icon */}
      <a href={waLink} target="_blank" className="md:hidden fixed right-6 bottom-6 w-14 h-14 bg-[#22c55e] rounded-full flex items-center justify-center shadow-2xl z-[50] border-2 border-white/20">
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.893 9.885z"/>
        </svg>
      </a>

    </div>
  );
}
