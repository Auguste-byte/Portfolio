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
      <div className="story-slider" style={{ transform: `translateX(-${currentPlan * 100}%)` }}>
        {story.map((plan, index) => (
          <div className="story-plan" key={index}>
            <h2>{plan.title}</h2>
            <p>{plan.text}</p>
          </div>
        ))}
      </div>
      <div className="story-navigation">
        <button onClick={goToPreviousPlan} disabled={currentPlan === 0}>
          &#8592;
        </button>
        <button onClick={goToNextPlan} disabled={currentPlan === story.length - 1}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default home;
