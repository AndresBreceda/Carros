import React from 'react';

export default function UserDashboard() {
  return (
    <div className="pt-32 px-12 md:px-24 min-h-screen bg-surface">
      <div className="flex justify-between items-end border-b border-outline-variant/20 pb-8 mb-12">
        <div>
          <span className="font-label text-[#E5E2E1] uppercase tracking-[0.2em] text-[10px]">Welcome back</span>
          <h1 className="font-headline text-4xl mt-2">Mr. Vaughn</h1>
        </div>
        <button className="font-label text-[10px] uppercase tracking-widest text-secondary border-b border-secondary pb-1">Edit Profile</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="font-headline text-2xl italic mb-6">Active Concierge</h2>
          <div className="bg-surface-container-low p-8 border-l-2 border-secondary flex flex-col md:flex-row gap-8">
            <div className="w-48 h-32 bg-surface-container-highest"></div>
            <div className="flex flex-col justify-between">
              <div>
                <span className="bg-secondary/10 text-secondary font-label uppercase tracking-widest text-[8px] px-2 py-1 rounded-sm">Current Reservation</span>
                <h3 className="font-headline text-xl mt-3 mb-1">Azure Convertible</h3>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Return: Oct 24, 10:00 AM</p>
              </div>
              <div className="flex space-x-4 mt-6">
                <button className="gold-gradient text-on-secondary px-6 py-2 font-label uppercase text-[10px] font-bold">Summon Chauffeur</button>
                <button className="border border-outline-variant px-6 py-2 font-label uppercase text-[10px] hover:bg-surface-container-high transition-colors">Modify Time</button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="font-headline text-2xl italic mb-6">History</h2>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-surface-container-low p-6 flex justify-between items-center">
                 <div>
                   <h4 className="font-body text-sm">Phantom Ghost</h4>
                   <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-wide mt-1">Sept 12, 2024</p>
                 </div>
                 <span className="font-headline text-secondary">$3,600</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
