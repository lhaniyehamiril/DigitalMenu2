import UserProfileComponent from "@/components/dashboard/userProfile";
import { getCurrentUser } from "@/packages/lib/prisma/auth/aw-auth";
import { redirect  } from 'next/navigation';

export default async function UserProfilePage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const currentUser = await getCurrentUser();
  console.log("current user is", currentUser)
  if(!currentUser) {
    redirect("/auth");
  }
  if(id !== currentUser.id) {
    redirect("/auth");
  }
  return <UserProfileComponent user={currentUser} />
}