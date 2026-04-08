import React from 'react';

export default function BookingDetail() {
  return (
    <div className="pt-24 min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-surface-container-low p-12 md:p-24 flex flex-col justify-center">
        <span className="font-label text-secondary uppercase tracking-[0.4em] text-xs mb-4">Reservation</span>
        <h1 className="font-headline text-4xl md:text-5xl mb-8 leading-tight">Create your NAOROBI Experience</h1>
        
        <form className="space-y-6 mt-8">
          <div>
            <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Pickup Date & Time</label>
            <input type="datetime-local" className="w-full bg-surface-container-high border-b-2 border-outline-variant p-4 font-body text-on-background focus:outline-none focus:border-secondary" />
          </div>
          <div>
            <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Return Date & Time</label>
            <input type="datetime-local" className="w-full bg-surface-container-high border-b-2 border-outline-variant p-4 font-body text-on-background focus:outline-none focus:border-secondary" />
          </div>
          <div>
            <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Delivery Location</label>
            <input type="text" placeholder="Enter Airport, Hotel, or Private Address" className="w-full bg-surface-container-high border-b-2 border-outline-variant p-4 font-body text-on-background focus:outline-none focus:border-secondary" />
          </div>
        </form>
      </div>

      <div className="bg-surface p-12 md:p-24 border-l border-outline-variant/20 flex flex-col justify-center">
        <div className="aspect-[16/9] bg-surface-container-highest mb-12">
            {/* Image Placeholder */}
            <div className="w-full h-full flex items-center justify-center text-on-surface-variant">Vehicle Preview</div>
        </div>
        <div className="flex justify-between items-end border-b border-outline-variant/30 pb-6 mb-6">
          <div>
            <h2 className="font-headline text-3xl">Phantom Ghost</h2>
            <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mt-2">Black Diamond</p>
          </div>
          <div className="text-right">
            <span className="font-headline text-2xl text-secondary">$1,200</span>
            <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block"> / Day</span>
          </div>
        </div>
        
        <div className="flex justify-between font-body text-sm mb-12">
          <span className="text-on-surface-variant">Total Estimated (3 Days)</span>
          <span className="text-on-background">$3,600</span>
        </div>
        
        <button className="w-full gold-gradient text-on-secondary py-5 font-label uppercase tracking-[0.2em] text-xs font-bold transition-transform active:scale-95">Confirm Request</button>
      </div>
    </div>
  );
}
