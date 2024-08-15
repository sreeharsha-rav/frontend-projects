import { upvoteIcon, downvoteIcon } from "../ui/icons";
import { useVote } from "../../hooks/useVote";

const style = {
    vote: "flex flex-col items-center space-y-1",
    button: "flex items-center justify-center w-8 h-8 p-1 text-xs text-sky-400 hover:text-blue-700 rounded-full active:bg-blue-400",
    active: "text-sky-800 bg-blue-400",
    count: "text-xs font-semibold",
};

interface VoteProps {
    initialScore: number;
}

/**
 * Renders the vote component.
 * 
 * @param {Object} props - The component props.
 * @param {number} props.score - The current score of the vote.
 * 
 * @returns {JSX.Element} The rendered vote component.
 */
export default function Vote({ initialScore }: VoteProps) {
    // Custom hook for handling voting functionality
    const { score, voteStatus, handleVote } = useVote(initialScore);

    return (
        <div className={style.vote}>
            <button 
                className={`${style.button} ${voteStatus === 'up' ? style.active : ''}`}
                onClick={() => handleVote('up')}
            >
                {upvoteIcon()}
            </button>
            <span className={style.count}>{score}</span>
            <button 
                className={`${style.button} ${voteStatus === 'down' ? style.active : ''}`}
                onClick={() => handleVote('down')}
            >
                {downvoteIcon()}
            </button>
        </div>
    );
}