import React from 'react';
import Header from '@/components/elements/Header';
import HeroSection from '@/components/elements/HeroSection';
import FeaturesSection from '@/components/elements/FeaturesSection';
import Footer from '@/components/elements/Footer';
import SlideInEffect from '@/components/effects/SlideInEffect'; // Importa los efectos
import FadeInEffect from '@/components/effects/FadeInEffect';
import ScaleUpEffect from '@/components/effects/ScaleUpEffect';
import AnimatedComponent from '@/components/effects/AnimatedComponent';
import MapComponent from '@/components/elements/MapComponent'; // Asegúrate de importar el MapComponent

const MainPage = () => {
  return (
    <div>
      <FadeInEffect>
        <Header />
      </FadeInEffect>

      <FadeInEffect>
        <HeroSection />
      </FadeInEffect>

      <FadeInEffect>
        <FeaturesSection />
      </FadeInEffect>

      {/* Sección del mapa */}
      <FadeInEffect>
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-8">Reporte ya!</h2>
            <MapComponent /> {/* Muestra el mapa aquí */}
          </div>
        </section>
      </FadeInEffect>

      <FadeInEffect>
        <Footer />
      </FadeInEffect>
    </div>
  );
};

export default MainPage;
