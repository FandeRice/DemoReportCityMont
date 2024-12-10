// src/admin/admin.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Report, Stats } from '@prisma/client';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  // Obtener todos los reportes con filtros por estado, categoría y prioridad
  async getReports(filters: {
    status?: string;
    category?: string;
    priority?: string;
  }): Promise<Report[]> {
    return this.prisma.report.findMany({
      where: {
        status: filters.status,
        category: filters.category,
        // Agregar lógica para filtro de prioridad si es necesario
      },
      orderBy: {
        createdAt: 'desc', // Ordenar por fecha
      },
    });
  }

  // Asignar un reporte a un miembro del equipo (administrador)
  async assignReportToTeamMember(reportId: number, userId: number): Promise<Report> {
    // Verificar si el usuario es administrador
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (user?.userType !== 'ADMIN') {
      throw new Error('Acceso denegado. Solo los administradores pueden asignar reportes.');
    }

    return this.prisma.report.update({
      where: { id: reportId },
      data: {
        userId, // Asignar el reporte al usuario
      },
    });
  }

  // Obtener estadísticas del sistema (número de reportes, reportes resueltos, etc.)
  async getStats(): Promise<Stats[]> {
    return this.prisma.stats.findMany({
      orderBy: {
        createdAt: 'desc', // Ordenar por fecha de creación
      },
    });
  }
}
