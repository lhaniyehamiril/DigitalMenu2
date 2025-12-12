import CategoryPageClient from "@/components/category/listPage";
import { getCurrentUser } from "@/packages/lib/prisma/auth/aw-auth";
import { getCurrentMenu } from "@/packages/lib/prisma/auth/menu-auth.ts";
import { redirect } from 'next/navigation'
export default async function CategoriesPage({
  searchParams,
}: {
  searchParams: Promise<{ menuId?: string }>;
}) {
  const currentMenu = await getCurrentMenu();

  const { menuId } = await searchParams;

  if (!currentMenu || !menuId) redirect("/auth");
  if (menuId !== currentMenu.id) redirect('/auth');

  return (
    <div className="p-5 max-w-[500px] mx-auto">
      <CategoryPageClient menuId={currentMenu.id!} />
    </div>
  );
}
