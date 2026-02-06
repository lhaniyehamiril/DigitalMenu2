import { Product } from "../../domain/entities/product";
import { QueryReposity } from "../../domain/repositories/queryRepo";
// DELETE Product
export class DeleteProductUseCase {
    constructor(private productRepository: QueryReposity<Product>) {}

    async execute(id: string): Promise<boolean> {
       return await this.productRepository.delete(id);
    }
}
