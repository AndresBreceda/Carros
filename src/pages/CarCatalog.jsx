import React, { useEffect } from 'react';
import { useState } from 'react';
import CardCar from '../components/CardCar';


export default function CarCatalog() {

  const [carros, setCarros] = useState([]);

  useEffect(() => {
    const fetchCarros = async () => {
      try {
        const response = await fetch("http://localhost:5206/api/Carros");
        const data = await response.json();

        setCarros(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCarros();
  }, []);

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
        {carros.map((carro) => (
          <CardCar key={carro.id} id={carro.id} imagenUrl={carro.imagenUrl} marca={`Marca ${carro.marca}`} modelo={`Modelo ${carro.modelo}`} precio={`$${carro.precio}`} />
        ))}
      </div>
    </div>
  );
}
