import { User } from "../../domain/entities/user";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { SignInRequest, SignInResponse } from "@/packages/package-core/application/dtos";
import { QueryReposity } from "../../domain/repositories/queryRepo";

export class LoginUseCase {
  constructor(
    private userRepository: QueryReposity<User>,
    private jwtSecret: string,
  ) { }

  async execute(input: SignInRequest): Promise<SignInResponse> {
    const user = await this.userRepository.findUnique(input.email);

    if (!user) {
      return {
        message: "user not found",
        status: 404,
      }
    }
    const passwordIsValid = await compare(input.password, user.password!);
    if (!passwordIsValid) {
      return {
        message: "Invalid password",
        status: 400,
      }
    }

    const token = this.generateToken(user.id!);

    return {
      user: {
        id: user.id!,
        email: user.email!,
        name: user.name,
        avatar: user.avatar
      }, token
    };
  }

  private generateToken(userId: string): string {
    return jwt.sign({ userId }, this.jwtSecret, { expiresIn: "7d" });
  }
}
