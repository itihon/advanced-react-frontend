import { createContext } from "react";

export enum Themes { DARK = 'dark', LIGHT = 'light' };
export const LOCAL_STORAGE_THEME_KEY = 'theme';

export interface ThemeContextProps {
  theme?: Themes;
  switchTheme?: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({});

export default ThemeContext;
