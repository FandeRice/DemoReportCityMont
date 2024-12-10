"use client";

import React, { useState } from "react";

const ReportForm = () => {
  const [formData, setFormData] = useState({
    reportName: "",
    reportType: "",
    reportInfo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Report submitted:", formData);
    // Aquí podrías añadir la lógica para enviar el reporte a tu backend
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-md mx-auto mb-6">
      {/* Reducir padding y margen */}
      <h2 className="text-xl font-bold mb-3 text-center">
        Reportar un Problema
      </h2>
      {/* Reducir tamaño de fuente y márgenes */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            htmlFor="reportName"
            className="block text-gray-700 font-medium mb-1"
          >
            Nombre del Reporte
          </label>
          <input
            type="text"
            id="reportName"
            name="reportName"
            value={formData.reportName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Ej. Bache en la calle principal"
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="reportType"
            className="block text-gray-700 font-medium mb-1"
          >
            Tipo de Problema
          </label>
          <select
            id="reportType"
            name="reportType"
            value={formData.reportType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          >
            <option value="" disabled>
              Selecciona el tipo de problema
            </option>
            <option value="Infraestructura">Infraestructura</option>
            <option value="Alumbrado Público">Alumbrado Público</option>
            <option value="Recolección de Basura">Recolección de Basura</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="mb-3">
          <label
            htmlFor="reportInfo"
            className="block text-gray-700 font-medium mb-1"
          >
            Información Detallada
          </label>
          <textarea
            id="reportInfo"
            name="reportInfo"
            value={formData.reportInfo}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Describe el problema con detalles..."
            rows={3} // Reducir cantidad de filas
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-4 py-2 rounded-md w-full transition-colors"
        >
          Reportar
        </button>
      </form>
    </div>
  );
};

export default ReportForm;
