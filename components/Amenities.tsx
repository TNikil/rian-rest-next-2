import React from 'react';

const Amenities = () => {
  const list = [
    "Wi-Fi", "Hot water", "Kitchen",
    "Air conditioning", "TV", "Clean bedding", 
    "Family friendly", "Rooftop access"
  ];

  return (
    <section id="amenities" className="py-24 border-t border-black/10 max-w-[1100px] mx-auto px-5 text-center">
      <h2 className="text-[12px] font-black tracking-[0.4em] uppercase mb-12">
        Curated Amenities
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {list.map((item) => (
          <div 
            key={item} 
            className="px-8 py-4 border border-black/10 text-[11px] font-black tracking-[0.2em] uppercase text-[#333333]"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;