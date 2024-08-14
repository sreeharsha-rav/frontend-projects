import { upvoteIcon, downvoteIcon } from "../ui/icons";

const style = {
    vote: "flex flex-col items-center space-y-1",
    button: "flex items-center justify-center w-8 h-8 p-1 text-xs text-sky-400 hover:text-blue-700 hover:bg-blue-50 rounded-full",
    count: "text-xs font-semibold",
};

/**
 * Renders the vote component.
 * 
 * @param {Object} props - The component props.
 * @param {number} props.score - The current score of the vote.
 * 
 * @returns {JSX.Element} The rendered vote component.
 */
export default function Vote({ score }: { score: number }) {
    
    // TODO: State management for upvotes and downvotes, and update the score accordingly

    return (
        <div className={style.vote}>
            <button className={style.button}>
                {upvoteIcon()}
            </button>
            <span className={style.count}>{score}</span>
            <button className={style.button}>
                {downvoteIcon()}
            </button>
        </div>
    );
}