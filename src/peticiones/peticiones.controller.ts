import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { log } from 'console';
import { query, Request, Response } from 'express';
import { ValidateuserPipe } from './pipe/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller({})
export class PeticionesController {
  @Get('/peticiones')
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    response.status(200).json({
      message: 'Hello World',
    });
    //preguntar a osar bien esta parte (no la entendi)
  }
  // tipod de codigos de estado!

  @Get('new')
  @HttpCode(201)
  somethingNew() {
    // esto daria un mensaje que un recurso nuevo se ha creado!
    return 'Something New';
  }

  @Get('notFound')
  @HttpCode(404) //Codigo de estado // esto se usa mas que todo para dar sms de errores !
  notFoundPage() {
    return '404 not found';
  }
  @Get('error')
  @HttpCode(500)
  errorPage() {
    return 'error Route!!';
  }

  @Get('tiket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    // aca la funcion se llama getnumber,
    //usamos el metodo Param , se llama 'num' y esta dentro de una varibale por nombre :number
    // la funcion ParseIntpipe , en este caso convierte un string a un entero
    return num + 14;
  }

  @Get('active/:status')
  @UseGuards(AuthGuard)
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    console.log(typeof status);

    return status;
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query() query: { name: string; age: number }) {
    // ValidateuserPipe
    console.log(typeof query.name); // ya esto esta pasando por el validateUserpapie
    console.log(typeof query.age);

    return `Hello ${query.name}, you are ${query.age + 30}years old`;
  }
}
