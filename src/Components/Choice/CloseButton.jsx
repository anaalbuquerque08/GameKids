import React from "react";
import SoundButton from "../SoundButton";

export default function CloseButton({ onClick }) {
  return <SoundButton className="close-btn" onClick={onClick} />;
}
