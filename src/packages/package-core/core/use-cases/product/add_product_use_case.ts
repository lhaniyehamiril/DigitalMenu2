import { QueryReposity } from "../../domain/repositories/queryRepo";
import { Product } from "../../domain/entities/product";
import { AddProductRequest, AddProductResponse } from "@/packages/package-core/application/dtos";

export class CreateProductUseCase {
    constructor(
        private productRepository: QueryReposity<Product>
    ) { }

    async execute(productProps: AddProductRequest): Promise<AddProductResponse> {
        const createProductInput = new Product({ ...productProps })
        const createdProduct = await this.productRepository.create(createProductInput);
        return {
            id: createdProduct.id!,
            menuId: createdProduct.menuId!,
            title: createdProduct.title!,
            categories: createdProduct.categories!,
            description: createdProduct.description!,
            media: createdProduct.media!,
            price: createdProduct.price!
        }
    }

}