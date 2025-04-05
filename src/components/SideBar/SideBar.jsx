export default function SideBar({ stepNumber, stepDescription, isActive }) {   
    let classValue = "step-number-unactive";
    if(isActive){
      classValue = "step-number-active";
    }
    
    return (
      <aside className="sidebar-text-container">
        <p className= {classValue}>{stepNumber}</p>
        <div className="step-description-container">
          <p>
            <span className="step-order">STEP {stepNumber}</span> <br />
            <span className="page-description">{stepDescription}</span>
          </p>
        </div>
      </aside>
    );
  }
  