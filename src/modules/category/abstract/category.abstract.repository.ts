import { AbstractRepository } from 'src/common/abstract/abstract.repository';
import { ICategoryRecord } from '../interface/category.interface';
import { Category } from '../entities/category.entity';

export abstract class AbstractCategoryRepository extends AbstractRepository<Category> {
  abstract getAllCategories(): Promise<ICategoryRecord[] | null>;
  abstract getCategoryById(id: string): Promise<ICategoryRecord | null>;
  abstract getCategoryByName(name: string): Promise<ICategoryRecord | null>;
}
