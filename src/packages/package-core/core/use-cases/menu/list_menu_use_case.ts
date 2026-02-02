import { ListMenusResponse } from "@/packages/package-core/application/dtos";
import { Menu } from "../../domain/entities/menu";
import { QueryReposity } from "../../domain/repositories/queryRepo";

// FIND ALL
export class ListMenusUseCase {
    constructor(private menuRepository: QueryReposity<Menu>) { }

    async execute(): Promise<ListMenusResponse> {
        const response = await this.menuRepository.findAll();
        const arrayResponse: ListMenusResponse = [];
        response.forEach(m => {
            arrayResponse.push({
                displayId: m.displayId!,
                userId: m.userId!,
                name: m.name,
                subname: m.subname,
                avatar: m.avatar,
                bio: m.bio,
                connections: m.connections,
                id: m.id!
            })
        });
        return arrayResponse;
    }
}
