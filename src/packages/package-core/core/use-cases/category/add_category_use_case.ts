import { Category } from "../../domain/entities/category";
import { QueryReposity } from "../../domain/repositories/queryRepo";
import { CreateCategoryRequest, CreateCategoryResponse } from "@/packages/package-core/application/dtos";

export class CreateCategoryUseCase {
    constructor(
        private categoryRepository: QueryReposity<Category>
    ) { }

    async execute(menuData: CreateCategoryRequest): Promise<CreateCategoryResponse> {
        const createCategoryInput = new Category({
            ...menuData
        })
        const created = await this.categoryRepository.create(createCategoryInput);
        return {
            id: created.id!,
            name: created.menuId!,
            image: created.image!,
            menuId: created.menuId!,
        }
    }

}