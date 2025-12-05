import React from "react";
import "../../styles/tutorialGame.css";
export default function TutorialTabs({ activeTab = "COMO JOGAR?", onTabClick }) {
  const tabs = ["COMO JOGAR?", "" ];

  return (
    <nav className="tabs">
        <div></div>
      {tabs.map((tabTutorial) => (
        <button
          key={tabTutorial}
          className={`tabTutorial ${activeTab === tabTutorial ? "active" : ""}`}
          onClick={() => onTabClick?.(tabTutorial)}
        >
          {tabTutorial}
        </button>
      ))}
    </nav>
  );
}
