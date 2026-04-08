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
    <main>
      {/* 1. Generator Section */}
      <section id="kitchen" style={{ width: "100%" }}>
        <DraftForm
          addPost={addPost}
          updatePost={updatePost}
          activePost={activePost}
          setActivePost={setActivePost}
        />
      </section>

      {/* 2. Pantry Section */}
      <section id="pantry" style={{ marginTop: "50px", width: "100%" }}>
        <h2
          style={{
            color: "#000",
            borderBottom: "2px solid #000",
            paddingBottom: "10px",
          }}
        >
          THE PANTRY
        </h2>

        <div style={{ display: "flex", gap: "10px", margin: "20px 0" }}>
          {["All", "Drafts", "Finished"].map((f) => (
            <button
              key={f}
              style={{
                flex: 1,
                padding: "12px",
                border: "2px solid #000",
                fontWeight: "bold",
                background: filter === f ? "#eee" : "#fff",
                cursor: "pointer",
              }}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="pantry-grid">
          {posts.map((post) => (
            <ContentCard
              key={post.id}
              post={post}
              onDelete={() => deletePost(post.id)}
              onEdit={() => setActivePost(post)}
            />
          ))}
        </div>
      </section>

      {/* 3. Original Contact Form */}
      <ContactForm />
    </main>
  );
}

export default KitchenContainer;
