import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "@/components/submit-button";
import { addTweet } from "@/app/tweet_actions";

export default function NewTweet() {

  return (
    <form>
      <Label htmlFor="title">What's happening?</Label>
      <Input 
        name="title" 
        placeholder="What's happening?" 
        />
        <SubmitButton pendingText="Adding a new tweet..." formAction={addTweet}>
          Add Tweet
        </SubmitButton>
    </form>
  );

};