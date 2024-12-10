import { Controller, Post, Get, Param, Body, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  // Crear un nuevo reporte
  @Post()
  async create(@Body() createReportDto: CreateReportDto) {
    return this.reportsService.create(createReportDto);
  }

  // Obtener todos los reportes (puedes agregar filtros a la consulta)
  @Get()
  async findAll() {
    return this.reportsService.findAll();
  }

  // Obtener un reporte específico por ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.reportsService.findOne(id);
  }

  // Actualizar un reporte (solo accesible para administradores)
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateReportDto: UpdateReportDto) {
    return this.reportsService.update(id, updateReportDto);
  }

  // Subir imágenes asociadas a un reporte
  @Post(':id/upload')
  @UseInterceptors(FileInterceptor('image'))  // Puedes ajustar el campo de la imagen si es diferente
  async uploadImage(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {
    return this.reportsService.uploadImage(id, file);
  }
}
