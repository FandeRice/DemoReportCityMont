// src/gratification/gratification.module.ts
import { Module } from '@nestjs/common';
import { GratificationService } from './gratification.service';
import { GratificationController } from './gratification.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [GratificationService, PrismaService],
  controllers: [GratificationController],
})
export class GratificationModule {}
