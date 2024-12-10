// src/gratification/gratification.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class GratificationService {
  constructor(private readonly prisma: PrismaService) {}

  // Aumentar los puntos del usuario
  async addPoints(userId: number, points: number): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        points: { increment: points },
      },
    });
    return user;
  }

  // Verificar si el usuario puede canjear una recompensa
  async checkRewardEligibility(userId: number): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { points: true },
    });
    const rewards = await this.prisma.reward.findMany({
      where: { pointsRequired: { lte: user?.points } },
    });
    return rewards.length > 0;
  }

  // Canjear recompensa para el usuario
  async redeemReward(userId: number, rewardId: number): Promise<User> {
    const reward = await this.prisma.reward.findUnique({ where: { id: rewardId } });

    if (!reward || reward.pointsRequired > 0) {
      throw new Error('No se puede canjear esta recompensa');
    }

    // Actualizamos los puntos y asignamos la recompensa
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        points: { decrement: reward.pointsRequired },
        rewards: {
          connect: { id: rewardId },
        },
      },
    });

    return user;
  }

  // Asignar una insignia al usuario
  async assignBadge(userId: number, badgeId: number): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        badges: {
          connect: { id: badgeId },
        },
      },
    });
    return user;
  }

  // Enviar notificación al usuario
  async sendNotification(userId: number, message: string): Promise<void> {
    await this.prisma.notification.create({
      data: {
        message,
        userId,
      },
    });
  }
}
