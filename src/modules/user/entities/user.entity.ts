import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IUserRecord } from '../interface/user.interface';
import { ITaskRecord } from '../../task/interface/task.interface';
import { Task } from 'src/modules/task/entities/task.entity';

@Entity()
export class User implements IUserRecord {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @OneToMany(() => Task, (task) => task.user)
  tasks?: ITaskRecord[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
