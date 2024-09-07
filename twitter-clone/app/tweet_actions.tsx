"use server";

import { createClient } from "@/utils/supabase/server"

const supabase = createClient()

export const addTweet = async (formData: FormData) => {
  const title = formData.get("title")?.toString();
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (user) {
    await supabase.from("tweets").insert({ title, user_id: user.id });
  }
  
  if (userError) {
    console.error(userError.code + " " + userError.message);
    return { error: userError.message };
  }
};

export const getTweets = async () => {
  const { data, error } = await supabase.from("tweets").select("*, profiles(*)");
  if (error) {
    console.error(error.code + " " + error.message);
    return { error: error.message };
  }
  return { data,  error };
};

export const updateTweet = async (tweetId: string, formData: FormData) => {
  const title = formData.get("title")?.toString();
  await supabase.from("tweets").update({ title }).match({ id: tweetId });
}

export const deleteTweet = async (tweetId: string) => {
  await supabase.from("tweets").delete().match({ id: tweetId });
};