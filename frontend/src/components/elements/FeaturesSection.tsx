import { FaUserCircle } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-[#FDF0D5]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Características Principales</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            {/* Div con color de fondo blanco */}
            <FaUserCircle className="text-4xl mb-4 mx-auto text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Reporte Fácil</h3>
            <p>Reporta problemas urbanos en segundos y empieza a hacer una diferencia.</p>
          </div>
          <div className="p-6 bg-[#FDF5E6] border rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            {/* Div con color ligeramente más claro que el fondo */}
            <FaUserCircle className="text-4xl mb-4 mx-auto text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Seguimiento en Tiempo Real</h3>
            <p>Monitorea el estado de tus reportes y recibe actualizaciones.</p>
          </div>
          <div className="p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            {/* Div con color de fondo blanco */}
            <FaUserCircle className="text-4xl mb-4 mx-auto text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Incentivos y Recompensas</h3>
            <p>Gana puntos y recompensas por cada reporte que realices.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
