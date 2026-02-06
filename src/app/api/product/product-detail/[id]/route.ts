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

        const findedProductById =  productsMock.find(p => p.id == id);
        if(!findedProductById) return NextResponse.json(
                { success: false, message: `Product with id ${id} not found` },
                { status: 404 }
            );

        return NextResponse.json({ success: true, data: findedProductById }, { status: 200 })

    } catch (e) {
        return NextResponse.json(
            { success: false, error: e instanceof Error ? e.message : "Failed to find product by id" },
            { status: 500 }
        );
    }
}