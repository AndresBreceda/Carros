import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className="bg-background text-on-background min-h-screen flex overflow-hidden">
      {/* SideNavBar Component */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-[#0E0E0E] flex flex-col py-8 z-40">
        <div className="px-8 mb-12">
          <Link to="/">
            <span className="font-headline text-2xl tracking-widest text-[#E5E2E1]">NAOROBI</span>
          </Link>
          <div className="mt-2">
            <p className="font-label text-[10px] uppercase tracking-wider text-[#D4AF37]">Concierge Panel</p>
            <p className="font-label text-[8px] uppercase tracking-[0.2em] text-[#CECECE] opacity-50">Premium Access</p>
          </div>
        </div>

        <nav className="flex-grow flex flex-col space-y-1">
          <a href="#" className="text-[#CECECE] px-6 py-4 hover:bg-[#1C1B1B] transition-all flex items-center gap-4 group">
            <span className="material-symbols-outlined text-xl">dashboard</span>
            <span className="font-label text-xs uppercase tracking-wider">Overview</span>
          </a>
          <a href="#" className="text-[#CECECE] px-6 py-4 hover:bg-[#1C1B1B] transition-all flex items-center gap-4 group">
            <span className="material-symbols-outlined text-xl">directions_car</span>
            <span className="font-label text-xs uppercase tracking-wider">Vehicles</span>
          </a>
          {/* Active Tab: New Listing */}
          <Link to="/admin" className="bg-[#2A2A2A] text-[#D4AF37] border-l-2 border-[#D4AF37] px-6 py-4 flex items-center gap-4">
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
            <span className="font-label text-xs uppercase tracking-wider">New Listing</span>
          </Link>
          <a href="#" className="text-[#CECECE] px-6 py-4 hover:bg-[#1C1B1B] transition-all flex items-center gap-4 group">
            <span className="material-symbols-outlined text-xl">analytics</span>
            <span className="font-label text-xs uppercase tracking-wider">Analytics</span>
          </a>
        </nav>

        <div className="px-6 mt-auto flex flex-col space-y-1">
          <a href="#" className="text-[#CECECE] py-3 hover:text-[#D4AF37] transition-colors flex items-center gap-4">
            <span className="material-symbols-outlined text-xl">contact_support</span>
            <span className="font-label text-xs uppercase tracking-wider">Support</span>
          </a>
          <Link to="/" className="text-[#CECECE] py-3 hover:text-[#D4AF37] transition-colors flex items-center gap-4">
            <span className="material-symbols-outlined text-xl">logout</span>
            <span className="font-label text-xs uppercase tracking-wider">Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow ml-64 min-h-screen overflow-y-auto w-full p-12 lg:px-24">
        {/* Header Section */}
        <header className="mb-16">
          <h1 className="font-headline text-5xl font-bold tracking-tight text-on-background mb-4">Create New Listing</h1>
          <p className="font-body text-on-surface-variant max-w-2xl leading-relaxed">
            Expand the fleet with a new automotive masterpiece. Ensure all technical specifications are accurate to maintain the concierge standards.
          </p>
        </header>

        {/* Form Section */}
        <form className="grid grid-cols-12 gap-12 items-start" onSubmit={(e) => e.preventDefault()}>
          {/* Left Column: Primary Details */}
          <div className="col-span-12 lg:col-span-7 space-y-12">
            <section className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                {/* Car Brand */}
                <div className="flex flex-col space-y-3">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Car Brand</label>
                  <input type="text" placeholder="e.g. Rolls-Royce" className="bg-surface-container-high border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-surface py-4 px-0 transition-all outline-none bg-transparent" />
                </div>
                {/* Model Name */}
                <div className="flex flex-col space-y-3">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Model Name</label>
                  <input type="text" placeholder="e.g. Phantom VIII" className="bg-surface-container-high border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-surface py-4 px-0 transition-all outline-none bg-transparent" />
                </div>
              </div>

              {/* Daily Rate */}
              <div className="flex flex-col space-y-3">
                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Daily Rate ($)</label>
                <div className="relative">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 text-secondary font-headline text-xl">$</span>
                  <input type="number" placeholder="2,500" className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-surface py-4 pl-6 transition-all outline-none bg-transparent font-headline text-2xl" />
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col space-y-3">
                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Vehicle Description</label>
                <textarea rows="4" placeholder="Describe the driving experience, interior craftsmanship, and unique features..." className="bg-surface-container-high border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-surface py-4 px-0 transition-all outline-none bg-transparent resize-none leading-relaxed"></textarea>
              </div>
            </section>

            {/* Technical Specs Bento */}
            <section className="bg-surface-container-low p-8 rounded-lg space-y-8">
              <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
                <h3 className="font-headline text-lg text-on-surface">Technical Specifications</h3>
                <span className="material-symbols-outlined text-secondary">tune</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div className="flex flex-col space-y-2">
                  <label className="font-label text-[9px] uppercase tracking-widest text-outline">Horsepower (HP)</label>
                  <input type="text" placeholder="563" className="bg-transparent border-none border-b border-outline-variant/40 focus:border-secondary focus:ring-0 text-on-surface py-2 text-sm" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-label text-[9px] uppercase tracking-widest text-outline">0-100 km/h (s)</label>
                  <input type="text" placeholder="5.3" className="bg-transparent border-none border-b border-outline-variant/40 focus:border-secondary focus:ring-0 text-on-surface py-2 text-sm" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-label text-[9px] uppercase tracking-widest text-outline">Top Speed (km/h)</label>
                  <input type="text" placeholder="250" className="bg-transparent border-none border-b border-outline-variant/40 focus:border-secondary focus:ring-0 text-on-surface py-2 text-sm" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-label text-[9px] uppercase tracking-widest text-outline">Engine Type</label>
                  <input type="text" placeholder="6.75L V12" className="bg-transparent border-none border-b border-outline-variant/40 focus:border-secondary focus:ring-0 text-on-surface py-2 text-sm" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-label text-[9px] uppercase tracking-widest text-outline">Transmission</label>
                  <input type="text" placeholder="8-Speed Auto" className="bg-transparent border-none border-b border-outline-variant/40 focus:border-secondary focus:ring-0 text-on-surface py-2 text-sm" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-label text-[9px] uppercase tracking-widest text-outline">Fuel Type</label>
                  <input type="text" placeholder="Petrol" className="bg-transparent border-none border-b border-outline-variant/40 focus:border-secondary focus:ring-0 text-on-surface py-2 text-sm" />
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Media & Actions */}
          <div className="col-span-12 lg:col-span-5 space-y-8 sticky top-12">
            {/* Image Upload Area */}
            <div className="flex flex-col space-y-4">
              <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Gallery Assets</label>
              <div className="relative group">
                <div className="w-full aspect-[4/3] border-2 border-dashed border-outline-variant rounded-lg flex flex-col items-center justify-center space-y-4 hover:border-secondary transition-colors cursor-pointer bg-surface-container-lowest overflow-hidden">
                  {/* Placeholder Background Suggestion */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfVyZ4rknke5CwpF1sBxhQhDBCn25Oe4P1FRszwzIGjx-BYoBSyq8XUOML2QTq1h_KP_DpuWXy2-jNd9llVA8cQidetqFqsV48xiuJfiVGWQ0wrekK7Iz75h0yTsN_TRV8h2M3WwvWjWJcAsrAJQ9m7OYZQKmBCySyCpzFNPDfYfeSx2b3n_2IYHekCf9vpCpS3YxZjTmwlI3ELRWvI-TGyv0FdvflvpWkUiLAVPFgYPn_Rt1Jx2GbZ56A9NKlxBUBywYHmjWUtPOV" alt="Placeholder" className="w-full h-full object-cover grayscale" />
                  </div>
                  <span className="material-symbols-outlined text-4xl text-outline-variant group-hover:text-secondary transition-colors">add_photo_alternate</span>
                  <div className="text-center px-8 z-10">
                    <p className="font-label text-[11px] uppercase tracking-widest text-on-surface">Upload Hero Image</p>
                    <p className="text-[10px] text-outline mt-1 italic">High-resolution RAW or JPEG preferred</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Category & Tags */}
            <div className="bg-surface-container-low p-6 rounded-lg space-y-6">
              <div className="flex flex-col space-y-3">
                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-outline">Fleet Category</label>
                <select className="bg-surface-container-high border-none border-b border-outline-variant text-on-surface text-sm py-2 focus:ring-0 focus:border-secondary appearance-none cursor-pointer">
                  <option>Ultra-Luxury Sedan</option>
                  <option>Exotic Supercar</option>
                  <option>Premium SUV</option>
                  <option>Vintage Classic</option>
                </select>
              </div>

              <div className="flex flex-col space-y-3">
                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-outline">Availability Status</label>
                <div className="flex gap-4">
                  <button type="button" className="flex-1 py-3 bg-surface-container-highest border border-secondary text-secondary rounded-sm font-label text-[10px] uppercase tracking-widest">Active</button>
                  <button type="button" className="flex-1 py-3 bg-surface-container-highest border border-outline-variant/30 text-outline rounded-sm font-label text-[10px] uppercase tracking-widest">Maintenance</button>
                </div>
              </div>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col gap-4 pt-8">
              <button type="submit" className="w-full py-5 gold-gradient text-on-secondary font-label text-xs font-bold uppercase tracking-[0.2em] rounded-sm shadow-xl shadow-secondary/10 hover:brightness-110 transition-all">
                Publish Listing
              </button>
              <button type="button" className="w-full py-5 bg-transparent border border-outline-variant/30 text-on-surface font-label text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-white/5 transition-colors">
                Save as Draft
              </button>
            </div>
          </div>
        </form>

        {/* Page Footer */}
        <footer className="mt-32 pt-12 border-t border-outline-variant/10 flex flex-col items-center justify-center space-y-6">
          <span className="font-headline text-xl tracking-widest text-[#E5E2E1] opacity-40">NAOROBI</span>
          <div className="flex gap-8">
            <a href="#" className="font-label text-[10px] tracking-widest uppercase text-outline hover:text-secondary transition-colors">Instagram</a>
            <a href="#" className="font-label text-[10px] tracking-widest uppercase text-outline hover:text-secondary transition-colors">LinkedIn</a>
            <a href="#" className="font-label text-[10px] tracking-widest uppercase text-outline hover:text-secondary transition-colors">Contact</a>
            <a href="#" className="font-label text-[10px] tracking-widest uppercase text-outline hover:text-secondary transition-colors">Privacy</a>
          </div>
          <p className="font-label text-[9px] tracking-widest uppercase text-outline/50">© 2024 NAOROBI LUXURY. ALL RIGHTS RESERVED.</p>
        </footer>
      </main>

      {/* Floating Tooltip / Status (Optional UI refinement) */}
      <div className="fixed bottom-8 right-8 bg-[#353534]/40 backdrop-blur-[20px] border border-outline-variant/20 px-6 py-3 rounded-full flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
        <span className="font-label text-[10px] uppercase tracking-widest text-on-surface">Auto-saving Draft...</span>
      </div>
    </div>
  );
}
