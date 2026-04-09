import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] bg-[#131313] text-[#E5E2E1] px-6 py-24 mx-auto">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl text-center space-y-6">
        <h1 className="font-serif text-8xl md:text-9xl tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#CECECE] to-[#5d5e5f]">
          404
        </h1>
        <h2 className="font-serif text-3xl md:text-4xl text-[#E5E2E1]">
          Destino Desconocido
        </h2>
        <p className="font-sans text-base md:text-lg text-[#D0C5AF] max-w-md mx-auto leading-relaxed">
          La ruta que intentas explorar no se encuentra en nuestra colección privada. 
          Te invitamos a retornar a nuestra selección principal.
        </p>
        <div className="pt-8">
          <Link 
            to="/"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#E9C349] to-[#AF8D11] text-[#3C2F00] font-sans font-semibold tracking-[0.1em] uppercase text-xs px-8 py-4 rounded-sm transition-all hover:brightness-110"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
