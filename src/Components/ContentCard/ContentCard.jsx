import React from "react";

function ContentCard({ post, onDelete, onEdit }) {
  // Direct styles to ensure text is visible (Black on White)
  const styles = {
    card: {
      backgroundColor: "#ffffff",
      border: "2px solid #000",
      padding: "15px",
      margin: "10px 0",
      width: "100%",
      boxSizing: "border-box",
    },
    text: {
      color: "#000000",
      margin: "4px 0",
    },
    btn: {
      padding: "8px 12px",
      marginTop: "10px",
      marginRight: "8px",
      fontWeight: "bold",
      border: "1px solid #000",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.card}>
      <p style={{ ...styles.text, fontWeight: "bold" }}>{post.category}</p>
      <p style={styles.text}>{post.topic}</p>
      <p style={{ ...styles.text, fontSize: "14px" }}>{post.content}</p>
      <div>
        {/* Edit and Delete handlers passed as props */}
        <button style={{ ...styles.btn, background: "#eee" }} onClick={onEdit}>
          EDIT
        </button>
        <button
          style={{ ...styles.btn, background: "#dc2626", color: "#fff" }}
          onClick={onDelete}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default ContentCard;
