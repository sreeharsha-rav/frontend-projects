import { useEffect } from 'react';
import { loadPreline } from './utils/prelineInit';
import ThemeToggle from './components/ThemeToggle';

function App() {

  // Initialize preline UI dynamically with code splitting
  useEffect(() => {
    const initNewElements = async () => {
      const HSStaticMethods = await loadPreline()
      HSStaticMethods.autoInit()
    }
    initNewElements()
  }, [])

  return (
    <div>
      {/* Dark Mode Toggle */}
      <ThemeToggle />
      <h1 className="text-4xl dark:text-white">h1. Preline heading</h1>
      <h2 className="text-3xl dark:text-white">h2. Preline heading</h2>
      <h3 className="text-2xl dark:text-white">h3. Preline heading</h3>
      <h4 className="text-xl dark:text-white">h4. Preline heading</h4>
      <h5 className="text-lg dark:text-white">h5. Preline heading</h5>
      <h6 className="text-base dark:text-white">h6. Preline heading</h6>
    </div>
  );
}

export default App;
