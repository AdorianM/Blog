"use client";
import { useEffect, useState } from 'react';

export default function ThemeToggleButton({ onToggle }: { onToggle: (isDarkMode: boolean) => void }){
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const localStorageTheme = window.localStorage.getItem('theme');
    if (localStorageTheme) {
      setIsDarkMode(localStorageTheme === 'dark');
    } else {
      setIsDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    window.localStorage.setItem('theme', newMode ? 'dark' : 'light');
    onToggle(newMode);
  };

  return (
    <button 
      onClick={toggleTheme} 
      style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        zIndex: 1000,
      }}
    >
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}