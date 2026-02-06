import { prisma } from "@/lib/prisma/prisma";
import { UpdateProductRequest } from "@/packages/package-core/application/dtos";
import { DatabaseProductRepository } from "@/packages/package-core/core/infrastructure/adapters/outbound/database_product_respository";
import { UpdateProductUseCase } from "@/packages/package-core/core/use-cases/product/update_product_use_case";
import { ProductBasicProps } from "@/packages/package-core/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {

        const { id } = await params;
        const body = await req.json() as Partial<ProductBasicProps>;

        if (!body) {
            return NextResponse.json({ success: false, message: "menuId required" })
        }

        if (!id) {
            return NextResponse.json(
                { success: false, message: "Invalid Id" },
                { status: 400 }
            );
        }

        const productRepository = new DatabaseProductRepository(prisma);
        const DeleteProduct = new UpdateProductUseCase(productRepository as any);

        const deletedProduct = await DeleteProduct.execute({ id, updates: body });

        NextResponse.json({ success: true, data: deletedProduct }, { status: 201 })

    } catch (e) {
        return NextResponse.json(
            { success: false, error: e instanceof Error ? e.message : "Failed to delete product" },
            { status: 500 }
        );
    }
}