import { useNavigate } from "react-router-dom";


export default function CardCar({ imagenUrl, marca, modelo, precio, id }) {
    const navigate = useNavigate();

    return (
        <div key={id} className="bg-surface-container-low group cursor-pointer border-b-2 border-transparent hover:border-secondary transition-all">
            <div className="aspect-[4/3] bg-surface-container-highest overflow-hidden">
                <img src={imagenUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" alt="" />
            </div>
            <div className="p-8">
                <h3 className="font-headline text-xl mb-4">{marca} {modelo}</h3>
                <div className="flex justify-between items-center text-sm font-label uppercase tracking-widest text-on-surface-variant">
                    <span>{precio}</span>
                    <button onClick={() => navigate(`/booking/${id}`)} className="material-symbols-outlined text-secondary">arrow_forward</button>
                </div>
            </div>
        </div>
    )
}