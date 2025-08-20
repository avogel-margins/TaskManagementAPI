import { Exclude, Expose } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

import { ITaskRecord } from '../interface/task.interface';
import { UserResponse } from 'src/modules/user/response/user.response.dto';
import { CategoryResponse } from 'src/modules/category/response/category.response.dto';

@Exclude()
export class TaskResponse implements ITaskRecord {
  @Expose()
  id: string;

  @Expose()
  title: string;

  @Expose()
  description: string;

  @Expose()
  userId: string;

  @Expose()
  @ApiPropertyOptional({ type: UserResponse })
  user?: UserResponse;

  @Expose()
  categoryId: string;

  @Expose()
  @ApiPropertyOptional({ type: CategoryResponse })
  category?: CategoryResponse;

  @Expose()
  updatedAt: Date;

  @Expose()
  createdAt: Date;
}
