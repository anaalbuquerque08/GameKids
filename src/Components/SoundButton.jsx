import React from "react"; 
const HOVER_SOUND = "/sounds/effect/effect-button-1.wav";
const CLICK_SOUND = "/sounds/effect/effect-button-4.wav";

export default function SoundButton({ 
  onClick,
  onMouseEnter, 
  onMouseLeave,
  volume = 0.04,           // valor padrão baixo
  children,
  ...props 
}) {

  const handleClick = (e) => {
    const audio = new Audio(CLICK_SOUND);
    audio.volume = volume;  // define o volume do click
    audio.play();
    if (onClick) onClick(e);
  };

  const handleMouseEnter = (e) => {
    const audio = new Audio(HOVER_SOUND);
    audio.volume = volume;  // define o volume do hover
    audio.play();
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
