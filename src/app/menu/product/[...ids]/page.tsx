import { ProductDetailComponent } from "@/components/product/Pdp";
import { FindProductByIdResponse } from "@/packages/package-core/application/dtos";

interface PageProps {
  params: Promise<{
    ids: [string, string];
  }>;
}

async function fetchProductDetail(productId: string): Promise<FindProductByIdResponse> {
  const res = await fetch(
    `http://localhost:3000/api/product/product-detail/${productId}`,
    { cache: "no-store" } // or 'force-cache' if safe
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product detail");
  }

  const json = await res.json();
  return json.data;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const [, productId] = (await params).ids;

  const productDetail = await fetchProductDetail(productId);

  return <ProductDetailComponent initial={productDetail} />;
}
