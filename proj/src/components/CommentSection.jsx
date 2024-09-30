import React, { useState } from 'react';

function CommentSection({ productId }) {
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');

    const addComment = () => {
        if (commentText) {
            const newComment = { id: comments.length + 1, productId, description: commentText, date: new Date().toLocaleString() };
            setComments([...comments, newComment]);
            setCommentText('');
        }
    };

    const deleteComment = (id) => {
        setComments(comments.filter(comment => comment.id !== id));
    };

    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <p>{comment.description} <em>{comment.date}</em></p>
                        <button onClick={() => deleteComment(comment.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <textarea 
                value={commentText} 
                onChange={e => setCommentText(e.target.value)} 
                placeholder="Add a comment..." 
            />
            <button onClick={addComment}>Submit</button>
        </div>
    );
}

export default CommentSection;
