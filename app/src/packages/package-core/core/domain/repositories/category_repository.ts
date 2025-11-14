import { Category } from "../entities/category";

export interface CategoryRepository {
    findById(id: string): Promise<Category | null>;
    findByMenuId(menuId: string): Promise<Category[]>;
    create(category: Category): Promise<Category>;
    update(id: string, category: Partial<Category>): Promise<Category>;
    delete(id: string): Promise<boolean>;
}