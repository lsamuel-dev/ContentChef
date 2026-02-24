import './KitchenContainer.css';
// Eventually, you will import the smaller pieces here:
// import DraftForm from '../DraftForm/DraftForm';
// import DraftEditor from '../DraftEditor/DraftEditor';
// import StatLabel from '../StatLabel/StatLabel';

function KitchenContainer() {
  return (
    <div className="kitchen-container">
      <h2>The Kitchen</h2>
      <p>This is where we cook up new social media content.</p>
      
      <section className="kitchen-workspace">
        {/* This is where your Form, Editor, and Stats will live side-by-side */}
        <div className="recipe-input">
            {/* <DraftForm /> */}
        </div>
        
        <div className="cooking-area">
            {/* <DraftEditor /> */}
            {/* <StatLabel /> */}
        </div>
      </section>
    </div>
  );
}

export default KitchenContainer;