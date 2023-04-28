import { useSession } from "next-auth/react";
import NewTweet from "@/components/NewTweet";

export default function Home() {
  const { data: session, status } = useSession();
  return <div>{session ? <NewTweet /> : <p>Not logged in!</p>}</div>;
}
