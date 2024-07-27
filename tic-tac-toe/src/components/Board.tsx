import Square from "./Square";

const styles = {
    board_wrapper: "flex justify-center items-center",
    board: "border rounded-lg p-4",
    board_items: "grid grid-cols-3 gap-4",
};

/**
 * Board component.
 * @component
 * @description The Tic Tac Toe board that contains the squares.
 * 
 * @param {Object} props
 * @param {string[]} props.board - The current state of the board.
 * @param {Function} props.handleClick - The function to call when a square is clicked.
 * 
 * @see {@link Square}
 * 
 * @returns {JSX.Element} The rendered Board component.
 * 
 * @example
 * <Board board={["X", null, "O", "O", "X", null, null, null, "X"]} handleClick={(index) => console.log("Square clicked:", index)} />
 */
export default function Board({board, handleClick}: { board: (null | string)[], handleClick: (index: number) => void }) {

    return (
        <div className={styles.board_wrapper}>
            <div className={styles.board}>
                <div className={styles.board_items}>
                    {board.map((value, index) => (
                        <Square key={index} value={value} onClick={() => handleClick(index)} />
                    ))}
                </div>
            </div>
        </div>
    );
}