import { createClient } from "@/utils/supabase/server"

// server-side supabase client
const supabase = createClient()

export const TweetTest = async () => {
  const { data, error } = await supabase
    .from('tweets')
    .select("*, profiles(*)");

  if (error) console.log('error', error)
  console.log('data', data)
  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  )
}