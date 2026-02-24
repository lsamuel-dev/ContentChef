import './FilterButtons.css';

function FilterButtons() {
  return (
    <div className="filter-buttons">
      <button className="filter-btn active">All Recipes</button>
      <button className="filter-btn">Drafts</button>
      <button className="filter-btn">Posted</button>
      <button className="clear-btn">Clear Pantry</button>
    </div>
  );
}

export default FilterButtons;