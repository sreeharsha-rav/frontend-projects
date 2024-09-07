import { Tweets } from "@/components/tweet/GetTweet";
import NewTweet from "@/components/tweet/NewTweet";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          This is a protected page that you can only see as an authenticated
          user
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4">Your user details</h2>
        <div className="flex gap-2 items-center">
          <span className="font-bold">Email:</span>
          <span>{user.email}</span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="font-bold">Image:</span>
          <Image
            src={user.user_metadata.avatar_url}
            alt="User avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
        <div className="flex gap-2 items-center">
          <span className="font-bold">Username:</span>
          <span>{user.user_metadata.user_name}</span>
        </div>
        <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
      <Tweets />
      <NewTweet />
    </div>
  );
}
