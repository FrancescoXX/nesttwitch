import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body('name') username: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const generatedId = await this.usersService.create(username, email, password);
    return { id: generatedId };
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }
}
