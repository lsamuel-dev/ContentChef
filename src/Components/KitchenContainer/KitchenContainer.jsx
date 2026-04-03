import React from 'react';
import ContentCard from '../ContentCard/ContentCard';
import DraftForm from '../DraftForm/DraftForm';

function KitchenContainer({ 
  posts, addPost, updatePost, activePost, setActivePost, 
  filter, setFilter, toggleComplete, deletePost 
}) {
  return (
    <section className="kitchen-container">
      <div className="editor-section">
        <DraftForm 
          addPost={addPost} 
          updatePost={updatePost} 
          activePost={activePost} 
          setActivePost={setActivePost}
        />
      </div>

      <div className="kitchen-header">
        <h2>The Pantry</h2>
        <div className="filter-bar">
          <button className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')}>All</button>
          <button className={filter === 'Drafts' ? 'active' : ''} onClick={() => setFilter('Drafts')}>Drafts</button>
          <button className={filter === 'Finished' ? 'active' : ''} onClick={() => setFilter('Finished')}>Finished</button>
        </div>
      </div>

      <div className="pantry-grid">
        {posts.length > 0 ? (
          posts.map((post) => (
            <ContentCard 
              key={post.id} 
              post={post} 
              onToggle={() => toggleComplete(post.id)} 
              onDelete={() => deletePost(post.id)}
              onEdit={() => setActivePost(post)} 
            />
          ))
        ) : (
          <p className="empty-message">No recipes in this section. Start cooking!</p>
        )}
      </div>
    </section>
  );
}

export default KitchenContainer;