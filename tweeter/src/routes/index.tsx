import Feed from '@/components/tweets/Feed';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

// This function is supposed to be called in the browser console only in development mode -> Test it!!
// function testEnvironmentVariables() {
//   if (import.meta.env.DEV) {
//     console.log('Development mode');
//     console.log('API URL:', import.meta.env.VITE_SUPABASE_URL);
//     console.log('Debug mode:', import.meta.env.VITE_SUPABASE_ANON_KEY);
//   }
// }

function Index() {
  //testEnvironmentVariables();
  console.log('Rendering Index in main route');

  return <Feed />;
}
