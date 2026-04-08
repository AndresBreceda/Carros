import React from 'react';

export default function CarCatalog() {
  return (
    <div className="pt-32 px-12 md:px-24 pb-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div className="max-w-xl">
          <h1 className="font-headline text-5xl md:text-6xl mb-4 italic">The Collection</h1>
          <p className="text-on-surface-variant font-light leading-relaxed">
            Every vehicle in the NAOROBI fleet is meticulously maintained to concourse standards.
            Browse our curated selection and find your perfect drive.
          </p>
        </div>
        <div className="mt-8 md:mt-0 flex gap-4">
          <button className="px-6 py-2 border border-outline-variant text-[10px] uppercase font-label tracking-widest text-[#E5E2E1] hover:bg-[#2A2A2A]">All Models</button>
          <button className="px-6 py-2 bg-surface-container-high text-[10px] uppercase font-label tracking-widest text-[#D4AF37]">SUVs</button>
          <button className="px-6 py-2 bg-surface-container-high text-[10px] uppercase font-label tracking-widest text-[#E5E2E1]">Convertibles</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-surface-container-low group cursor-pointer border-b-2 border-transparent hover:border-secondary transition-all">
            <div className="aspect-[4/3] bg-surface-container-highest overflow-hidden">
               <img src={`https://source.unsplash.com/random/800x600/?luxury,car,${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" alt="" />
            </div>
            <div className="p-8">
              <h3 className="font-headline text-xl mb-4">Signature Model {i}</h3>
              <div className="flex justify-between items-center text-sm font-label uppercase tracking-widest text-on-surface-variant">
                <span>$850 / Day</span>
                <span className="material-symbols-outlined text-secondary">arrow_forward</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
