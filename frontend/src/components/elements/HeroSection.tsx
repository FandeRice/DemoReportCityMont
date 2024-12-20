import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative text-gray-800 text-center py-64"> {/* Doble de altura */}
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/recourses/img/hero-section.png" 
          alt="Fondo Hero" 
          layout="fill" 
          objectFit="cover" 
          quality={100}
        />
      </div>
      
      {/* Contenido sobre la imagen */}
      <div className="relative z-10 container mx-auto">
        <h1 className="text-6xl font-extrabold mb-4">Soluciona los problemas urbanos de tu ciudad</h1>
        <p className="text-2xl mb-6">Cero basura te permite reportar y hacer un seguimiento de problemas urbanos de manera sencilla y efectiva.</p>
        <Link href="/get-started">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-xl px-6 py-3 rounded-full">Comenzar</button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
