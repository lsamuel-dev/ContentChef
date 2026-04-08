import React, { useState, useEffect } from "react";
import "./DraftForm.css";

function DraftForm({ addPost, updatePost, activePost, setActivePost }) {
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (activePost) {
      setTopic(activePost.topic);
      setCategory(activePost.category);
      setContent(activePost.content);
    } else {
      setTopic("");
      setCategory("");
      setContent("");
    }
  }, [activePost]);

  const handleCategoryChange = (e) => {
    const newCat = e.target.value;
    setCategory(newCat);

    if (!activePost && topic) {
      const templates = {
        Sales: `🔥 LIMITED TIME: ${topic}! 🔥\n\nDon't miss out on our biggest event yet!`,
        Educational: `Did you know about ${topic}?\n\nUnderstanding this can change how you work.`,
        Announcement: `BIG NEWS: We are officially launching ${topic}!`,
      };
      setContent(templates[newCat] || "");
    }
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (!topic || !category || !content) {
      alert("Please fill in all ingredients (fields)!");
      return;
    }

    if (activePost) {
      updatePost(activePost.id, topic, category, content);
    } else {
      addPost({ topic, category, content });
    }

    setTopic("");
    setCategory("");
    setContent("");
  };

  return (
    <div className="draft-form">
      <h3>{activePost ? "Refining the Recipe" : "Start a New Recipe"}</h3>

      <input
        type="text"
        placeholder="Topic (e.g. Summer Sale)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <select value={category} onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        <option value="Sales">Sales</option>
        <option value="Educational">Educational</option>
        <option value="Announcement">Announcement</option>
      </select>

      <textarea
        placeholder="Edit your message content here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="5"
      />

      <div className="form-buttons">
        <button
          className="generate-btn"
          style={{
            opacity: 1,
            visibility: "visible",
            display: "block",
            backgroundColor: "#dc2626", // Bold Red
            color: "#ffffff", // White Text
            padding: "12px 24px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "10px",
            textTransform: "uppercase",
          }}
          onClick={handleSubmit}
        >
          {activePost ? "Save Changes" : "Generate Draft"}
        </button>
        {activePost && (
          <button
            className="cancel-btn"
            style={{
              marginLeft: "10px",
              cursor: "pointer",
              background: "#ffffff",
              color: "#000000",
              border: "2px solid #000000",
              padding: "8px 16px",
              borderRadius: "4px",
              marginTop: "10px",
              fontWeight: "bold",
            }}
            onClick={() => setActivePost(null)}
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}

export default DraftForm;
