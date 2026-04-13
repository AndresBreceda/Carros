import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:5062';

export default function AdminDashboard() {
  const [form, setForm] = useState({
    marca: '',
    modelo: '',
    año: '',
    precio: '',
    tipo_Motor: '',
    transmision: '',
    tipo_Combustible: '',
    imagenUrl: '',
  });

  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const response = await fetch(`${API_URL}/api/Carros`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          marca: form.marca,
          modelo: form.modelo,
          año: parseInt(form.año) || 0,
          precio: parseFloat(form.precio) || 0,
          tipo_Motor: form.tipo_Motor,
          transmision: form.transmision,
          tipo_Combustible: form.tipo_Combustible,
          imagenUrl: form.imagenUrl,
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || `Error ${response.status}`);
      }

      setStatus('success');
      setForm({
        marca: '',
        modelo: '',
        año: '',
        precio: '',
        tipo_Motor: '',
        transmision: '',
        tipo_Combustible: '',
        imagenUrl: '',
      });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

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
          <a href="/catalog" className="text-[#CECECE] px-6 py-4 hover:bg-[#1C1B1B] transition-all flex items-center gap-4 group">
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

        {/* Feedback Banners */}
        {status === 'success' && (
          <div className="mb-8 flex items-center gap-4 bg-[#1a2e1a] border border-green-700/40 text-green-400 px-6 py-4 rounded-sm">
            <span className="material-symbols-outlined text-xl">check_circle</span>
            <span className="font-label text-xs uppercase tracking-widest">Carro publicado exitosamente</span>
          </div>
        )}
        {status === 'error' && (
          <div className="mb-8 flex items-center gap-4 bg-[#2e1a1a] border border-red-700/40 text-red-400 px-6 py-4 rounded-sm">
            <span className="material-symbols-outlined text-xl">error</span>
            <span className="font-label text-xs uppercase tracking-widest">Error: {errorMsg}</span>
          </div>
        )}

        {/* Form Section */}
        <form className="grid grid-cols-12 gap-12 items-start" onSubmit={handleSubmit}>
          {/* Left Column: Primary Details */}
          <div className="col-span-12 lg:col-span-7 space-y-12">
            <section className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                {/* Marca */}
                <div className="flex flex-col space-y-3">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Car Brand</label>
                  <input
                    id="marca"
                    name="marca"
                    type="text"
                    value={form.marca}
                    onChange={handleChange}
                    placeholder="e.g. Rolls-Royce"
                    required
                    className="bg-transparent border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-surface py-4 px-0 transition-all outline-none"
                  />
                </div>
                {/* Modelo */}
                <div className="flex flex-col space-y-3">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Model Name</label>
                  <input
                    id="modelo"
                    name="modelo"
                    type="text"
                    value={form.modelo}
                    onChange={handleChange}
                    placeholder="e.g. Phantom VIII"
                    required
                    className="bg-transparent border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-surface py-4 px-0 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {/* Año */}
                <div className="flex flex-col space-y-3">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Year (Año)</label>
                  <input
                    id="año"
                    name="año"
                    type="number"
                    value={form.año}
                    onChange={handleChange}
                    placeholder="e.g. 2024"
                    required
                    className="bg-transparent border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-surface py-4 px-0 transition-all outline-none"
                  />
                </div>
                {/* Precio */}
                <div className="flex flex-col space-y-3">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Daily Rate ($)</label>
                  <div className="relative">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 text-secondary font-headline text-xl">$</span>
                    <input
                      id="precio"
                      name="precio"
                      type="number"
                      value={form.precio}
                      onChange={handleChange}
                      placeholder="2500"
                      required
                      className="w-full bg-transparent border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-surface py-4 pl-6 transition-all outline-none font-headline text-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Image URL */}
              <div className="flex flex-col space-y-3">
                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Image URL</label>
                <input
                  id="imagenUrl"
                  name="imagenUrl"
                  type="url"
                  value={form.imagenUrl}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="bg-transparent border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-on-surface py-4 px-0 transition-all outline-none"
                />
              </div>
            </section>

          </div>

          {/* Right Column: Actions */}
          <div className="col-span-12 lg:col-span-5 space-y-8 sticky top-12">
            {/* Image Preview */}
            <div className="flex flex-col space-y-4">
              <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Gallery Preview</label>
              <div className="w-full aspect-[4/3] border-2 border-dashed border-outline-variant rounded-lg flex flex-col items-center justify-center overflow-hidden bg-surface-container-lowest">
                {form.imagenUrl ? (
                  <img src={form.imagenUrl} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center space-y-4 opacity-40">
                    <span className="material-symbols-outlined text-4xl text-outline-variant">add_photo_alternate</span>
                    <p className="font-label text-[11px] uppercase tracking-widest text-on-surface">Enter URL to preview</p>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col gap-4 pt-4">
              <button
                id="btn-publish"
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-5 gold-gradient text-on-secondary font-label text-xs font-bold uppercase tracking-[0.2em] rounded-sm shadow-xl shadow-secondary/10 hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
                    Publishing...
                  </>
                ) : (
                  'Publish Listing'
                )}
              </button>
              <button
                type="button"
                onClick={() => setForm({ marca: '', modelo: '', año: '', precio: '', tipo_Motor: '', transmision: '', tipo_Combustible: '', imagenUrl: '' })}
                className="w-full py-5 bg-transparent border border-outline-variant/30 text-on-surface font-label text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-white/5 transition-colors"
              >
                Clear Form
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

      {/* Status Indicator */}
      <div className="fixed bottom-8 right-8 bg-[#353534]/40 backdrop-blur-[20px] border border-outline-variant/20 px-6 py-3 rounded-full flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${status === 'loading' ? 'bg-yellow-400 animate-pulse' : status === 'success' ? 'bg-green-400' : status === 'error' ? 'bg-red-400' : 'bg-secondary animate-pulse'}`}></div>
        <span className="font-label text-[10px] uppercase tracking-widest text-on-surface">
          {status === 'loading' ? 'Publishing...' : status === 'success' ? 'Saved!' : status === 'error' ? 'Error' : 'Ready'}
        </span>
      </div>
    </div>
  );
}
