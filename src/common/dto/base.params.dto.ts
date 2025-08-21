import { IsString, IsUUID } from 'class-validator';

export abstract class BaseParams {
  @IsString({ message: 'ID must be a string' })
  @IsUUID('4', { message: 'ID must be a valid UUIDv4' })
  id: string;
}
