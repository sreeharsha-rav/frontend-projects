import TicTacToe from "./components/Game";

/**
 * The main application component that renders the Tic Tac Toe game.
 * @component
 * @returns {JSX.Element} The rendered Tic Tac Toe game.
 * 
 * @see {@link TicTacToe}
 */
function App() {

  return (
    <>
      <TicTacToe onGameEnd={(winner) => console.log("Game ended! Winner:", winner)} />
    </>
  );
}

export default App;
