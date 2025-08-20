import { IUser, IUserRecord } from '../interface/user.interface';

export abstract class AbstractUserService {
  abstract createUser(data: IUser): Promise<IUserRecord>;
  abstract getUserById(id: string): Promise<IUserRecord>;
  abstract updateUser(id: string, data: Partial<IUser>): Promise<boolean>;
  abstract deleteUser(id: string): Promise<boolean>;
}
