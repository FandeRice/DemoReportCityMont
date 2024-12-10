// src/notifications/notifications.controller.ts
import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Notification } from '@prisma/client';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  // Ruta para obtener las notificaciones de un usuario
  @Get(':userId')
  async getNotifications(@Param('userId') userId: number): Promise<Notification[]> {
    return this.notificationsService.getNotifications(userId);
  }

  // Ruta para enviar una notificación a un usuario (solo administradores)
  @Post('send')
  async sendNotification(
    @Body() body: { adminId: number; userId: number; message: string }
  ): Promise<Notification> {
    const { adminId, userId, message } = body;
    return this.notificationsService.sendNotification(adminId, userId, message);
  }

  // Ruta para marcar una notificación como leída
  @Post('read/:notificationId')
  async markAsRead(@Param('notificationId') notificationId: number): Promise<Notification> {
    return this.notificationsService.markAsRead(notificationId);
  }
}
