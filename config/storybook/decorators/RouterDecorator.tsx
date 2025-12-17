import { MemoryRouter } from "react-router-dom";
import { DecoratorFunction } from "storybook/internal/csf";

const RouterDecorator: DecoratorFunction = (Story) => {
  return (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  );
};

export default RouterDecorator;