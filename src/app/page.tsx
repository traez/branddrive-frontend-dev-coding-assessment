import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Sandbox from "@/components/Sandbox";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="flex flex-col items-center justify-center h-full gap-8">
      <p>{!session ? "Not authenticated" : session.user.name}</p>
      <Sandbox />
    </div>
  );
}
