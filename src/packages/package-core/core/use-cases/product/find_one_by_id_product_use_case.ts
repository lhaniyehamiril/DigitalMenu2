import { Product } from "../../domain/entities/product";
import { QueryReposity } from "../../domain/repositories/queryRepo";
import { FindProductByIdResponse } from "@/packages/package-core/application/dtos";
// FIND one BY ID
export class FindProductByIdUseCase {
    constructor(private productRepository: QueryReposity<Product>) { }

    async execute(id: string): Promise<FindProductByIdResponse | null> {
        const findedProduct = await this.productRepository.findById(id);
        return findedProduct ? {
            id: findedProduct.id!,
            categories: findedProduct.categories,
            description: findedProduct.description,
            media: findedProduct.media,
            menuId: findedProduct.menuId,
            price: findedProduct.price,
            title: findedProduct.title,
        } : null;
    }
}
