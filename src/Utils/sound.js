let soundEnabled = true;  

export const setSoundEnabled = (enabled) => {
  soundEnabled = enabled;
};

export const playSound = (url) => {
  if (!soundEnabled) return;
  new Audio(url).play();
};
