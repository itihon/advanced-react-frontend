import { Themes } from "app/providers/ThemeProvider";
import { DecoratorFunction } from "storybook/internal/csf";

const ThemeDecorator: DecoratorFunction = (Story, context) => {
  return (
    <div className={`app ${context.parameters.theme || Themes.LIGHT}`}>
      <Story />
    </div>
  );
};

export default ThemeDecorator;