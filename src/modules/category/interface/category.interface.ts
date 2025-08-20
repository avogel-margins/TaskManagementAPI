import { ITaskRecord } from '../../task/interface/task.interface';

export interface ICategory {
  name: string;
  description?: string;
  tasks?: ITaskRecord[];
}

export interface ICategoryRecord extends ICategory {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
