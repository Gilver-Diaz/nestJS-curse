import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { query } from 'express';
import { first } from 'rxjs';
import { createTaskDto } from './dto/create-task.dto';
import { UpdateTasks } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/tasks') // este es el controlador de rutas.
@ApiTags('/tasks')
//que precede a todos los controladoresque se estan llamando
export class TaskController {
  /* esto es una varibale*/
  //  tasksService: TasksService;

  constructor(private tasksService: TasksService) {}

  @Get() // da la URL
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'Return all task.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getAllTask(@Query() query: any) {
    // repasar Query
    console.log(query);
    return this.tasksService.gestTasks(); // esta funcion retorna un arreglo de string de tasks.service .. funciones que vienen de otro lado!
  }

  @Get('/:id') // aca se pasa el id para que se actuliace automanticamente para cada parametro usando el arreglo @Param
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(parseInt(id)); // esta funcion retorna un arreglo de string de tasks.service .. funciones que vienen de otro lado!
    // el parseInt  combierte el id en un nombre como lo declare anteriormente (repasar)
  }

  @Post()
  @ApiOperation({ summary: ' Crete a task' })
  createTask(@Body() task: createTaskDto) {
    return this.tasksService.createTasks(task);
  }
  @Put() // actualiza todo el objeto
  updateTask(@Body() task: UpdateTasks) {
    return this.tasksService.updateTasks(task);
  }
  @Delete() // elimina
  delateTask() {
    return this.tasksService.delatetasks();
  }
  @Patch() //actualiza parcialmente
  updateTaskstatus() {
    return this.tasksService.updateTaskStatus();
  }
}
