import { prisma } from "@/lib/prisma/prisma";
import { DatabaseProductRepository } from "@/packages/package-core/core/infrastructure/adapters/outbound/database_product_respository";
import { DeleteProductUseCase } from "@/packages/package-core/core/use-cases/product/delete_product_use_case";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {

        const { id } = await params;
        if (!id) {
            return NextResponse.json(
                { success: false, message: "Invalid Id" },
                { status: 400 }
            );
        }

        const productRepository = new DatabaseProductRepository(prisma);
        const DeleteProduct = new DeleteProductUseCase(productRepository as any);

        const deletedProduct = await DeleteProduct.execute(id);

        NextResponse.json({ success: true, data: deletedProduct }, { status: 201 })

    } catch (e) {
        return NextResponse.json(
            { success: false, error: e instanceof Error ? e.message : "Failed to delete product" },
            { status: 500 }
        );
    }
}