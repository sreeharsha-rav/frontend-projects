import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const styles = {
    wrapper: "flex justify-center items-center",
}

/**
 * Score Table component.
 * @component
 * @description The score table that displays the number of wins for each player.
 * 
 * @param {Object} props
 * @param {number} props.x_wins - The number of wins for player 'X'.
 * @param {number} props.o_wins - The number of wins for player 'O'.
 * 
 * @returns {JSX.Element} The rendered Score Table component.
 * 
 * @example
 * <Score x_wins={3} o_wins={5} />
 */
const Score = ({ x_wins, o_wins }: { x_wins: number, o_wins: number }) => {
    return (
        <div className={styles.wrapper}>
            <Table>
                <TableHeader>
                <TableRow>
                <TableHead>Player</TableHead>
                <TableHead>Wins</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                <TableCell>X</TableCell>
                <TableCell>{x_wins}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>O</TableCell>
                <TableCell>{o_wins}</TableCell>
                </TableRow>
            </TableBody>
            </Table>
        </div>
    );
};

export default Score;