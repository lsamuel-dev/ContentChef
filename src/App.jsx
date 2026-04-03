import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import KitchenContainer from "./Components/KitchenContainer/KitchenContainer";
import ContactContainer from "./Components/ContactContainer/ContactContainer";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentView, setCurrentView] = useState("kitchen");
  const [filter, setFilter] = useState("All");
  const [activePost, setActivePost] = useState(null);

  const addPost = (newPost) => {
    const postWithId = { ...newPost, id: Date.now(), isCompleted: false };
    setPosts([...posts, postWithId]);
  };

  const updatePost = (id, topic, category, content) => {
    setPosts(posts.map((p) => (p.id === id ? { ...p, topic, category, content } : p)));
    setActivePost(null); 
  };

  const toggleComplete = (id) => {
    setPosts(posts.map((p) => (p.id === id ? { ...p, isCompleted: !p.isCompleted } : p)));
  };

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
    if (activePost?.id === id) setActivePost(null);
  };

  const filteredPosts = posts.filter((p) => {
    if (filter === "Finished") return p.isCompleted;
    if (filter === "Drafts") return !p.isCompleted;
    return true;
  });

  return (
    <div className="app-container">
      <NavBar setView={setCurrentView} activeView={currentView} />
      <main className="content">
        {currentView === "kitchen" ? (
          <KitchenContainer
            posts={filteredPosts}
            addPost={addPost}
            updatePost={updatePost}
            deletePost={deletePost}
            toggleComplete={toggleComplete}
            activePost={activePost}
            setActivePost={setActivePost}
            filter={filter}
            setFilter={setFilter}
          />
        ) : (
          <ContactContainer />
        )}
      </main>
      <footer className="footer">
        <p>© 2026 ContentChef - Built by Lee Samuel</p>
      </footer>
    </div>
  );
}

export default App;