import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service'; // Asegúrate de que UserService esté correctamente importado

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateOAuthLogin(profile: any): Promise<any> {
    const user = await this.userService.findOrCreateUser(profile);
    if (!user) {
      throw new Error('User not found or created');
    }
    const payload = { username: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload), // Genera el JWT para el usuario autenticado
    };
  }

  // Métodos adicionales para manejar el registro con correo electrónico, si es necesario
}
