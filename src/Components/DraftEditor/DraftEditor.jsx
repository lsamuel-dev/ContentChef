import './DraftEditor.css';

function DraftEditor() {
  return (
    <div className="draft-editor">
      <h3>Kitchen Console</h3>
      <textarea 
        placeholder="Your generated content will appear here for seasoning..."
        rows="10"
      ></textarea>
      <div className="editor-controls">
        <button className="save-btn">Save to Pantry</button>
      </div>
    </div>
  );
}

export default DraftEditor;