import Board from "./Board";
import { useEffect, useState } from "react";

const styles = {
    wrapper: "flex flex-col items-center space-y-4 mt-8",
    title: "text-2xl font-bold",
    subtitle: "text-lg font-medium",
    reset_button: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
};

/**
 * Tic Tac Toe game component.
 * @component
 * @description The Tic Tac Toe game that contains the board and the game logic.
 * 
 * @param {Object} props
 * @param {boolean} props.aiOpponent - Whether the game should have an AI opponent.
 * @param {Function} props.onGameEnd - The function to call when the game ends.
 * 
 * @returns {JSX.Element} The rendered Tic Tac Toe component.
 * 
 * @example
 * <TicTacToe aiOpponent={true} onGameEnd={(winner) => console.log("Game ended! Winner:", winner)} />
 */
export default function TicTacToe({ aiOpponent = false, onGameEnd }: { aiOpponent?: boolean, onGameEnd: (winner: string | null) => void }) {
    const [board, setBoard] = useState<(null | string)[]>(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        if (aiOpponent && currentPlayer === "O" && !gameOver) {
            const timer = setTimeout(makeAIMove, 500);  // Delay for better UX
            return () => clearTimeout(timer);
        }
    }, [board, currentPlayer ]);

    /**
     * Makes a move for the AI opponent.
     * It randomly selects an available square on the board.
     */
    const makeAIMove = () => {
        const availableSquares = board.reduce((acc, square, index) => 
            square === null ? acc.concat(index) : acc, [] as number[]);

        if (availableSquares.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableSquares.length);
            handleClick(availableSquares[randomIndex]);
        }
    };

    /**
     * Handles a player's move on the board.
     * @param {number} index - The index of the square to place the player's mark.
     */
    const handleClick = (index: number) => {
        if (board[index] || gameOver) return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        const winner = calculateWinner(newBoard);
        if (winner) {
            setGameOver(true);
            onGameEnd(winner);
        } else if (newBoard.every((square) => square !== null)) {
            setGameOver(true);
        } else {
            setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
        }
    }

    /**
     * Calculates the winner of the game.
     * @param {Array<(null|string)>} squares - The current state of the board.
     * @returns {string|null} The winner player (X or O) or null if there is no winner.
     */
    const calculateWinner = (squares: (null | string)[]): string | null => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
            [0, 4, 8], [2, 4, 6],            // Diagonal
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    };

    /**
     * Gets the status message for the game.
     * @returns {string}
     */
    const getStatus = () => {
        if (gameOver) {
            // is a draw?
            if (board.every((square) => square !== null)) {
                return "It's a draw!";
            } else {
                return `Winner: ${currentPlayer}`;
            }
        } else {
            return `Current Player: ${currentPlayer}`;
        }
    }

    /**
     * Resets the game to its initial state.
     * Clears the board, sets the current player to 'X', and resets the winner and game over status.
     * @returns {void}
     */
    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setCurrentPlayer("X");
        setGameOver(false);
    }


    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Tic Tac Toe</h1>

            {/* Status */}
            <div className={styles.subtitle}>{getStatus()}</div>
                
            {/* Board */}
            <Board board={board} handleClick={handleClick}/>

            {/* Reset Button */}
            {gameOver && (
                <button className={styles.reset_button} onClick={resetGame}>
                    Play Again
                </button>
            )}
        </div>
    );
}