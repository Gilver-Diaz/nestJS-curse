import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller({})
export class TasksController {
  @Get('/tasks')
  getAllTask() {
    return 'Obteniendo todas las tareas';
  }
}
