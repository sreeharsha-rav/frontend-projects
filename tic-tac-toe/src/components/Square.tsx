const styles = {
    square: "w-16 h-16 text-4xl font-bold text-center border hover:bg-gray-100 active:bg-gray-200",
};

/**
 * Square component.
 * @component
 * @description A square on the Tic Tac Toe board that can be clicked to make a move.
 * 
 * @param {Object} props
 * @param {string | null} props.value - The value of the square ('X', 'O', or null).
 * @param {Function} props.onClick - The function to call when the square is clicked.
 * 
 * @returns {JSX.Element} The rendered Square component.
 * 
 * @example
 * <Square value="X" onClick={() => console.log("Square clicked!")} />
 */
export default function Square(
    { value, onClick }: { value: string | null, onClick: () => void }
) {
    return (
        <button className={styles.square} onClick={onClick}>
            {value}
        </button>
    );
}