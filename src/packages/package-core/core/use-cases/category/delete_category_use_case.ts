import { CategoryProps } from "@/packages/package-core/types";
import { QueryReposity } from "../../domain/repositories/queryRepo";

export class DeleteCategoryUseCase {
    constructor(
        private categoryRepository: QueryReposity<CategoryProps>
    ) { }

    async execute(id: string): Promise<boolean> {

        const deleted = await this.categoryRepository.delete(id);
        return deleted;
    }

}