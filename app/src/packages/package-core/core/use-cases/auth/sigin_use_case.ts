import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/user_repository";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export class LoginUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string, password: string): Promise<{ user: User; token: string }> {
    const user = await this.userRepository.findByEmail(email);

    if (!user || !(await compare(password, user.password))) {
      throw new Error("Invalid credentials");
    }

    const token = this.generateToken(user.id!);

    const { password: _, ...safeUser } = user as any;

    return { user: safeUser, token };
  }

  private generateToken(userId: string): string {
    return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: "7d" });
  }
}
