import './PostLibrary.css';

function PostLibrary({ posts, onViewPost, onDeletePost }) {
  return (
    <div className="pantry-container">
      <h2 className="pantry-title">The Pantry</h2>
      <p className="pantry-subtitle">Your collection of prepared content drafts.</p>
      
      <div className="pantry-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="card-tag">{post.category}</div>
            <h3 className="card-topic">{post.topic}</h3>
            <p className="card-preview">
              {post.content ? post.content.substring(0, 80) : "No content yet..."}...
            </p>
            
            <div className="card-footer">
              <button 
                className="view-btn" 
                onClick={() => onViewPost(post)}
              >
                View Full Draft
              </button>
              
              <button 
                className="delete-btn" 
                onClick={() => onDeletePost(post.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="empty-message">Your pantry is empty. Start cooking in the kitchen!</p>
      )}
    </div>
  );
}

export default PostLibrary;