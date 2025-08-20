import { ICategory, ICategoryRecord } from '../interface/category.interface';

export abstract class AbstractCategoryService {
  abstract createCategory(data: ICategory): Promise<ICategoryRecord>;
  abstract getCategoryById(id: string): Promise<ICategoryRecord>;
  abstract updateCategory(
    id: string,
    data: Partial<ICategory>,
  ): Promise<ICategoryRecord>;
  abstract deleteCategory(id: string): Promise<boolean>;
}
