'use client'; // Asegúrate de agregar esto para evitar problemas de renderizado en el servidor con Leaflet

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Estilos de Leaflet
import 'leaflet-graticule'; // Asegúrate de importar el complemento

const MapComponent: React.FC = () => {
  // Establecer la ubicación de Montería, Colombia
  const position: LatLngExpression = [8.7480, -75.8837]; // Coordenadas de Montería

  // Crear un icono personalizado
  const customIcon = new L.Icon({
    iconUrl: '/path/to/custom-icon.png', // Ruta a tu icono
    iconSize: [32, 32], // Tamaño del icono
    iconAnchor: [16, 32], // Ancla del icono (donde se coloca en el marcador)
    popupAnchor: [0, -32], // Ancla del popup (ubicación del texto en relación al icono)
  });

  // Hook para acceder al mapa y añadir la capa de cuadrícula
  const MapGraticule = () => {
    const map = useMap();

    useEffect(() => {
      // Asegúrate de que `L.latlngGraticule` esté disponible antes de agregarlo
      const graticule = L.latlngGraticule().addTo(map); // Capa de graticule
      // La función de limpieza debe ser retornada
      return () => {
        if (map) {
          map.removeLayer(graticule); // Limpiar la capa cuando se desmonte
        }
      };
    }, [map]);

    return null; // No se necesita renderizar nada
  };

  return (
    <div className="map-container">
      {/* Contenedor del mapa */}
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '100%' }}>
        {/* Capa del mapa */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Marcador con el icono personalizado */}
        <Marker position={position} icon={customIcon}>
          <Popup>Este es un marcador personalizado en Montería.</Popup>
        </Marker>

        {/* Capa de cuadrícula */}
        <MapGraticule />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
