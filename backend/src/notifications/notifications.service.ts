// src/notifications/notifications.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Notification } from '@prisma/client';

@Injectable()
export class NotificationsService {
  constructor(private readonly prisma: PrismaService) {}

  // Obtener las notificaciones de un usuario
  async getNotifications(userId: number): Promise<Notification[]> {
    return this.prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  // Marcar notificaciones como leídas
  async markAsRead(notificationId: number): Promise<Notification> {
    return this.prisma.notification.update({
      where: { id: notificationId },
      data: { isRead: true },
    });
  }

  // Enviar una notificación a un usuario (acceso solo para administradores)
  async sendNotification(
    adminId: number,
    userId: number,
    message: string
  ): Promise<Notification> {
    // Verificar si el usuario es administrador
    const user = await this.prisma.user.findUnique({ where: { id: adminId } });
    if (user?.userType !== 'ADMIN') {
      throw new Error('Acceso denegado. Solo los administradores pueden enviar notificaciones.');
    }

    // Crear la notificación
    return this.prisma.notification.create({
      data: {
        message,
        userId,
      },
    });
  }
}
