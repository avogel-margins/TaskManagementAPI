import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AbstractTaskService } from './abstract/task.abstract.service';
import { TaskParams } from './dto/task.params.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@ApiTags('Tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: AbstractTaskService) {}

  @Get(':id')
  async getTaskById(@Param() { taskId }: TaskParams) {
    return this.taskService.getTaskById(taskId);
  }

  @Post()
  async createTask(@Body() data: CreateTaskDto) {
    return this.taskService.createTask(data);
  }

  @Patch(':id')
  async updateTask(
    @Param() { taskId }: TaskParams,
    @Body() data: Partial<UpdateTaskDto>,
  ) {
    return this.taskService.updateTask(taskId, data);
  }

  @Delete(':id')
  async deleteTask(@Param() { taskId }: TaskParams) {
    return this.taskService.deleteTask(taskId);
  }
}
