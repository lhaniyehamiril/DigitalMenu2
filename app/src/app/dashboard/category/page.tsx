import CategoryPageClient from "@/components/category/doCraete";
import { getCurrentUser } from "@/packages/lib/prisma/auth/aw-auth";
import { notFound } from "next/navigation";

export default async function CategoriesPage({
  searchParams,
}: {
  searchParams: Promise<{ menuId?: string }>;
}) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return notFound()

  // Get menuId from query params
  const {menuId} = await searchParams;

  if (!menuId) {
    return <div>منو پیدا نشد</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <CategoryPageClient menuId={menuId} />
    </div>
  );
}
