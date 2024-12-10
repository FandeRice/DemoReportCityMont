import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';  // Asegúrate de que PrismaService esté importado
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Prisma } from '@prisma/client';
import { Inject } from '@nestjs/common';

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  // Crear un nuevo reporte
  async create(createReportDto: CreateReportDto) {
    return this.prisma.report.create({
      data: {
        description: createReportDto.description,
        location: createReportDto.location,
        category: createReportDto.category,
        status: 'PENDING',  // Asignamos un estado inicial
        userId: createReportDto.userId,  // Asume que el usuario se pasa como parte de DTO
      },
    });
  }

  // Obtener todos los reportes (puedes agregar filtros por estado, categoría, etc.)
  async findAll() {
    return this.prisma.report.findMany();
  }

  // Obtener un reporte específico por ID
  async findOne(id: string) {
    return this.prisma.report.findUnique({
      where: { id: Number(id) },
    });
  }

  // Actualizar un reporte (solo accesible para administradores)
  async update(id: string, updateReportDto: UpdateReportDto) {
    return this.prisma.report.update({
      where: { id: Number(id) },
      data: {
        status: updateReportDto.status,
        description: updateReportDto.description,
        category: updateReportDto.category,
      },
    });
  }

  // Subir imágenes asociadas a un reporte
  async uploadImage(id: string, file: Express.Multer.File) {
    const imageUrl = `/uploads/${file.filename}`;  // Ajusta la URL según el almacenamiento de tus imágenes
    return this.prisma.report.update({
      where: { id: Number(id) },
      data: {
        imageUrl: imageUrl,  // Añadimos la URL de la imagen en el reporte
      },
    });
  }
}
