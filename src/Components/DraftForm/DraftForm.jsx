import React, { useState, useEffect } from "react";

function DraftForm({ addPost, updatePost, activePost, setActivePost }) {
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  // Styles forced into JS to prevent iPhone layout breaks
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      padding: "15px",
      backgroundColor: "#ffffff",
      border: "2px solid #000",
      width: "100%",
      boxSizing: "border-box",
    },
    input: {
      padding: "12px",
      border: "2px solid #000",
      fontSize: "16px",
      width: "100%",
    },
    btn: {
      backgroundColor: "#dc2626",
      color: "#fff",
      padding: "16px",
      fontWeight: "bold",
      border: "none",
      width: "100%",
    },
  };

  // Automatically creates a post based on topic and dropdown choice
  const handleAutoGenerate = (e) => {
    const type = e.target.value;
    setCategory(type);

    if (topic && !activePost) {
      const templates = {
        Sales: `Check out our ${topic}! Available now for a limited time.`,
        Educational: `Here are 3 tips for ${topic} you should try today.`,
        Announcement: `We are excited to announce our new ${topic} is live!`,
      };
      setContent(templates[type] || "");
    }
  };

  useEffect(() => {
    if (activePost) {
      setTopic(activePost.topic);
      setCategory(activePost.category);
      setContent(activePost.content);
    }
  }, [activePost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!topic || !category || !content) return;

    if (activePost) {
      updatePost(activePost.id, topic, category, content);
      setActivePost(null);
    } else {
      // Sends new post object up to global state
      addPost({ topic, category, content, completed: false, id: Date.now() });
    }

    setTopic("");
    setCategory("");
    setContent("");
  };

  return (
    <form style={styles.container} onSubmit={handleSubmit}>
      <h3 style={{ margin: "0", color: "#000" }}>Post Generator</h3>
      <input
        style={styles.input}
        placeholder="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <select
        style={styles.input}
        value={category}
        onChange={handleAutoGenerate}
      >
        <option value="">Select Platform</option>
        <option value="Sales">Sales</option>
        <option value="Educational">Educational</option>
        <option value="Announcement">Announcement</option>
      </select>
      <textarea
        style={{ ...styles.input, height: "100px" }}
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" style={styles.btn}>
        {activePost ? "Update" : "Generate & Save"}
      </button>
    </form>
  );
}

export default DraftForm;
