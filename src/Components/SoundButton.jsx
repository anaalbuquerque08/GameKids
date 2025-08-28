import React from "react"; 
const HOVER_SOUND = "/sounds/effect/effect-button-1.wav";
const CLICK_SOUND = "/sounds/effect/effect-button-4.wav";

export default function SoundButton({ onClick, onMouseEnter, onMouseLeave, children, ...props }) {

  const handleClick = (e) => {
    new Audio(CLICK_SOUND).play();
    if (onClick) onClick(e);
  };

  const handleMouseEnter = (e) => {
    new Audio(HOVER_SOUND).play();
    if (onMouseEnter) onMouseEnter(e); 
  };

  return (
    <button 
      {...props} 
      onClick={handleClick} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}
