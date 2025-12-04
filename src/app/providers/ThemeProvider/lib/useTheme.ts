import { useContext } from "react";
import ThemeContext, { ThemeContextProps } from "./ThemeContext";

export default function useTheme(): ThemeContextProps {
  const {theme, switchTheme} = useContext(ThemeContext);

  return { theme, switchTheme };
}
