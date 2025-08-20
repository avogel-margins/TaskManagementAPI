import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { ICategoryRecord } from '../interface/category.interface';

export abstract class AbstractCategoryRepository {
  abstract create(categoryData: CreateCategoryDto): Promise<ICategoryRecord>;
  abstract findAll(): Promise<ICategoryRecord[] | null>;
  abstract findById(id: string): Promise<ICategoryRecord | null>;
  abstract update(
    id: string,
    categoryData: UpdateCategoryDto,
  ): Promise<ICategoryRecord | null>;
  abstract delete(id: string): Promise<boolean>;
}
