import { PrismaClient } from "@/generated/prisma/client";
import { Product } from "../../../domain/entities/product";
import { QueryReposity } from "../../../domain/repositories/queryRepo";

export class DatabaseProductRepository implements Partial<QueryReposity<Product>> {
    constructor(
        private prisma: PrismaClient
    ) { }

    async create(input: Product): Promise<Product> {

        try {
            const created = await this.prisma.product.create({
                data: {
                    description: input.description ?? '',
                    price: input.price ?? 0,
                    title: input.title ?? '',
                }
            });
            return new Product({ ...created })

        } catch (e) {
            throw new Error("Failed created", e as any)
        }

    }
    async findById(id: string): Promise<Product | null> {
        try {
            const finded = await this.prisma.product.findUnique({ where: { id } });
            return finded ? new Product({ ...finded }) : null;
        } catch (e) {
            throw new Error("Failed to find by id", e as any)
        }
    }
    async findAll(): Promise<Product[]> {
        try {
            const findedMany = await this.prisma.product.findMany();
            const response: Product[] = [];
            if (findedMany.length > 0) {
                findedMany.forEach(p =>
                    response.push(
                        new Product({ ...p })
                    )
                )
            }
            return response;
        } catch (e) {
            throw new Error(`Failed to fetch all: ${e instanceof Error ? e.message : e}`)
        }
    }
    async delete(id: string): Promise<boolean> {
        try {
            const deleted = await this.prisma.product.delete({ where: { id } });
            return !!deleted
        } catch (e) {
            throw new Error("Failed to delete", e as any)
        }
    }
    async update(id: string, data: Partial<Product>): Promise<Product> {
        try {
            const updated = await this.prisma.product.update({
                where: { id },
                data,
            });
            return new Product({ ...updated })
        } catch (e) {
            throw new Error("Failed to update", e as any)
        }
    }
    async findByField(key: string, value: string): Promise<Product[]> {
        try {
            const findedByField = await this.prisma.product.findMany({
                where: {
                    [key]: value
                }
            });
             const response: Product[] = [];
            if (findedByField.length > 0) {
                findedByField.forEach(p =>
                    response.push(
                        new Product({ ...p })
                    )
                )
            };
            return response;
        } catch (e) {
            throw new Error(`Failed to fetch by field: ${e instanceof Error ? e.message : e}`)
        }
    }

}