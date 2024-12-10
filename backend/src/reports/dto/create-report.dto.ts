export class CreateReportDto {
    description: string;
    location: string;
    category: string;
    userId: number;  // Asumiendo que el ID del usuario que crea el reporte se pasa
  }
  