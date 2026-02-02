import { CreateMenuResponse, CreateMenuRquest } from "@/packages/package-core/application/dtos";
import { Menu } from "../../domain/entities/menu";
import { QueryReposity } from "../../domain/repositories/queryRepo";

export class CreateMenuUseCase {
    constructor(
        private menuRepository: QueryReposity<Menu>
    ) { }

    async #checkForSameDId(displayId: string): Promise<boolean> {
        try {
            if (!this.menuRepository.findOne) return false;
            const exist = await this.menuRepository.findOne({ displayId })
            console.log("exist:", !!exist)
            return !!exist;
        } catch (e) {
            throw new Error("Faild to check for same displayId", e as any)
        }
    }

    async execute(menuData: CreateMenuRquest): Promise<CreateMenuResponse> {
        const crateMenuInput = new Menu({
            ...menuData
        })
        if (await this.#checkForSameDId(menuData.displayId)) throw new Error("displayId already exists, displayId must be unique");
        const created = await this.menuRepository.create(crateMenuInput);
        return {
            id: created.id!,
            displayId: created.displayId!,
            name: created.name,
            userId: created.userId!,
            avatar: created.avatar,
            bio: created.bio,
            connections: created.connections,
            subname: created.subname 
        }
    }

}