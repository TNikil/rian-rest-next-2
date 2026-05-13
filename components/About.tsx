import React from 'react';

const About = () => {
  const features = [
    { 
      h: "Clean & Cozy", 
      p: "A meticulously maintained private space designed for absolute relaxation." 
    },
    { 
      h: "Prime Location", 
      p: "Nestled in Dehiwala, minutes away from premium dining and travel hubs." 
    },
    { 
      h: "Direct Support", 
      p: "Seamless communication via WhatsApp for personalized booking." 
    }
  ];

  return (
    <section id="about" className="bg-[#F8FAFC] py-24 md:py-28 border-y border-black/5">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-16">
          {features.map((item, i) => (
            <div key={i} className="space-y-5">
              <h3 className="text-[15px] font-black tracking-[0.25em] uppercase">
                {item.h}
              </h3>
              <p className="text-[#333333] text-base md:text-lg leading-relaxed font-railway text-justify [hyphens:auto]">
                {item.p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;