import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  readonly name?: string;

  @IsOptional()
  @IsString({ message: 'Password must be a string' })
  readonly password?: string;
}
