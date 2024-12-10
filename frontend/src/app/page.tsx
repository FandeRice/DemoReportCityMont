import React from 'react';
import Header from '@/components/elements/Header';
import HeroSection from '@/components/elements/HeroSection';
import FeaturesSection from '@/components/elements/FeaturesSection';
import Footer from '@/components/elements/Footer';
import FadeInEffect from '@/components/effects/FadeInEffect';
import MapComponent from '@/components/elements/MapComponent'; // Asegúrate de importar el MapComponent
import ReportForm from '@/components/elements/ReportForm';

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

      {/* Sección del mapa y formulario dentro de un shadow box */}
      <FadeInEffect>
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-3xl font-semibold mb-8 text-center">
                ¡Colabora con tu ciudad! Reporta problemas y mejora tu entorno!
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Mapa */}
                <div className="flex justify-center items-center">
                  <MapComponent />
                </div>
                {/* Formulario */}
                <div>
                  <ReportForm />
                </div>
              </div>
            </div>
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
