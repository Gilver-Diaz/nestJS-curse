import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // para ver que me muestra esto debo hacer lo siguiente:
    // lo ejetuctado aca NOSE que hace, investigar!
    const request = context.switchToHttp().getRequest() as Request;
    console.log(request.url);

    if (request.url === '/greet') return false; // aca seria que si es un greet solo no va a contuiar .
    // pero si tiene los parametros si continua y da la peticion !!
    return true;
  }
}

// eso lo puedo utilizar para validar roles en los usuarios..
