// src/admin/admin.controller.ts
import { Controller, Get, Put, Param, Query, Body } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Report, Stats } from '@prisma/client';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // Ruta para obtener todos los reportes con filtros (estado, categoría, prioridad)
  @Get('reports')
  async getReports(
    @Query('status') status: string,
    @Query('category') category: string,
    @Query('priority') priority: string
  ): Promise<Report[]> {
    const filters = { status, category, priority };
    return this.adminService.getReports(filters);
  }

  // Ruta para asignar un reporte a un miembro del equipo (administrador)
  @Put('reports/:id/assign')
  async assignReportToTeamMember(
    @Param('id') reportId: number,
    @Body('userId') userId: number
  ): Promise<Report> {
    return this.adminService.assignReportToTeamMember(reportId, userId);
  }

  // Ruta para obtener las estadísticas del sistema
  @Get('stats')
  async getStats(): Promise<Stats[]> {
    return this.adminService.getStats();
  }
}
