import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/prisma";
import { DatabasecategoryRepository } from "@/packages/package-core/core/infrastructure/adapters/outbound/database_category_repository";
import { ListCategoriesByMenuIdUseCase } from "@/packages/package-core/core/use-cases/category/find_all_categores_by_menuId_user_case";

export async function GET(req: NextRequest, { params }: { params: Promise<{ menuId: string }> }) {
    try {
        const { menuId } = await params;
        const categoryRepository = new DatabasecategoryRepository(prisma);
        const categoryUseCase = new ListCategoriesByMenuIdUseCase(categoryRepository as any);

        const result = await categoryUseCase.execute(menuId);
        return NextResponse.json(
            { success: true, data: result },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : "fetch categories failed",
            },
            { status: 500 }
        );
    }
}
