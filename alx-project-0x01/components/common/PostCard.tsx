import React from 'react';

interface PostCardProps {
    title: string;
    content: string;
    author: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, content, author }) => {
    return (
        <div className="post-card">
            <h2>{title}</h2>
            <p>{content}</p>
            <p className="author">By: {author}</p>
        </div>
    );
};

export default PostCard;