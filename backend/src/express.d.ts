import { User } from '@prisma/client'; // Importa tu tipo de usuario desde Prisma (ajusta según el nombre de tu modelo)
declare global {
  namespace Express {
    interface Request {
      user: User; // Aquí agregamos la propiedad 'user' a 'Request'
    }
  }
}
