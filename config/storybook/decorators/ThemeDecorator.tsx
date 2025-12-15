import { ThemeProvider, Themes } from "app/providers/ThemeProvider";
import { DecoratorFunction } from "storybook/internal/csf";

const ThemeDecorator: DecoratorFunction = (Story, context) => {
  const theme = context.parameters.theme || Themes.LIGHT;

  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
};

export default ThemeDecorator;