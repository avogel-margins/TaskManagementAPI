import { Injectable, NotFoundException } from '@nestjs/common';
import { ITask, ITaskRecord } from '../interface/task.interface';

import { AbstractTaskService } from '../abstract/task.abstract.service';
import { AbstractTaskRepository } from '../abstract/task.abstract.repository';

@Injectable()
export class TaskService extends AbstractTaskService {
  constructor(private readonly taskRepository: AbstractTaskRepository) {
    super();
  }

  async createTask(data: Partial<ITask>): Promise<ITaskRecord> {
    return await this.taskRepository.create(data);
  }

  async getTaskById(id: string): Promise<ITaskRecord> {
    const task = await this.taskRepository.getTaskById(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }

  async updateTask(id: string, data: Partial<ITask>): Promise<boolean> {
    const existingTask = await this.taskRepository.getTaskById(id);
    if (!existingTask) {
      throw new NotFoundException('Task not found');
    }
    await this.taskRepository.update(id, data);
    return true;
  }

  async deleteTask(id: string): Promise<boolean> {
    const existingTask = await this.taskRepository.getTaskById(id);
    if (!existingTask) {
      throw new NotFoundException('Task not found');
    }
    await this.taskRepository.delete(existingTask);
    return true;
  }
}
