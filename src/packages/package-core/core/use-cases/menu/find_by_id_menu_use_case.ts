import { FindMenuByIdResponse } from "@/packages/package-core/application/dtos";
import { Menu } from "../../domain/entities/menu";
import { QueryReposity } from "../../domain/repositories/queryRepo";
// FIND BY ID
export class FindMenuByIdUseCase {
    constructor(private menuRepository: QueryReposity<Menu>) {}

    async execute(id: string): Promise<FindMenuByIdResponse | null> {
        const menu = await this.menuRepository.findById(id);
        return menu ? {
            id: menu.id!,
            displayId: menu.displayId!,
            name: menu.name,
            userId: menu.userId!,
            avatar: menu.avatar,
            bio: menu.bio,
            connections: menu.connections,
            subname: menu.subname,
        } : null;
    }
}
