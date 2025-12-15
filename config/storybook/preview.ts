import { Preview } from "@storybook/react-webpack5";
import LayoutDecorator from "./decorators/LayoutDecorator";
import RouterDecorator from "./decorators/RouterDecorator";
import StoreDecorator from "./decorators/StoreDecorator";
import 'shared/config/i18n/i18n';

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
  decorators: [RouterDecorator, StoreDecorator, LayoutDecorator],
};

export default preview;