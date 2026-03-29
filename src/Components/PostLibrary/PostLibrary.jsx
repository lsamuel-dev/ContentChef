import './PostLibrary.css';

function PostLibrary({ posts }) {
  return (
    <div className="pantry-container">
      <hr className="section-divider" />
      <header className="pantry-header">
        <h2>The Pantry</h2>
        <p>Your collection of prepared content drafts.</p>
      </header>
      
      <div className="pantry-grid">
        {posts.length === 0 ? (
          <div className="empty-pantry">
            <p>The pantry is bare! Start cooking in the Kitchen to see your drafts here.</p>
          </div>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="card-tag">{post.category}</div>
              <h3>{post.topic}</h3>
              <p>{post.content.substring(0, 100)}...</p>
              <button className="card-btn">View Full Draft</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PostLibrary;