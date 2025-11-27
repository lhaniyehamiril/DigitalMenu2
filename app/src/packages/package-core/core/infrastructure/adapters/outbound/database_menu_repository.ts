import { PrismaClient } from "@prisma/client/extension";
import { Menu } from "../../../domain/entities/menu";
import { QueryReposity } from "../../../domain/repositories/queryRepo";

export class MenuDatabaseMenuRepository implements Partial<QueryReposity<Menu>> {
    constructor(
        private prisma: PrismaClient,
    ) { }

    async create(menu: Menu): Promise<Menu> {

        const final_payload = {
            ...menu,
            createdAt: new Date,
            createdBy: ""
        } as Menu
        try {
            console.log("data---", final_payload)
            return await this.prisma.create(final_payload);
        } catch (e) {
            throw new Error("Failed created", e as any)
        }

    }
    async findById(id: string): Promise<Menu | null> {
        try {
            return await this.prisma.findById(id);
        } catch (e) {
            throw new Error("Failed to find by id")
        }
    }
    async findAll(): Promise<Menu[]> {
        try {
            return await this.prisma.findAll();
        } catch (e) {
            throw new Error("Failed to fetch all", e as any)
        }
    }
    async delete(id: string): Promise<boolean> {
        try {
            return await this.prisma.delete(id)
        } catch (e) {
            throw new Error("Failed to delete", e as any)
        }
    }


}