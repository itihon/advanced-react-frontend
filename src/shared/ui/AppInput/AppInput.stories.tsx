import type { Meta, StoryObj } from '@storybook/react-webpack5';

import AppInput from 'shared/ui/AppInput/AppInput';
import ThemeDecorator from 'config/storybook/decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/AppInput',
  component: AppInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  // args: { onClick: fn() },
} satisfies Meta<typeof AppInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LightText: Story = {
  args: {
    type: 'text',
    onChange: () => {},
  },
  decorators: [ThemeDecorator],
};

export const DarkText: Story = {
  args: {
    type: 'text',
    onChange: () => {},
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};
