import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';

import { AbstractCategoryRepository } from '../abstract/category.abstract.repository';
import { Category } from '../entities/category.entity';
import { ICategoryRecord } from '../interface/category.interface';

@Injectable()
export class CategoryRepository extends AbstractCategoryRepository {
  constructor(@InjectRepository(Category) repository: Repository<Category>) {
    super(repository);
  }

  getAllCategories(): Promise<ICategoryRecord[] | null> {
    return this.entity.find();
  }

  getCategoryById(id: string): Promise<ICategoryRecord | null> {
    return this.entity.findOne({ where: { id: Equal(id) } });
  }

  getCategoryByName(name: string): Promise<ICategoryRecord | null> {
    return this.entity.findOne({ where: { name: Equal(name) } });
  }
}
