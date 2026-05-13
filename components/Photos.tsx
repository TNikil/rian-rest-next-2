import React, { useState } from 'react';

const Photos = () => {
  const galleryImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [selectedImage, setSelectedImage] = useState<string>("/images/1.jpg");

  return (
    <section id="photos" className="py-20 md:py-32 bg-[#F0F4F7]">
      <div className="max-w-[1100px] mx-auto px-5">
        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-[1fr_350px] gap-12 items-start">
          <div className="aspect-[16/10] bg-white p-3 shadow-2xl overflow-hidden">
            <img 
              src={selectedImage} 
              alt="Main Gallery" 
              className="w-full h-full object-cover transition-all duration-500" 
            />
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-[12px] font-black tracking-[0.4em] uppercase text-[#222222]">
              The Gallery
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {galleryImages.map((num) => (
                <div 
                  key={num} 
                  onClick={() => setSelectedImage(`/images/${num}.jpg`)} 
                  className="aspect-square cursor-pointer overflow-hidden transition-all duration-300 border-2"
                  style={{ 
                    borderColor: selectedImage === `/images/${num}.jpg` ? '#2D3648' : 'transparent' 
                  }}
                >
                  <img src={`/images/${num}.jpg`} className="w-full h-full object-cover" alt={`Room ${num}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <h2 className="text-[12px] font-black tracking-[0.4em] uppercase text-[#222222] mb-6">
            The Gallery
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {galleryImages.map((num) => (
              <div key={num} className="aspect-square bg-white shadow-md overflow-hidden rounded-sm">
                <img src={`/images/${num}.jpg`} className="w-full h-full object-cover" alt={`Room ${num}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photos;