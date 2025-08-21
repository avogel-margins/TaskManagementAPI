import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';

import { AbstractTaskRepository } from '../abstract/task.abstract.repository';
import { Task } from '../entities/task.entity';
import { ITaskRecord } from '../interface/task.interface';

@Injectable()
export class TaskRepository extends AbstractTaskRepository {
  constructor(@InjectRepository(Task) repository: Repository<Task>) {
    super(repository);
  }

  getAllTasks(): Promise<ITaskRecord[] | null> {
    return this.entity.find();
  }

  getTaskById(id: string): Promise<ITaskRecord | null> {
    return this.entity.findOne({ where: { id: Equal(id) } });
  }

  getTasksByTitle(title: string): Promise<ITaskRecord[] | null> {
    return this.entity.find({ where: { title: Equal(title) } });
  }
}
