"use client";

// for testing dark mode

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration errors

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
