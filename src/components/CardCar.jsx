
export default function CardCar({ image, title, price, id }) {
    return (
        <div key={id} className="bg-surface-container-low group cursor-pointer border-b-2 border-transparent hover:border-secondary transition-all">
            <div className="aspect-[4/3] bg-surface-container-highest overflow-hidden">
                <img src={image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" alt="" />
            </div>
            <div className="p-8">
                <h3 className="font-headline text-xl mb-4">{title}</h3>
                <div className="flex justify-between items-center text-sm font-label uppercase tracking-widest text-on-surface-variant">
                    <span>{price}</span>
                    <span className="material-symbols-outlined text-secondary">arrow_forward</span>
                </div>
            </div>
        </div>
    )
}