import { ProductBasicProps, ProductProps } from "@/packages/package-core/types";
import { Product } from "../../domain/entities/product";
import { QueryReposity } from "../../domain/repositories/queryRepo";
import { UpdateProductRequest, UpdateProductResponse } from "@/packages/package-core/application/dtos";

// UPDATE Product
export class UpdateProductUseCase {
    constructor(private productRepository: QueryReposity<ProductProps>) { }

    async execute({ id, updates }: UpdateProductRequest): Promise<UpdateProductResponse> {
        const updatedProduct = await this.productRepository.update(id, updates);
        return {
            id: updatedProduct.id!,
            categories: updatedProduct.categories,
            description: updatedProduct.description,
            media: updatedProduct.media,
            menuId: updatedProduct.menuId,
            price: updatedProduct.price,
            title: updatedProduct.title,
        };
    }
}
