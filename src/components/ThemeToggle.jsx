import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export const ThemeToggle = () => {
  // Now it will start on lightmode
  const [isDarkMode] = useState(false);

  return <button>{isDarkMode ? <Sun /> : <Moon />}</button>;
};
