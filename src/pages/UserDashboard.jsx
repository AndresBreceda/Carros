import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function UserDashboard() {

  const [carros, setCarros] = useState([]);

  const email = localStorage.getItem("userEmail");

  useEffect(() => {
    const fetchReservas = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) return;

      try {
        const response = await fetch(`http://localhost:5206/api/reservas/usuario/${userId}`);
        const data = await response.json();
        setCarros(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchReservas();
  }, []);


  const primerCarro = carros[0];
  console.log(primerCarro);
  return (
    <div className="bg-background text-on-background min-h-screen flex">
      {/* SideNavBar Integration */}
      <nav className="h-screen w-64 fixed left-0 top-0 bg-[#0E0E0E] flex flex-col py-8 z-50 overflow-y-auto">
        <div className="px-8 mb-12">
          <Link to="/">
            <h1 className="font-headline text-[#E5E2E1] text-2xl tracking-widest">NAOROBI</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-outline mt-1">Concierge Panel</p>
          </Link>
        </div>

        <div className="flex-grow flex flex-col space-y-1">
          {/* Active Tab: Overview (Dashboard) */}
          <Link to="/dashboard" className="bg-[#2A2A2A] text-[#D4AF37] border-l-2 border-[#D4AF37] px-8 py-4 flex items-center space-x-4 transition-all">
            <span className="material-symbols-outlined text-xl">dashboard</span>
            <span className="font-label text-sm uppercase tracking-wider">Overview</span>
          </Link>
          <a href="#" className="text-[#CECECE] px-8 py-4 flex items-center space-x-4 hover:bg-[#1C1B1B] transition-all">
            <span className="material-symbols-outlined text-xl">calendar_month</span>
            <span className="font-label text-sm uppercase tracking-wider">Bookings</span>
          </a>
          <a href="/catalog" className="text-[#CECECE] px-8 py-4 flex items-center space-x-4 hover:bg-[#1C1B1B] transition-all">
            <span className="material-symbols-outlined text-xl">directions_car</span>
            <span className="font-label text-sm uppercase tracking-wider">Vehicles</span>
          </a>
          <a href="#" className="text-[#CECECE] px-8 py-4 flex items-center space-x-4 hover:bg-[#1C1B1B] transition-all">
            <span className="material-symbols-outlined text-xl">analytics</span>
            <span className="font-label text-sm uppercase tracking-wider">Analytics</span>
          </a>
          <a href="#" className="text-[#CECECE] px-8 py-4 flex items-center space-x-4 hover:bg-[#1C1B1B] transition-all">
            <span className="material-symbols-outlined text-xl">settings</span>
            <span className="font-label text-sm uppercase tracking-wider">Settings</span>
          </a>
        </div>

        <div className="mt-auto px-8 pt-8 space-y-4">
          <div className="flex items-center space-x-3 mb-6 p-3 bg-surface-container-low rounded-lg">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxadDhA9hx0QutJPi_D7P-LGOWAlOSBl1fMOmy0xBYfuZFWtiC71frvBV89caN-gmJ_F7abbsRqEUqqYrzqUTs2HyjecZkWFy-9NNvKsAmB18mkpIqekd3OUbr7Y-lmMv-8P2b7lkrYflx50Fu0A728etgAF-s2K5-18lUmyzmhQ17txg9NrSLzCyQggIWwYeROX5SlvM21cUoKmM-3jjn879-O3QCIqFPcmITjnS8ndsJOmljqMF_a4JqDzn84VTPDwrEjoVGHbuM"
                alt="User profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface uppercase tracking-tight">{email}</p>
              <p className="text-[10px] text-outline-variant uppercase">Premium Access</p>
            </div>
          </div>

          <a href="#" className="text-[#CECECE] flex items-center space-x-4 hover:text-[#D4AF37] transition-colors">
            <span className="material-symbols-outlined text-xl">contact_support</span>
            <span className="font-label text-xs uppercase tracking-widest">Support</span>
          </a>
          <Link to="/" className="text-[#CECECE] flex items-center space-x-4 hover:text-[#D4AF37] transition-colors">
            <span className="material-symbols-outlined text-xl">logout</span>
            <span className="font-label text-xs uppercase tracking-widest">Logout</span>
          </Link>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="ml-64 min-h-screen bg-background p-12 w-full">
        {/* Header */}
        <header className="mb-16 flex justify-between items-end">
          <div>
            <h2 className="font-headline text-5xl font-bold tracking-tight mb-2">Welcome back!
            </h2>
            <p className="text-on-surface-variant font-body tracking-wide">Your luxury fleet is ready for your next destination.</p>
          </div>
          <div className="flex space-x-4">
            <div className="px-6 py-3 bg-surface-container-low flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-widest text-outline">Member Since</span>
              <span className="font-bold text-secondary">NOV 2023</span>
            </div>
            <div className="px-6 py-3 bg-surface-container-low flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-widest text-outline">Loyalty Tier</span>
              <span className="font-bold text-on-surface">BLACK DIAMOND</span>
            </div>
          </div>
        </header>

        {/* Current Bookings Section: Editorial Bento */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-headline text-2xl font-bold">Current Bookings</h3>
            <div className="h-[1px] flex-grow mx-8 bg-outline-variant/20"></div>
            <a href="#" className="text-[11px] uppercase tracking-[0.2em] text-secondary font-bold hover:opacity-80">View all rentals</a>
          </div>

          <div className="grid grid-cols-12 gap-8">
            {primerCarro &&
              < div className="col-span-8 bg-surface-container-low group relative overflow-hidden flex flex-col justify-end min-h-[450px]">
                <div className="absolute inset-0 z-0">
                  <img
                    src={primerCarro.carro.imagenUrl}
                    alt={primerCarro.carro.marca + " " + primerCarro.carro.modelo}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                </div>

                <div className="relative z-10 p-12 w-full flex items-end justify-between">
                  <div>
                    <span className="bg-secondary text-on-secondary text-[10px] font-bold px-3 py-1 uppercase tracking-widest mb-4 inline-block">
                      Active Now
                    </span>
                    <h4 className="font-headline text-4xl font-bold mb-2">{primerCarro.carro.marca} {primerCarro.carro.modelo}</h4>
                    <div className="flex space-x-6 text-on-surface-variant text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="material-symbols-outlined text-lg">calendar_today</span>
                        <span className="font-body tracking-wider">{primerCarro.fecha_Inicio}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="material-symbols-outlined text-lg">location_on</span>
                        <span className="font-body tracking-wider">{primerCarro.estado}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#353534]/40 backdrop-blur-[20px] p-6 text-right border-l border-outline-variant/30">
                    <p className="text-[10px] uppercase tracking-widest text-outline mb-1">Daily Rate</p>
                    <p className="text-3xl font-bold text-on-surface">{primerCarro.carro.precio}</p>
                  </div>
                </div>
              </div>
            }

            {/* Specs / Action Sidebar */}
            <div className="col-span-4 space-y-8">
              <div className="bg-surface-container-high p-8 flex flex-col justify-between h-full">
                <div>
                  <h5 className="font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-6">Concierge Details</h5>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-outline-variant/10">
                      <span className="text-sm text-on-surface-variant">Fuel Policy</span>
                      <span className="text-sm font-bold uppercase">Full to Full</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-outline-variant/10">
                      <span className="text-sm text-on-surface-variant">Chauffeur</span>
                      <span className="text-sm font-bold uppercase">Included</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-outline-variant/10">
                      <span className="text-sm text-on-surface-variant">Delivery Site</span>
                      <span className="text-sm font-bold uppercase">LAX Private Terminal</span>
                    </div>
                  </div>
                </div>
                <button className="gold-gradient w-full py-4 text-on-secondary font-bold uppercase tracking-[0.15em] text-xs transition-transform active:scale-95">
                  Manage Reservation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Past Experience & Profile Grid */}
        <section className="grid grid-cols-12 gap-12">
          {/* Past Experiences List */}
          <div className="col-span-7">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-headline text-2xl font-bold">Past Experience</h3>
            </div>
            {carros.map((r) => (
              <div key={r.carro.id} className="bg-surface-container-low p-6 flex items-center space-x-6 hover:bg-surface-container-high transition-colors cursor-pointer">
                <div className="w-24 h-16 bg-surface-container-highest overflow-hidden">
                  <img src={r.carro.imagenUrl} alt={r.carro.marca} className="w-full h-full object-cover opacity-60" />
                </div>
                <div className="flex-grow">
                  <h5 className="font-headline text-lg font-bold">{r.carro.marca} {r.carro.modelo}</h5>
                  <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest">{r.fecha_Inicio} • {r.fecha_Final} • {r.estado}</p>
                </div>
                <div className="text-right">
                  <span className="font-label text-xs text-outline block mb-1">TOTAL</span>
                  <span className="text-lg font-bold text-on-surface">{r.carro.precio}</span>
                </div>
              </div>
            ))}

          </div>

          {/* Edit Profile Section */}
          <div className="col-span-5">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-headline text-2xl font-bold">Profile Details</h3>
            </div>
            <div className="bg-surface-container-low p-10 border-t-2 border-secondary">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] text-outline">Full Name</label>
                  <input type="text" defaultValue={email} className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant/30 px-0 py-3 text-on-surface focus:ring-0 focus:border-secondary transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] text-outline">New Password</label>
                  <input type="text" defaultValue="Your new password" className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant/30 px-0 py-3 text-on-surface focus:ring-0 focus:border-secondary transition-colors" />
                </div>

                <button type="submit" className="bg-on-surface text-background font-bold uppercase tracking-[0.15em] text-xs py-4 px-10 hover:bg-secondary transition-colors">
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer Integration */}
        <footer className="mt-32 w-full py-12 border-t border-[#4D4635]/20 flex flex-col items-center justify-center space-y-6">
          <h1 className="font-headline text-[#E5E2E1] text-xl tracking-widest">NAOROBI</h1>
          <div className="flex space-x-8">
            <a href="https://www.instagram.com" className="font-label text-[11px] tracking-widest uppercase text-[#CECECE] hover:text-[#D4AF37] transition-colors">Instagram</a>
            <a href="https://www.linkedin.com" className="font-label text-[11px] tracking-widest uppercase text-[#CECECE] hover:text-[#D4AF37] transition-colors">LinkedIn</a>
            <a href="#" className="font-label text-[11px] tracking-widest uppercase text-[#CECECE] hover:text-[#D4AF37] transition-colors">Contact</a>
            <a href="#" className="font-label text-[11px] tracking-widest uppercase text-[#CECECE] hover:text-[#D4AF37] transition-colors">Privacy</a>
          </div>
          <p className="font-label text-[11px] tracking-widest uppercase text-[#CECECE]">© 2024 NAOROBI LUXURY. ALL RIGHTS RESERVED.</p>
        </footer>
      </main>
    </div >
  );
}
