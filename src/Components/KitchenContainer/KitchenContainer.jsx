import './KitchenContainer.css'; // This is correct because they ARE in the same folder
import DraftForm from '../DraftForm/DraftForm';
import DraftEditor from '../DraftEditor/DraftEditor';
import StatLabel from '../StatLabel/StatLabel';

function KitchenContainer({ onAddPost, activePost, onUpdatePost }) {
  return (
    <div className="kitchen-container">
      <header className="kitchen-header">
        <h2>The Kitchen</h2>
        <p>Prepare and season your social media drafts below.</p>
      </header>
      
      <section className="kitchen-workspace">
        <div className="recipe-input-area">
            <DraftForm onAddPost={onAddPost} /> 
        </div>
        
        <div className="cooking-station">
            <DraftEditor 
              activePost={activePost} 
              setActivePost={onUpdatePost} 
            />
            {/* The Label sits right under the editor */}
            <StatLabel activePost={activePost} />
        </div>
      </section>
    </div>
  );
}

export default KitchenContainer;