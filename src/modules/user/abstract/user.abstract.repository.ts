import { AbstractRepository } from 'src/common/abstract/abstract.repository';
import { IUserRecord } from '../interface/user.interface';
import { User } from '../entities/user.entity';

export abstract class AbstractUserRepository extends AbstractRepository<User> {
  abstract getAllUsers(): Promise<IUserRecord[] | null>;
  abstract getUserById(id: string): Promise<IUserRecord | null>;
  abstract getUserByEmail(email: string): Promise<IUserRecord | null>;
}
