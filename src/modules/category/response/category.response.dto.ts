import { Expose, Exclude } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

import { ICategoryRecord } from '../interface/category.interface';
import { TaskResponse } from 'src/modules/task/response/task.response.dto';

@Exclude()
export class CategoryResponse implements ICategoryRecord {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  @ApiPropertyOptional({ type: String })
  description?: string;

  @Expose()
  @ApiPropertyOptional({ type: [TaskResponse] })
  tasks?: TaskResponse[];

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
