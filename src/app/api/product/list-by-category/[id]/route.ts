// import { prisma } from "@/lib/prisma/prisma";
import { FindManyProductByCategoryResponse } from "@/packages/package-core/application/dtos";
// import { DatabaseProductRepository } from "@/packages/package-core/core/infrastructure/adapters/outbound/database_product_respository";
// import { FindManyProductsByCategoryUseCase } from "@/packages/package-core/core/use-cases/product/find_many_by_category_use_case";
import { NextRequest, NextResponse } from "next/server";
import { productsMock } from "../../../../../../public/mock/product/product";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {

        const { id } = await params;
        if (!id) {
            return NextResponse.json(
                { success: false, message: "Invalid Id" },
                { status: 400 }
            );
        }

        // const productRepository = new DatabaseProductRepository(prisma);
        // const findProductByCategoryUseCase = new FindManyProductsByCategoryUseCase(productRepository as any);

        const findedProductByCategory = productsMock;
        // const findedProductByCategory = await findProductByCategoryUseCase.execute(id);

        return NextResponse.json({ success: true, data: findedProductByCategory }, { status: 201 })

    } catch (e) {
        return NextResponse.json(
            { success: false, error: e instanceof Error ? e.message : "Failed to find product by categhory" },
            { status: 500 }
        );
    }
}