import React from "react";
import ContentCard from "../ContentCard/ContentCard";
import DraftForm from "../DraftForm/DraftForm";

function KitchenContainer({
  posts,
  addPost,
  updatePost,
  activePost,
  setActivePost,
  filter,
  setFilter,
  toggleComplete,
  deletePost,
}) {
  // Inline style object for the filter buttons to ensure consistency
  const filterButtonStyle = (isActive) => ({
    backgroundColor: isActive ? "#f3f4f6" : "#ffffff",
    color: "#000000",
    border: "2px solid #000000",
    padding: "8px 16px",
    marginRight: "10px",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
  });

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
          <button
            style={filterButtonStyle(filter === "All")}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            style={filterButtonStyle(filter === "Drafts")}
            onClick={() => setFilter("Drafts")}
          >
            Drafts
          </button>
          <button
            style={filterButtonStyle(filter === "Finished")}
            onClick={() => setFilter("Finished")}
          >
            Finished
          </button>
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
          <p className="empty-message">
            No recipes in this section. Start cooking!
          </p>
        )}
      </div>
    </section>
  );
}

export default KitchenContainer;
