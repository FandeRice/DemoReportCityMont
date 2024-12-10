import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google')) // Usamos la estrategia de Google OAuth2
  async googleAuth() {
    // Redirige al usuario a Google para autenticarse
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google')) // Usamos la estrategia de Google OAuth2
  async googleAuthRedirect(@Req() req: Request) {
    const jwt = await this.authService.validateOAuthLogin(req.user);
    return { jwt }; // Devuelve el JWT al cliente
  }

  // Agrega rutas similares para otras plataformas si es necesario
}
