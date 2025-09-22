import React from "react";

export default function TutorialTabs({ activeTab = "Como Jogar?", onTabClick }) {
  const tabs = ["Como Jogar?", "" ];

  return (
    <nav className="tabs">
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
