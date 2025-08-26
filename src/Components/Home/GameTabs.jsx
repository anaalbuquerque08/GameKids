import React from "react";

export default function GameTabs({ activeTab = "GAMES", onTabClick }) {
  const tabs = ["GAMES", "MATEMÁTICA", "QUIZZ", "AVENTURA", "DIVERTIDO"];

  return (
    <nav className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab ${activeTab === tab ? "active" : ""}`}
          onClick={() => onTabClick?.(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
