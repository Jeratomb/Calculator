import React from "react";
import "../styles.css";

interface DarkModeButtonProps {
  enableDarkMode: () => void;
}

function DarkModeButton({ enableDarkMode }: DarkModeButtonProps) {
  return (
    <button className="span-three" onClick={enableDarkMode}>
      Darkmode
    </button>
  );
}

export default DarkModeButton;
