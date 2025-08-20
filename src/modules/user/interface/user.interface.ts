import { ITaskRecord } from 'src/modules/task/interface/task.interface';

export interface IUser {
  name: string;
  email: string;
  tasks?: ITaskRecord[];
}

export interface IUserRecord extends IUser {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
