import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { CategoryController } from "./category.controller";
import { Category } from "./entities/category.entity";
import { CategoryService } from "./service/category.service";
import { CategoryRepository } from "./service/category.repository";
import { AbstractCategoryRepository } from "./abstract/category.abstract.repository";
import { AbstractCategoryService } from "./abstract/category.abstract.service";

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [
    CategoryService,
    CategoryRepository,
    {
      provide: AbstractCategoryRepository,
      useExisting: CategoryRepository,
    },
    {
      provide: AbstractCategoryService,
      useExisting: CategoryService,
    },
  ],
  exports: [AbstractCategoryRepository, AbstractCategoryService],
})
export class CategoryModule {}
