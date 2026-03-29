import { useState } from 'react';
import './DraftForm.css';

function DraftForm({ onAddPost }) {
  // 1. Create state to track the inputs
  const [topic, setTopic] = useState('');
  const [category, setCategory] = useState('');

  // 2. Handle the "Generate" click
 const handleSubmit = () => {
  if (!topic || !category) return;

  // Simple template library
  const templates = {
    Sales: `🔥 LIMITED TIME: ${topic}! 🔥\n\nDon't miss out on our biggest event yet. Grab your favorites before they're gone! #sale #shopping`,
    Educational: `Did you know about ${topic}?\n\nUnderstanding this can change how you work. Here is the breakdown... #learning #tips`,
    Announcement: `BIG NEWS: We are officially launching ${topic}!\n\nWe've been working on this for months and can't wait to share it. #launch #news`
  };

  onAddPost({
    topic,
    category,
    content: templates[category] || `New draft for ${topic}`
  });

  setTopic('');
  setCategory('');
};

  return (
    <div className="draft-form">
      <h3>Start a New Recipe</h3>
      <input 
        type="text" 
        placeholder="Enter topic (e.g. Summer Sale)" 
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Sales">Sales</option>
        <option value="Educational">Educational</option>
        <option value="Announcement">Announcement</option>
      </select>
      
      <button className="generate-btn" onClick={handleSubmit}>
        Generate Draft
      </button>
    </div>
  );
}

export default DraftForm;