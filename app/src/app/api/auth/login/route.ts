// apps/nextjs-app/app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { LoginUseCase } from '@/packages/package-core/core/use-cases/auth/sigin_use_case';
import { DatabaseUserRepository } from '@/packages/package-core/core/infrastructure/adapters/outbound/database_user_repository';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    
    const userRepository = new DatabaseUserRepository(prisma);
    const loginUseCase = new LoginUseCase(userRepository);
    
    const result = await loginUseCase.execute(email, password);
    
    return NextResponse.json({ 
      success: true, 
      data: result 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Login failed' 
    }, { status: 400 });
  }
}