// User Auth 

import { User } from "../../domain/entities/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { QueryReposity } from "../../domain/repositories/queryRepo";
import { SignUpRequest, SignUpResponse } from "@/packages/package-core/application/dtos";

export class SignupUseCase {
    constructor(
        private userRepository: QueryReposity<User>,
        private jwtSecret: string,
    ) { }

    async execute(input: SignUpRequest): Promise<SignUpResponse> {

        const existingUser = await this.userRepository.findUnique(input.email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        const hashedPassword = await bcrypt.hash(input.password, 10);


        const user = new User({
            email: input.email,
            password: hashedPassword,
            name: input.name,
            avatar: '',
        });
        const createdUser = await this.userRepository.create(user);
        if (!createdUser.id || !createdUser.email) throw new Error('Error on create user response')
        const token = this.generateToken(createdUser.id!);

        return {
            user: {
                id: createdUser.id,
                name: createdUser.name,
                email: createdUser.email,
            },
            token
        };
    }

    private generateToken(userId: string): string {
        return jwt.sign(
            { userId },
            this.jwtSecret,
            { expiresIn: "7d" }
        );
    }
}
