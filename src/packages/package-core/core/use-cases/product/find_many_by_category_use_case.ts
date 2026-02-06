import { Product } from "../../domain/entities/product";
import { QueryReposity } from "../../domain/repositories/queryRepo";
import { FindManyProductByCategoryResponse } from "@/packages/package-core/application/dtos";
// FIND Many by ID
export class FindManyProductsByCategoryUseCase {
    constructor(private productRepository: QueryReposity<Product>) { }

    async execute(id: string): Promise<FindManyProductByCategoryResponse | null> {
        const findedProducts = await this.productRepository.findByField('categories', [id]);
        let propducts: FindManyProductByCategoryResponse = [];
        if(findedProducts && findedProducts?.length > 0){
            findedProducts.forEach(p => {
                propducts.push({
                    id: p.id!,
                    categories: p.categories,
                    description: p.description,
                    media: p.media,
                    menuId: p.menuId,
                    price: p.price,
                    title: p.title,
                })
            })
        }
        return findedProducts ? propducts : null;
    }
}
