import { QueryReposity } from "../../domain/repositories/queryRepo";
import { Category } from "../../domain/entities/category";
import { ListCategoriesResponse } from "@/packages/package-core/application/dtos";

export class ListCategoriesUseCase {
    constructor(
        private categoryRepository: QueryReposity<Category>
    ) { }

    async execute(): Promise<ListCategoriesResponse> {

        const response = await this.categoryRepository.findAll();
        let arrayResponse: ListCategoriesResponse = [];
        response.forEach((c) => {
            arrayResponse.push({
                id: c.id!,
                image: c.image!,
                menuId: c.menuId!,
                name: c.name!,
            })
        })
        return arrayResponse;

    }

}