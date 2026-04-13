import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BookingDetail() {
  const { id } = useParams(); // 🔥 id del carro

  const [carro, setCarro] = useState(null);
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const [estado, setEstado] = useState("");

  // 🔥 traer carro
  useEffect(() => {
    const fetchCarro = async () => {
      try {
        const res = await fetch(`http://localhost:5206/api/Carros/${id}`);
        const data = await res.json();

        setCarro(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCarro();
  }, [id]);

  // 🔥 crear reserva
  const handleReserva = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5206/api/reservas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fecha_Inicio: fechaInicio,
          fecha_Final: fechaFinal,
          id_Carro: id,
          id_Usuario: "69dbebc86a64d9c180097fe0",
          estado: estado,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (data) {
        alert("Reserva creada 🚀");

        // ✅ limpiar form
        setFechaInicio("");
        setFechaFinal("");
        setEstado("");

        // ✅ redirigir
        navigate("/dashboard");

      }

    } catch (error) {
      console.error(error);
    }
  };

  if (!carro) return <p className="p-10">Cargando...</p>;

  const calcularDias = () => {
    if (!fechaInicio || !fechaFinal) return 0;

    const inicio = new Date(fechaInicio);
    const final = new Date(fechaFinal);

    if (final <= inicio) return 0;

    const diffTime = final - inicio;
    return Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  };

  const dias = calcularDias();
  const total = dias * (carro?.precio || 0);

  return (
    <div className="pt-24 min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-surface-container-low p-12 md:p-24 flex flex-col justify-center">
        <span className="font-label text-secondary uppercase tracking-[0.4em] text-xs mb-4">Reservation</span>
        <h1 className="font-headline text-4xl md:text-5xl mb-8 leading-tight">Create your NAOROBI Experience</h1>

        <form className="space-y-6 mt-8">
          <div>
            <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Pickup Date & Time</label>
            <input value={fechaInicio}
              onChange={(e) => setFechaInicio(e.target.value)} type="datetime-local" className="w-full bg-surface-container-high border-b-2 border-outline-variant p-4 font-body text-on-background focus:outline-none focus:border-secondary" />
          </div>
          <div>
            <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Return Date & Time</label>
            <input type="datetime-local"
              value={fechaFinal}
              onChange={(e) => setFechaFinal(e.target.value)}
              className="w-full bg-surface-container-high border-b-2 border-outline-variant p-4 font-body text-on-background focus:outline-none focus:border-secondary" />
          </div>
          <div>
            <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Delivery Location</label>
            <input value={estado} type="text" placeholder="Enter Airport, Hotel, or Private Address" className="w-full bg-surface-container-high border-b-2 border-outline-variant p-4 font-body text-on-background focus:outline-none focus:border-secondary" />
          </div>
          <button onClick={handleReserva} onChange={(e) => setEstado(e.target.value)} className="w-full gold-gradient text-on-secondary py-5 font-label uppercase tracking-[0.2em] text-xs font-bold transition-transform active:scale-95">Confirm Request</button>
        </form>
      </div>

      <div className="bg-surface p-12 md:p-24 border-l border-outline-variant/20 flex flex-col justify-center">
        <div className="aspect-[16/9] bg-surface-container-highest mb-12">
          {/* Image Placeholder */}
          <img src={`${carro.imagenUrl}?w=800`}
            alt={carro.marca} className="w-full h-full flex items-center justify-center text-on-surface-variant"></img>
        </div>
        <div className="flex justify-between items-end border-b border-outline-variant/30 pb-6 mb-6">
          <div>
            <h2 className="font-headline text-3xl">{carro.marca} {carro.modelo}</h2>
            <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mt-2">Black Diamond</p>
          </div>
          <div className="text-right">
            <span className="font-headline text-2xl text-secondary">${carro.precio}</span>
            <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block"> / Day</span>
          </div>
        </div>

        <div className="flex justify-between font-body text-sm mb-12">
          <span className="text-on-surface-variant">Total Estimated {dias} Days</span>
          <span className="text-on-background">${carro.precio * dias}</span>
        </div>
      </div>
    </div >
  );
}
