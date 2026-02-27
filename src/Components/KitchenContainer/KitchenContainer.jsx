import './KitchenContainer.css';
import DraftForm from '../DraftForm/DraftForm'; // Import it now!

function KitchenContainer({ onAddPost }) { // <--- Receive the prop from App.jsx
  return (
    <div className="kitchen-container">
      <header className="kitchen-header">
        <h2>The Kitchen</h2>
        <p>Prepare and season your social media drafts below.</p>
      </header>
      
      <section className="kitchen-workspace">
        <div className="recipe-input-area">
            {/* Hand the function down to the form */}
            <DraftForm onAddPost={onAddPost} /> 
        </div>
        
        <div className="cooking-station">
            {/* We will add DraftEditor and StatLabel next! */}
        </div>
      </section>
    </div>
  );
}

export default KitchenContainer;