const styles = {
    square: "w-16 h-16 bg-card-foreground text-primary-foreground flex justify-center items-center text-4xl font-bold rounded-md cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors",
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