import FindUserByIdResponse from "@/packages/package-core/application/dtos";
import { User } from "../../domain/entities/user";
import { QueryReposity } from "../../domain/repositories/queryRepo";
// FIND BY ID
export class FindUserByIdUseCase {
    constructor(private userRepository: QueryReposity<User>) {}

    async execute(id: string): Promise<FindUserByIdResponse | null> {
        const response = await this.userRepository.findById(id);
        return response ? {
            id: response.id!,
            avatar: response.avatar,
            email: response.email!,
            name: response.name,
        } : null;
    }
}
