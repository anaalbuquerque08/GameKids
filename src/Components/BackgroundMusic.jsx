import React, { useEffect, useRef } from "react";

const DEFAULT_MUSIC = "/sounds/song/retro-song-3.mp3";

export default function BackgroundMusic({ autoPlay = true, loop = true, volume = 0.11}) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;  
      if (autoPlay) {
        audioRef.current.play().catch(() => { 
          console.log("Autoplay bloqueado pelo navegador.");
        });
      }
    }
  }, [autoPlay, volume]);

  return (
    <audio ref={audioRef} src={DEFAULT_MUSIC} loop={loop} />
  );
}
