import { AbstractRepository } from 'src/common/abstract/abstract.repository';
import { ITaskRecord } from '../interface/task.interface';
import { Task } from '../entities/task.entity';

export abstract class AbstractTaskRepository extends AbstractRepository<Task> {
  abstract getAllTasks(): Promise<ITaskRecord[] | null>;
  abstract getTaskById(id: string): Promise<ITaskRecord | null>;
  abstract getTasksByTitle(title: string): Promise<ITaskRecord[] | null>;
}
