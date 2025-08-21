import { ITask, ITaskRecord } from '../interface/task.interface';

export abstract class AbstractTaskService {
  abstract createTask(data: ITask): Promise<ITaskRecord>;
  abstract getTaskById(id: string): Promise<ITaskRecord>;
  abstract updateTask(id: string, data: Partial<ITask>): Promise<boolean>;
  abstract deleteTask(id: string): Promise<boolean>;
}
