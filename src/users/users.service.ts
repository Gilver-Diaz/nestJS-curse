import { Injectable } from '@nestjs/common';
import { identity } from 'rxjs';
import { createTaskDto } from 'src/tasks/dto/create-task.dto';
import { createUsersDto } from 'src/tasks/dto/create-users.dto';

@Injectable()
export class UsersService {
  private users: any[] = [
    {
      id: 1,
      name: 'Gilver',
      phone: '12312432543',
    },
    {
      id: 2,
      name: 'Diaz',
      phone: '1222212432543',
    },
  ];

  getUsers() {
    return this.users;
  }

  createUser(users: createUsersDto) {
    this.users.push(users);

    return {
      ...users,
      id: this.users.length + 1,
    };
  }
}
