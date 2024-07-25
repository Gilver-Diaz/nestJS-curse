import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUsersDto } from 'src/tasks/dto/create-users.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiTags('/users')
  @Get('/users')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post('/users')
  createUser(@Body() user: createUsersDto) {
    return this.usersService.createUser(user);
  }
}
