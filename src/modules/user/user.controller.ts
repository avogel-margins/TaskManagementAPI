import {
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Body,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserParams } from './dto/user.params.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AbstractUserService } from './abstract/user.abstract.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: AbstractUserService) {}

  @Get(':id')
  getUserById(@Param() { id }: UserParams) {
    return this.userService.getUserById(id);
  }

  @Post()
  createUser(@Body() data: CreateUserDto) {
    return this.userService.createUser(data);
  }

  @Patch(':id')
  updateUser(@Param() { id }: UserParams, @Body() data: UpdateUserDto) {
    return this.userService.updateUser(id, data);
  }

  @Delete(':id')
  deleteUser(@Param() { id }: UserParams) {
    return this.userService.deleteUser(id);
  }

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
