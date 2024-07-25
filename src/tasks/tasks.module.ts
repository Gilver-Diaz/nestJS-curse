import { Module } from '@nestjs/common';
import { TaskController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TaskController],
  providers: [TasksService], // providers es como el imporot pero es para importar un servicio !
})
export class TasksModule {}
