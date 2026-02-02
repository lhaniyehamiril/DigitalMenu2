import { UpdateMenuRequest, UpdateMenuResponse } from "@/packages/package-core/application/dtos";
import { Menu } from "../../domain/entities/menu";
import { QueryReposity } from "../../domain/repositories/queryRepo";
// UPDATE
export class UpdateMenuUseCase {
    constructor(private menuRepository: QueryReposity<Menu>) { }

    async execute({ id, data }: UpdateMenuRequest): Promise<UpdateMenuResponse> {
        const updated = await this.menuRepository.update(id, data);
        return {
            id: updated.id!,
            displayId: updated.displayId!,
            userId: updated.userId!,
            name: updated.name,
            subname: updated.subname,
            avatar: updated.avatar,
            bio: updated.bio,
            connections: updated.connections,
        };
    }
}
