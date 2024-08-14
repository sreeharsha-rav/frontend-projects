import { MessageSquareText, Share2 } from "lucide-react";

const style = {
    icon: 'w-4 h-4 text-gray-500',
    iconContainer: 'inline-flex items-center px-2 py-1 space-x-1 text-sm font-medium rounded-full border border-transparent bg-gray-200 text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
    wrapper: 'flex items-center space-x-3 pt-2',
}

/**
 * Renders the actions component.
 * 
 * @param {number} numComments - The number of comments.
 * @returns {JSX.Element} The rendered actions component.
 */
const Actions = ({ numComments }: { numComments: number }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.iconContainer}>
                <MessageSquareText className={style.icon} />
                <span className='text-xs'>{numComments} Comments</span>
            </div>
            <div className={style.iconContainer}>
                <Share2 className={style.icon} />
                <span className='text-xs'>Share</span>
            </div>
        </div>
    );
}

export default Actions;