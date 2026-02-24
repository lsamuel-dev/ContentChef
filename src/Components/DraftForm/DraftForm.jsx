import './DraftForm.css';

function DraftForm() {
  return (
    <div className="draft-form">
      <h3>Start a New Recipe</h3>
      <input type="text" placeholder="Enter topic (e.g. Summer Sale)" />
      
      <select>
        <option value="">Select Category</option>
        <option value="sales">Sales</option>
        <option value="educational">Educational</option>
        <option value="announcement">Announcement</option>
      </select>
      
      <button className="generate-btn">Generate Draft</button>
    </div>
  );
}

export default DraftForm;