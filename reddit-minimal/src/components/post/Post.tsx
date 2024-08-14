import { useParams } from 'react-router-dom';

const Post: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();

    return (
        <div>
            <p>Post ID: {postId}</p>
            <p>Post Content goes here</p>
        </div>
    );
};

export default Post;
