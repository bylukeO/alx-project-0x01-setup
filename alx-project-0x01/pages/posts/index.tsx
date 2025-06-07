import React from 'react';
import PostCard from '../../components/common/PostCard';

const PostsPage = () => {
    const posts = [
        {
            title: 'First Post',
            content: 'This is the content of the first post.',
            author: 'Author One'
        },
        {
            title: 'Second Post',
            content: 'This is the content of the second post.',
            author: 'Author Two'
        }
    ];

    return (
        <div>
            <h1>Posts</h1>
            {posts.map((post, index) => (
                <PostCard 
                    key={index} 
                    title={post.title} 
                    content={post.content} 
                    author={post.author} 
                />
            ))}
        </div>
    );
};

export default PostsPage;