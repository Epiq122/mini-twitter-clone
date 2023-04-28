import { useSession } from "next-auth/react";
import { useState } from "react";

export default function NewTweet() {
  const [content, setContent] = useState("");
  const { data: session } = useSession();

  if (!session || !session.user) return null;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!content) {
      alert("No Content");
      return;
    }
    await fetch("/api/tweet", {
      body: JSON.stringify({
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    setContent("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex">
        <div className="flex-1 px-1 pt-2 mt-2 mr-1 ml-1">
          <textarea
            className="border p-4 w-full text-lg font-medium bg-transparent outline-none color-primary "
            rows={2}
            cols={50}
            placeholder="What's happening?"
            name="content"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 mb-5">
          <button className="border float-right px-8 py-2 mt-0 mr-2 font-bold rounded-full bg-blue-50">
            Tweet
          </button>
        </div>
      </div>
    </form>
  );
}
