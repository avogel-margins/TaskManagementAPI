import { Exclude, Expose } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

import { IUserRecord } from '../interface/user.interface';
import { TaskResponse } from 'src/modules/task/response/task.response.dto';

@Exclude()
export class UserResponse implements IUserRecord {
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Expose()
  name: string;

  @Expose()
  @ApiPropertyOptional({ type: [TaskResponse] })
  tasks?: TaskResponse[];

  @Expose()
  updatedAt: Date;

  @Expose()
  createdAt: Date;
}
