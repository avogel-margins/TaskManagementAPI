import {
  IsString,
  IsOptional,
  IsEnum,
  IsDateString,
  IsNotEmpty,
} from 'class-validator';

import { TaskStatus } from 'src/common/dto/enum-task';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  categoryId: string;

  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsOptional()
  priority?: number;

  @IsDateString()
  @IsOptional()
  dueDate?: string;
}
