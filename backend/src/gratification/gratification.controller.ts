// src/gratification/gratification.controller.ts
import { Controller, Post, Param, Body } from '@nestjs/common';
import { GratificationService } from './gratification.service';
import { User } from '@prisma/client';

@Controller('gratification')
export class GratificationController {
  constructor(private readonly gratificationService: GratificationService) {}

  // Ruta para aumentar los puntos del usuario
  @Post('add-points/:userId')
  async addPoints(@Param('userId') userId: number, @Body() body: { points: number }): Promise<User> {
    return this.gratificationService.addPoints(userId, body.points);
  }

  // Ruta para verificar si el usuario puede canjear una recompensa
  @Post('check-reward/:userId')
  async checkRewardEligibility(@Param('userId') userId: number): Promise<boolean> {
    return this.gratificationService.checkRewardEligibility(userId);
  }

  // Ruta para canjear recompensa
  @Post('redeem-reward/:userId/:rewardId')
  async redeemReward(@Param('userId') userId: number, @Param('rewardId') rewardId: number): Promise<User> {
    return this.gratificationService.redeemReward(userId, rewardId);
  }

  // Ruta para asignar una insignia
  @Post('assign-badge/:userId/:badgeId')
  async assignBadge(@Param('userId') userId: number, @Param('badgeId') badgeId: number): Promise<User> {
    return this.gratificationService.assignBadge(userId, badgeId);
  }

  // Ruta para enviar notificación
  @Post('send-notification/:userId')
  async sendNotification(@Param('userId') userId: number, @Body() body: { message: string }): Promise<void> {
    return this.gratificationService.sendNotification(userId, body.message);
  }
}
