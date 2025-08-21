import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TaskController } from './task.controller';
import { Task } from './entities/task.entity';
import { TaskService } from './service/task.service';
import { TaskRepository } from './service/task.repository';
import { AbstractTaskRepository } from './abstract/task.abstract.repository';
import { AbstractTaskService } from './abstract/task.abstract.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TaskController],
  providers: [
    TaskService,
    TaskRepository,
    {
      provide: AbstractTaskRepository,
      useExisting: TaskRepository,
    },
    {
      provide: AbstractTaskService,
      useExisting: TaskService,
    },
  ],
  exports: [AbstractTaskRepository, AbstractTaskService],
})
export class TaskModule {}
