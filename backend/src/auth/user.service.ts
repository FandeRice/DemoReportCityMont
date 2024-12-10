import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // Asegúrate de que PrismaService esté configurado

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findOrCreateUser(profile: any) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: profile.emails[0].value, // Buscar por correo electrónico
      },
    });

    if (user) {
      return user; // Si el usuario existe, devuelvo el usuario
    }

    // Si el usuario no existe, crear uno nuevo
    const newUser = await this.prisma.user.create({
      data: {
        email: profile.emails[0].value,
        fullName: profile.displayName,
        oauthId: profile.id, // Guardamos el ID de OAuth2
        userType: 'CITIZEN', // O un valor predeterminado según tus necesidades
      },
    });

    return newUser; // Devolvemos el nuevo usuario
  }
}
