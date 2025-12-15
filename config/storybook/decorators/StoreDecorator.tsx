import { StoreProvider } from "app/providers/StoreProvider";
import { DecoratorFunction } from "storybook/internal/csf";

const StoreDecorator: DecoratorFunction = (Story) => {
  return (
    <StoreProvider>
      <Story />
    </StoreProvider>
  );
};

export default StoreDecorator;