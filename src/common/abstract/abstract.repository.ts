import { Injectable } from '@nestjs/common';
import {
  DeepPartial,
  DeleteResult,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export abstract class AbstractRepository<T> {
  protected constructor(protected readonly entity: Repository<T>) {}

  async create(entity: DeepPartial<T>): Promise<T> {
    const data = this.entity.create(entity);
    return this.entity.save(data);
  }
  async createMany(entities: DeepPartial<T>[]): Promise<T[]> {
    const data = this.entity.create(entities);
    return this.entity.save(data);
  }

  async find(where: FindOneOptions<T>): Promise<T | null> {
    return this.entity.findOne(where);
  }

  async findMany(where: FindOptionsWhere<T>): Promise<T[] | null> {
    return this.entity.find({ where });
  }

  async save(entity: DeepPartial<T>): Promise<DeepPartial<T>> {
    return this.entity.save(entity);
  }

  async update(
    criteria: any,
    entity: QueryDeepPartialEntity<T>,
  ): Promise<UpdateResult> {
    return this.entity.update(criteria, entity);
  }

  async updateMany(entity: DeepPartial<T>[]): Promise<T[]> {
    return this.entity.save(entity);
  }

  async delete(criteria: FindOptionsWhere<T>): Promise<DeleteResult> {
    return this.entity.delete(criteria);
  }

  async deleteMany(criteria: number[] | string[]): Promise<DeleteResult> {
    return this.entity.delete(criteria);
  }
}
