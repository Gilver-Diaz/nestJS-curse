import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common'; // Import the Module decorator from NestJS
import { UsersController } from './users.controller'; // Import the UsersController
import { UsersService } from './users.service'; // Import the UsersService
import { LoggerMiddleware } from './logger/logger.middleware';
import path from 'path';
import { AuthMiddleware } from './auth/auth.middleware';

// Define the UsersModule
@Module({
  controllers: [UsersController], // Register the UsersController with this module
  providers: [UsersService], // Register the UsersService, making it available for dependency injection
})

// todo esto viene del Middleware , repasarlo
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //no entendi de donde salio este codigo en el video!
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        //no entendi de donde salio este codigo en el video!
        { path: '/users', method: RequestMethod.GET }, //no entendi de donde salio este codigo en el video!
        {
          path: '/users', // esto se usa para elegir de donde queremos llamar cada accion !
          method: RequestMethod.POST,
        },
      )
      // este middleware sirve para decidir quien puede entrara a la app o no
      .apply(AuthMiddleware)
      .forRoutes('/users');
  }
} // Export the UsersModule so it can be used in other parts of the application
