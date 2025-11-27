import { MenuBasicProps, MenuCreateInput, UserProps } from "@/packages/package-core/types";
import { Menu } from "../../domain/entities/menu";
import { QueryReposity } from "../../domain/repositories/queryRepo";
import { User } from "../../domain/entities/user";

export class CreateMenuUseCase {
    constructor(
        private menuRepository: QueryReposity<Menu>,
        private userRepository: QueryReposity<User>
    ) { }

    async #verifyUser(user: string): Promise<UserProps | null> {
        try {
            const existUser = await this.userRepository.findById(user);
            if (existUser) return existUser
        } catch (e) {
            throw Error(e as any)
        }
        return null
    }

    async execute(menuData: MenuBasicProps, userId: string): Promise<Menu> {

        // const checkForUser = await this.#verifyUser(userId);
        // if (!checkForUser) throw new Error("Error on verify user")

        // const d = {
        //     name: menuData.name,
        //     displayId: menuData.displayId,
        //     avatar: menuData.avatar,
        //     bio: menuData.bio,
        //     categories: menuData.categories,
        //     subName: menuData.subName,
        //     connections: menuData.connections,
        //     createdAt: new Date,
        //     createdBy: ""
        // };
        // const menu = new Menu(d)

        return await this.menuRepository.create(menuData as any);
    }

}