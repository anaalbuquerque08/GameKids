import React from "react";
import { useLocation } from "react-router-dom";
import "../Styles/home.css";
import Sidebar from "../Components/Home/Sidebar";
import GameTabs from "../Components/Home/GameTabs";
import GamesContainer from "../Components/Home/GamesContainer";
import BottomBoxes from "../Components/Home/BottomBoxes";

export default function Home() {
  const location = useLocation();
  const { theme, name } = location.state || { theme: "theme-squirrel", name: "ESQUILO" };

  return (
    <div className={`home-page ${theme}`}>
      <div className="home-page-container">
        <div className="sidebar-container">
          <div className="sidebar">
            <Sidebar name={name} />
          </div>

        </div>
        <main className="main-content">
          <GameTabs />
          <GamesContainer />
          <BottomBoxes />
        </main>
      </div>
    </div>
  );
}
