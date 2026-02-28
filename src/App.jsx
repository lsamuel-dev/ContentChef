import { useState } from 'react';
import './App.css';

// Component Imports
import NavBar from './Components/NavBar/NavBar';
import KitchenContainer from './Components/KitchenContainer/KitchenContainer';
import ContactContainer from './Components/ContactContainer/ContactContainer';

function App() {
  const [currentView, setCurrentView] = useState('kitchen');
  const [posts, setPosts] = useState([]);
  const [activePost, setActivePost] = useState(null);

  const handleNavigate = (viewName) => {
    setCurrentView(viewName);
  };

  const addPost = (newPostData) => {
    const freshPost = {
      ...newPostData,
      id: Date.now(),
      isCompleted: false
    };
    setPosts([...posts, freshPost]);
    setActivePost(freshPost);
  };

  const updateActivePost = (updatedPost) => {
    setActivePost(updatedPost);
    const updatedPosts = posts.map(p => 
      p.id === updatedPost.id ? updatedPost : p
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="app-container">
      <NavBar onNavigate={handleNavigate} />

      <main className="main-content">
        {currentView === 'kitchen' ? (
          <KitchenContainer 
            onAddPost={addPost} 
            activePost={activePost}
            onUpdatePost={updateActivePost}
            posts={posts}
          />
        ) : (
          <ContactContainer />
        )}
      </main>
    </div>
  );
}

export default App;