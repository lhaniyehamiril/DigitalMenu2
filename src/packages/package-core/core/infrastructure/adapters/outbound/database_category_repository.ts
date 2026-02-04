// category repository database

import { PrismaClient } from '@/generated/prisma/client';
import { Category } from '../../../domain/entities/category';
import { QueryReposity } from '../../../domain/repositories/queryRepo';

export class DatabasecategoryRepository implements Partial<QueryReposity<Category>> {
    constructor(private prisma: PrismaClient) { }

    async findById(id: string): Promise<Category | null> {
        const category = await this.prisma.category.findUnique({ where: { id } });
        return category ? new Category(category) : null;
    }

    async create(input: Category): Promise<Category> {
        const createdcategory = await this.prisma.category.create({
            data: {
                name: input.name!,
                menuId: input.menuId!,
                image: input.image!,
            },
        });
        return new Category(createdcategory);
    }

    async delete(id: string): Promise<boolean> {
        const deleted = await this.prisma.category.delete({ where: { id } });
        if (!deleted) throw new Error("Error on delete category")
        return true;
    }

    async update(id: string, changes: Partial<Category>): Promise<Category> {
        const updated = await this.prisma.category.update({
            where: { id },
            data: changes
        })
        return new Category(updated)
    }

    async findAll(): Promise<Category[]> {
        try {
            const response = await this.prisma.category.findMany();
            // return response.map(c => new Category(c));
            return response as any[]
        } catch (e) {
            throw new Error("Faild to find all", e as any)
        }
    }
    async findByField(key: string, value: any): Promise<Category[] | null> {
        try {
            const response = await this.prisma.category.findMany({
                where: { [key]: value }
            })
            const ArrayResponse: Category[] = [];
            response.forEach((c) => {
                ArrayResponse.push(new Category({
                    id: c.id,
                    image: c.image,
                    menuId: c.menuId,
                    name: c.name    
                }))
            });
            return ArrayResponse;
        } catch (e) {
            throw new Error("Faild to find by field", e as any)
        }
    }
}