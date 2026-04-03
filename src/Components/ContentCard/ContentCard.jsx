import React from 'react';
import './ContentCard.css';

function ContentCard({ post, onToggle, onDelete, onEdit }) {
  return (
    <div className={`content-card ${post.isCompleted ? 'completed' : ''}`}>
      <div className="card-header">
        <span className="category-tag">{post.category}</span>
      </div>
      <h4 style={{ textDecoration: post.isCompleted ? 'line-through' : 'none' }}>
        {post.topic}
      </h4>
      <p>{post.content}</p>
      <div className="card-actions">
        <button className="edit-btn" onClick={onEdit}>Edit</button>
        <button onClick={onToggle}>{post.isCompleted ? "Unfinish" : "Mark as Finished"}</button>
        <button onClick={onDelete} className="delete-btn">Delete</button>
      </div>
    </div>
  );
}

export default ContentCard;