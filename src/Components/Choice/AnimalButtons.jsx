import React from "react";
import SoundButton from "../SoundButton";

export default function AnimalButtons({ handleChoice, setThemeClass }) {
  return (
    <div className="btn-container">
      <SoundButton
        className="btn btn-frog"
        onMouseEnter={() => setThemeClass("theme-frog")}
        onMouseLeave={() => setThemeClass("theme-squirrel")}
        onClick={() => handleChoice("frog")}
      >
        SAPO
      </SoundButton>

      <SoundButton
        className="btn btn-squirrel"
        onMouseEnter={() => setThemeClass("theme-squirrel")}
        onMouseLeave={() => setThemeClass("theme-squirrel")}
        onClick={() => handleChoice("squirrel")}
      >
        ESQUILO
      </SoundButton>
    </div>
  );
}
