import React, { useState } from 'react';
import ThemeContext, { LOCAL_STORAGE_THEME_KEY, Themes } from './ThemeContext';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes;

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(defaultTheme)

  const switchTheme = () => {
    const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return (
    <ThemeContext value={{ theme, switchTheme }}>
      { children }
    </ThemeContext>
  );
};

export default ThemeProvider;