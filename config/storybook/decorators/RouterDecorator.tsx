import { BrowserRouter } from "react-router-dom";
import { DecoratorFunction } from "storybook/internal/csf";

const RouterDecorator: DecoratorFunction = (Story) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};

export default RouterDecorator;