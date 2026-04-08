import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col">
      {/* Top Navigation Shell */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-12 py-6 bg-[#131313]/60 backdrop-blur-xl">
        <Link to="/" className="text-2xl font-headline tracking-widest text-[#E5E2E1]">NAOROBI</Link>
        <div className="hidden md:flex items-center space-x-12">
          <Link className="font-label uppercase tracking-[0.1em] text-[10px] text-[#E5E2E1] hover:text-[#D4AF37] transition-colors" to="/catalog">Catalog</Link>
          <Link className="font-label uppercase tracking-[0.1em] text-[10px] text-[#E5E2E1] hover:text-[#D4AF37] transition-colors" to="/dashboard">Profile</Link>
          <Link className="font-label uppercase tracking-[0.1em] text-[10px] text-[#E5E2E1] hover:text-[#D4AF37] transition-colors" to="/login">Login</Link>
          <Link to="/booking/1" className="gold-gradient text-on-secondary px-8 py-2 font-label uppercase tracking-widest text-[11px] rounded-sm font-bold">Book Now</Link>
        </div>
        <div className="md:hidden">
          <span className="material-symbols-outlined text-on-background">menu</span>
        </div>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer Shell */}
      <footer className="w-full py-12 border-t border-[#4D4635]/20 bg-[#131313] flex flex-col items-center justify-center space-y-6">
        <div className="font-headline text-2xl tracking-widest text-[#E5E2E1]">NAOROBI LUXURY</div>
        <div className="flex space-x-8">
          <a className="font-label text-[11px] tracking-widest uppercase text-[#CECECE] hover:text-[#D4AF37] transition-colors" href="#">Instagram</a>
          <a className="font-label text-[11px] tracking-widest uppercase text-[#CECECE] hover:text-[#D4AF37] transition-colors" href="#">LinkedIn</a>
          <a className="font-label text-[11px] tracking-widest uppercase text-[#CECECE] hover:text-[#D4AF37] transition-colors" href="#">Contact</a>
          <a className="font-label text-[11px] tracking-widest uppercase text-[#CECECE] hover:text-[#D4AF37] transition-colors" href="#">Privacy</a>
        </div>
        <p className="font-label text-[11px] tracking-widest uppercase text-[#CECECE]/50">© 2024 NAOROBI LUXURY. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
