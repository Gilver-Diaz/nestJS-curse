import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response } from 'express';
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { authorization } = req.headers;

    if (!authorization) {
      // esto es para autorizar al servidor
      // esto es para enviar una seccion al frontend de no autorisado !
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    // si no pasa los parametros el middleware solo se detiene aca , pero si ya los pasa sigue funcionando normalmente
    {
      if (authorization !== 'Hola') {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
      }
    }
    next();
  }
}

// todo esto es una funcion de http ,
