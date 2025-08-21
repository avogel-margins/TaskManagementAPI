import { Injectable, NotFoundException } from '@nestjs/common';

import { AbstractCategoryService } from '../abstract/category.abstract.service';
import { AbstractCategoryRepository } from '../abstract/category.abstract.repository';
import { ICategory, ICategoryRecord } from '../interface/category.interface';

@Injectable()
export class CategoryService extends AbstractCategoryService {
  constructor(private readonly categoryRepository: AbstractCategoryRepository) {
    super();
  }

  async createCategory(data: Partial<ICategory>): Promise<ICategoryRecord> {
    return await this.categoryRepository.create(data);
  }

  async getCategoryById(id: string): Promise<ICategoryRecord> {
    const category = await this.categoryRepository.getCategoryById(id);
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return category;
  }

  async updateCategory(id: string, data: Partial<ICategory>): Promise<boolean> {
    const existingCategory = await this.categoryRepository.getCategoryById(id);
    if (!existingCategory) {
      throw new NotFoundException('Category not found');
    }
    await this.categoryRepository.update(id, data);
    return true;
  }

  async deleteCategory(id: string): Promise<boolean> {
    const existingCategory = await this.categoryRepository.getCategoryById(id);
    if (!existingCategory) {
      throw new NotFoundException('Category not found');
    }
    await this.categoryRepository.delete(existingCategory);
    return true;
  }
}
