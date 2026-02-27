import './DraftEditor.css';

function DraftEditor({ activePost, setActivePost }) {
  
  // Handle manual typing in the editor
  const handleContentChange = (e) => {
    setActivePost({
      ...activePost,
      content: e.target.value
    });
  };

  if (!activePost) {
    return (
      <div className="draft-editor empty">
        <p>👨‍🍳 Select or generate a recipe to start seasoning!</p>
      </div>
    );
  }

  return (
    <div className="draft-editor">
      <h3>Editing: {activePost.topic}</h3>
      <span className="category-tag">{activePost.category}</span>
      
      <textarea 
        value={activePost.content}
        onChange={handleContentChange}
        rows="10"
      ></textarea>
      
      <div className="editor-footer">
        <p>Status: <strong>Draft</strong></p>
      </div>
    </div>
  );
}

export default DraftEditor;