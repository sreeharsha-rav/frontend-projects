import { useEffect } from 'react';
import { loadPreline } from './utils/prelineInit';
import ThemeToggle from './components/ThemeToggle';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import PokemonContainer from './containers/PokemonContainer';

function App() {

  // Initialize preline UI dynamically with code splitting
  useEffect(() => {
    const initNewElements = async () => {
      const HSStaticMethods = await loadPreline()
      HSStaticMethods.autoInit()
    }
    initNewElements()
  }, [])

  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app',
    cache: new InMemoryCache(),
  });

  return (
    <div>
      {/* Dark Mode Toggle */}
      <ThemeToggle />

      <ApolloProvider client={client}>
        <main>
          <PokemonContainer />
        </main>
      </ApolloProvider>
    </div>
  );
}

export default App;
