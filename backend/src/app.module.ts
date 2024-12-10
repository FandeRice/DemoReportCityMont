import { Module } from '@nestjs/common';
import { GratificationModule } from './gratification/gratification.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ReportsModule } from './reports/reports.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    GratificationModule,      // Para la gestión de gratificaciones
    NotificationsModule,       // Para la gestión de notificaciones
    AdminModule,               // Para el panel administrativo
    ReportsModule,             // Para la gestión de reportes
  ],
  controllers: [],            // Si tienes controladores globales, agréguelos aquí
  providers: [],              // Si tienes proveedores globales, agréguelos aquí
})
export class AppModule {}
