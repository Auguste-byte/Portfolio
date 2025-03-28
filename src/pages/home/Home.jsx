import { useState } from "react";
import story from "../../data/UserStory";
import "./Home.css";

const home = () => {
  const [currentPlan, setCurrentPlan] = useState(0);

  // Fonction pour aller au plan suivant
  const goToNextPlan = () => {
    if (currentPlan < story.length - 1) {
      setCurrentPlan(currentPlan + 1);
    }
  };

  // Fonction pour revenir au plan précédent
  const goToPreviousPlan = () => {
    if (currentPlan > 0) {
      setCurrentPlan(currentPlan - 1);
    }
  };

  return (
    <div className="story-container">
      <button className="story-navigation" onClick={goToPreviousPlan} disabled={currentPlan === 0}>
      &#9665;
      </button>
      <div className="story-slider" style={{ transform: `translateX(-${currentPlan * 100}%)` }}>
        {story.map((plan, index) => (
          <div className="story-plan" key={index}>
            <h2>{plan.title}</h2>
            <p>{plan.text}</p>
          </div>
        ))}
      </div>
      <button className="story-navigation" onClick={goToNextPlan} disabled={currentPlan === story.length - 1}>
        &#9655;
      </button>
    </div>
  );
  
};

export default home;
