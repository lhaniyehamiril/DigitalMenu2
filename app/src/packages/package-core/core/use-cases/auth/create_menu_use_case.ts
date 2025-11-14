import { MenuBasicProps, MenuCreateInput } from "@/packages/package-core/types";
import { Menu } from "../../domain/entities/menu";
import { MenuRepository } from "../../domain/repositories/menu_repository";
import { UserRepository } from "../../domain/repositories/user_repository";

export class CreateMenuUseCase {
    constructor(
        private menuRepository: MenuRepository,
        private userRepository: UserRepository
    ) { }

    async execute(userId: string, menuData: MenuCreateInput): Promise<Menu> {
        // Validate user exists
        const user = await this.userRepository.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }

        const menu = new Menu({
          name: menuData.name,
          displayId: menuData.displayId,
          avatar: menuData.avatar,
          bio: menuData.bio,
          categories: menuData.categories,
          subName: menuData.subName,
          connections: menuData.connections,
          createdAt: new Date,
          createdBy: menuData.createdBy
        });

        return await this.menuRepository.create(menu);
    }

}