import { IsString } from 'class-validator';

export class TaskParams {
  @IsString({ message: 'Task ID must be a string' })
  taskId: string;
}
