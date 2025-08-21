import { IUserRecord } from 'src/modules/user/interface/user.interface';
import { ICategoryRecord } from 'src/modules/category/interface/category.interface';

export interface ITask {
  title: string;
  description?: string;
  userId: string;
  user?: IUserRecord;
  categoryId: string;
  category?: ICategoryRecord;
}

export interface ITaskRecord extends ITask {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
