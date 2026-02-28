import './StatLabel.css';

function StatLabel({ activePost }) {
  // If there's no post, word count is 0
  const wordCount = activePost?.content 
    ? activePost.content.trim().split(/\s+/).length 
    : 0;

  return (
    <div className="stat-label">
      <div className="stat-item">
        <span>Word Count:</span>
        <strong>{wordCount}</strong>
      </div>
      <div className="stat-item">
        <span>Quality:</span>
        <strong style={{ color: wordCount > 20 ? 'green' : 'orange' }}>
          {wordCount > 20 ? 'Fresh' : 'Raw'}
        </strong>
      </div>
    </div>
  );
}

export default StatLabel;