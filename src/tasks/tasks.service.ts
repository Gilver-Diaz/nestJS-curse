import { Injectable, HttpCode, NotFoundException } from '@nestjs/common';
import { log } from 'console';
import { NotFoundError } from 'rxjs';
import { createTaskDto } from './dto/create-task.dto';
import { UpdateTasks } from './dto/update-task.dto';

export interface User {
  name: string;
  age: number;
}

@Injectable() // INjectable como el nombre lo dice es para
//injectar codigo de otra parte de la app ,(seria tambine para reutilazar codigo)
export class TasksService {
  private tasks = [];

  gestTasks() {
    return this.tasks;
  }
  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);

    if (!taskFound) {
      return new NotFoundException(' la tera que buscas no fue encontrada');
      // throw new error ('task not found') de esta manera se hace para no es muy comun
    }

    return taskFound;
  }

  createTasks(task: createTaskDto) {
    console.log(task);
    this.tasks.push({
      ...task, // los 3 puntos es copiar // cree los archivos DTO , y aca ya sabe que viene de ahi.
      id: this.tasks.length + 1,
    });
    return task;
  }

  updateTasks(task: UpdateTasks) {
    console.log(task);

    return 'Actualizando Tareas';
  }
  delatetasks() {
    return 'Eliminando Tareas';
  }
  updateTaskStatus() {
    return ' Actualizando Tarea';
  }
}
