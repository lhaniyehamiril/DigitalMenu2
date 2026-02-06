import { QueryReposity } from "../../domain/repositories/queryRepo";
import { Category } from "../../domain/entities/category";
import { UpdateCategoryRequest, UpdatedCategoryResponse } from "@/packages/package-core/application/dtos";

export class UpdateCategoryUseCase {
    constructor(
        private categoryRepository: QueryReposity<Category>
    ) { }

    async execute({ id, updates }: UpdateCategoryRequest): Promise<UpdatedCategoryResponse> {
        const updatedCategory = await this.categoryRepository.update(id, updates);
        return {
            id: updatedCategory.id!,
            image: updatedCategory.image!,
            menuId: updatedCategory.menuId!,
            name: updatedCategory.name!
        }
    }
}
