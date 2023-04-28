import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return null;
  }
  if (session) {
    router.push("/home");
  }
  return (
    <div>
      <h1>Home Page</h1>
      <a href="/api/auth/signin">Login</a>
    </div>
  );
}
