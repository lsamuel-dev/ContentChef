import './ContentCard.css';

function ContentCard() {
  return (
    <div className="content-card">
      <h4>Draft Title</h4>
      <p>This is where the "cooked" social media content will appear...</p>
      
      <div className="card-actions">
        <button className="post-btn">Mark as Posted</button>
        <button className="delete-btn">Discard</button>
      </div>
    </div>
  );
}

export default ContentCard;