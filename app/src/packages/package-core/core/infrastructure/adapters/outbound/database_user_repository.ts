// user repository database

import { PrismaClient } from '@prisma/client';
import { User } from '../../../domain/entities/user';
import { UserRepository } from '../../../domain/repositories/user_repository';

export class DatabaseUserRepository implements UserRepository {
  constructor(private prisma: PrismaClient) {}

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user ? new User(user) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return user ? new User(user) : null;
  }

  async create(user: User): Promise<User> {
    const createdUser = await this.prisma.user.create({
      data: {
        id: user.id,
        email: user.email,
        password: user.password,
        name: user.name,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
    return new User(createdUser);
  }

  async delete(id: string): Promise<boolean> {
      const deleted = await this.prisma.useer.delete(id);
      return deleted
  }

  async update(id: string, user: Partial<User>): Promise<User> {
    // TODO
      return {} as User
  }

  // TODO: Implement other methods...
}