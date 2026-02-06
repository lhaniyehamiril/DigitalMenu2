import { QueryReposity } from "../../domain/repositories/queryRepo";
import { ListCategoriesByMenuIdResponse } from "@/packages/package-core/application/dtos";
import { Category } from "../../domain/entities/category";

export class ListCategoriesByMenuIdUseCase {
    constructor(
        private categoryRepository: QueryReposity<Category>
    ) { }

    async execute(menuId: string): Promise<ListCategoriesByMenuIdResponse> {

        const response = await this.categoryRepository.findByField('menuId', menuId);
        if (!response) return [];
        let arrayResponse: ListCategoriesByMenuIdResponse = [];
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