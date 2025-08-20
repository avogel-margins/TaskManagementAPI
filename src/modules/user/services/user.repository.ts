import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';

import { AbstractUserRepository } from '../abstract/user.abstract.repository';
import { User } from '../entities/user.entity';
import { IUserRecord } from '../interface/user.interface';

@Injectable()
export class UserRepository extends AbstractUserRepository {
  constructor(@InjectRepository(User) repository: Repository<User>) {
    super(repository);
  }

  getAllUsers(): Promise<IUserRecord[] | null> {
    return this.entity.find();
  }

  getUserById(id: string): Promise<IUserRecord | null> {
    return this.entity.findOne({ where: { id: Equal(id) } });
  }

  getUserByEmail(email: string): Promise<IUserRecord | null> {
    return this.entity.findOne({ where: { email: Equal(email) } });
  }
}
