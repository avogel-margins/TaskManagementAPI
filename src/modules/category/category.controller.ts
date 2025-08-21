import { Controller, Get, Post, Param, Body, Patch, Delete } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { AbstractCategoryService } from "./abstract/category.abstract.service";
import { CategoryParams } from "./dto/category.params.dto";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@ApiTags("Categories")
@Controller("categories")
export class CategoryController {
    constructor(private readonly categoryService: AbstractCategoryService) {}

    @Get(":id")
    async getCategoryById(@Param() { categoryId }: CategoryParams) {
        return this.categoryService.getCategoryById(categoryId);
    }

    @Post()
    async createCategory(@Body() data: CreateCategoryDto) {
        return this.categoryService.createCategory(data);
    }

    @Patch(":id")
    async updateCategory(@Param() { categoryId }: CategoryParams, @Body() data: Partial<UpdateCategoryDto>) {
        return this.categoryService.updateCategory(categoryId, data);
    }

    @Delete(":id")
    async deleteCategory(@Param() { categoryId }: CategoryParams) {
        return this.categoryService.deleteCategory(categoryId);
    }
}
