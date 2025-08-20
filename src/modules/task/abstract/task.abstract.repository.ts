import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { ITaskRecord } from '../interface/task.interface';

export abstract class AbstractTaskRepository {
  abstract create(taskData: CreateTaskDto): Promise<ITaskRecord>;
  abstract findAll(): Promise<ITaskRecord[] | null>;
  abstract findById(id: string): Promise<ITaskRecord | null>;
  abstract update(
    id: string,
    taskData: UpdateTaskDto,
  ): Promise<ITaskRecord | null>;
  abstract delete(id: string): Promise<boolean>;
}
