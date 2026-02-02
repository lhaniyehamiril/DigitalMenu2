import { FindMenuByUserIdResponse } from "@/packages/package-core/application/dtos";
import { Menu } from "../../domain/entities/menu";
import { QueryReposity } from "../../domain/repositories/queryRepo";
// FIND BY UserId
export class FindMenuByUserIdUseCase {
    constructor(private menuRepository: QueryReposity<Menu>) { }

    async execute(userId: string): Promise<FindMenuByUserIdResponse | null> {
        if (!this.menuRepository.findByField) return null;
        const menu = await this.menuRepository.findByField('userId', userId);
        if (!menu || menu.length === 0) return null;
        return {
            id: menu[0].id!,
            displayId: menu[0].displayId!,
            userId: menu[0].userId!,
            name: menu[0].name,
            subname: menu[0].subname,
            avatar: menu[0].avatar,
            bio: menu[0].bio,
            connections: menu[0].connections,
        };
    }
}
