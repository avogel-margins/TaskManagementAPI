import { IsString, IsUUID } from 'class-validator';

export class UserParams {
  @IsString({ message: 'User ID must be a string' })
  @IsUUID('4', { message: 'User ID must be a valid UUIDv4' })
  readonly userId: string;
}
