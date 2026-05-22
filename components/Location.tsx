import React from 'react';

const Location = () => {
  const proximityItems = [
    { name: "KFC / BK / Pizza Hut", dist: "1 km", time: "5 MIN" },
    { name: "Cargills / Keells", dist: "500 m", time: "2 MIN" },
    { name: "Mountlavinia Beach", dist: "3.2 km", time: "15 MIN" },
    { name: "Dehiwala Zoo", dist: "1.4 km", time: "6 MIN" },
    { name: "Marine Drive", dist: "7 km", time: "14 MIN" },
    { name: "Nearest Hospital", dist: "2.8 km", time: "12 MIN" },
    { name: "CMB Airport", dist: "42 km", time: "55 MIN" },
    { name: "Makumbura Multimodal Centre", dist: "16 km", time: "30 MIN" },
  ];

  return (
    <section id="location" className="py-24 bg-[#F8FAFC] border-t border-black/5">
      <div className="max-w-[1100px] mx-auto px-5">
        <h2 className="text-[12px] font-black tracking-[0.4em] uppercase mb-20 text-center">
          Proximity Guide
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-12">
          {proximityItems.map((place, i) => (
            <div key={i} className="border-l-2 border-black/20 pl-6 md:pl-8">
              <p className="text-[10px] font-black text-black/40 tracking-[0.2em] mb-3">
                {place.time}
              </p>
              <p className="text-[13px] md:text-[14px] font-black tracking-[0.1em] uppercase mb-1 leading-tight">
                {place.name}
              </p>
              <p className="text-[11px] text-black/50 uppercase">
                {place.dist}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-20 h-[400px] md:h-[450px] bg-white border border-black/5 p-2 shadow-sm">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.2!2d79.8!3d6.8!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnMTEuNSJOIDc5wrA1MycyOC4yIkU!5e0!3m2!1sen!2slk!4v1" width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
