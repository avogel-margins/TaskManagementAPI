import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ITaskRecord } from '../interface/task.interface';

import { User } from 'src/modules/user/entities/user.entity';
import { IUserRecord } from 'src/modules/user/interface/user.interface';
import { Category } from 'src/modules/category/entities/category.entity';
import { ICategoryRecord } from 'src/modules/category/interface/category.interface';

@Entity()
export class Task implements ITaskRecord {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  title: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ type: 'uuid', nullable: false })
  userId: string;

  @ManyToOne(() => User, (user) => user.tasks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user?: IUserRecord;

  @Column({ type: 'uuid', nullable: false })
  categoryId: string;

  @ManyToOne(() => Category, (category) => category.tasks, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'categoryId' })
  category?: ICategoryRecord;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
