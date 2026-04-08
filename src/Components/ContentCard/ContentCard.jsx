import React from "react";

function ContentCard({ post, onToggle, onDelete, onEdit }) {
  const cardButtonStyle = {
    backgroundColor: "#ffffff",
    color: "#000000",
    border: "2px solid #000000",
    padding: "6px 12px",
    marginRight: "8px",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <div
      className="content-card"
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "15px",
      }}
    >
      <p>
        <strong>{post.category}</strong>
      </p>
      <h4>{post.topic}</h4>
      <p>{post.content}</p>

      <div className="card-actions" style={{ marginTop: "10px" }}>
        <button style={cardButtonStyle} onClick={onEdit}>
          Edit
        </button>
        <button style={cardButtonStyle} onClick={onToggle}>
          {post.completed ? "Mark as Draft" : "Mark as Finished"}
        </button>
        <button style={cardButtonStyle} onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ContentCard;
