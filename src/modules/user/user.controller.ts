import { Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserParams } from './dto/user.params.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  @Get(':id')
  getUserById(@Param('id') userId: UserParams) {
    return this.getUserById(userId);
  }

  @Post()
  createUser(data: CreateUserDto) {
    return this.createUser(data);
  }

  @Patch(':id')
  updateUser(@Param('id') userId: UserParams, data: UpdateUserDto) {
    return this.updateUser(userId, data);
  }
}
