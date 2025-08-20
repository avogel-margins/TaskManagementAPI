import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { AbstractUserService } from '../abstract/user.abstract.service';
import { AbstractUserRepository } from '../abstract/user.abstract.repository';
import { IUser, IUserRecord } from '../interface/user.interface';

@Injectable()
export class UserService extends AbstractUserService {
  constructor(private readonly userRepository: AbstractUserRepository) {
    super();
  }

  async createUser(data: Partial<IUser>): Promise<IUserRecord> {
    const existingUser = await this.userRepository.getUserByEmail(data.email);
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }
    return await this.userRepository.create(data);
  }

  async getUserById(id: string): Promise<IUserRecord> {
    const user = await this.userRepository.getUserById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async updateUser(id: string, data: Partial<IUser>): Promise<boolean> {
    const existingUser = await this.userRepository.getUserById(id);
    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    if (data.email && data.email !== existingUser.email) {
      const emailExists = await this.userRepository.getUserByEmail(data.email);
      if (emailExists) {
        throw new ConflictException('Email already in use');
      }
    }

    await this.userRepository.update(id, data);
    return true;
  }

  async deleteUser(id: string): Promise<boolean> {
    const existingUser = await this.userRepository.getUserById(id);
    if (!existingUser) {
      throw new NotFoundException('User not found');
    }
    await this.userRepository.delete(existingUser);
    return true;
  }
}
