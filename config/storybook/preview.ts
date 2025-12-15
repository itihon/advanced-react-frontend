import { Preview } from "@storybook/react-webpack5";
import LayoutDecorator from "./decorators/LayoutDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [LayoutDecorator],
};

export default preview;