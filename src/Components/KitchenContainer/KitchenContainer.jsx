import React from "react";
import ContentCard from "../ContentCard/ContentCard";
import DraftForm from "../DraftForm/DraftForm";
import ContactForm from "../ContactForm/ContactForm";

function KitchenContainer({
  posts,
  addPost,
  updatePost,
  activePost,
  setActivePost,
  filter,
  setFilter,
  deletePost,
}) {
  return (
    <section style={{ padding: "15px" }}>
      <div id="kitchen">
        <DraftForm
          addPost={addPost}
          updatePost={updatePost}
          activePost={activePost}
          setActivePost={setActivePost}
        />
      </div>

      <div id="pantry" style={{ marginTop: "40px" }}>
        <h2 style={{ color: "#000", borderBottom: "2px solid #000" }}>
          THE PANTRY
        </h2>

        <div style={{ display: "flex", gap: "8px", margin: "20px 0" }}>
          {["All", "Drafts", "Finished"].map((f) => (
            <button
              key={f}
              style={{
                flex: 1,
                padding: "10px",
                border: "2px solid #000",
                fontWeight: "bold",
                background: filter === f ? "#eee" : "#fff",
              }}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {posts.map((post) => (
            <ContentCard
              key={post.id}
              post={post}
              onDelete={() => deletePost(post.id)}
              onEdit={() => setActivePost(post)}
            />
          ))}
        </div>
      </div>

      {/* This renders your original contact form directly */}
      <ContactForm />
    </section>
  );
}

export default KitchenContainer;
