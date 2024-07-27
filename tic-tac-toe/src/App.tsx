import TicTacToe from "./components/Game";
import { useState } from "react";

/**
 * The main application component that renders the Tic Tac Toe game.
 * @component
 * @returns {JSX.Element} The rendered Tic Tac Toe game.
 * 
 * @see {@link TicTacToe}
 */
function App() {
  const [enableAI, setEnableAI] = useState(false);

  const handleToggleAI = () => {
    setEnableAI((prev) => !prev);
  }

  return (
    <>
      <div className="flex justify-center items-center p-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={enableAI} onChange={handleToggleAI} />
          <span>Play against Computer</span>
        </label>
      </div>
      <TicTacToe aiOpponent={enableAI} />
    </>
  );
}

export default App;
