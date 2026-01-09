import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Skeleton from './Skeleton';
import ThemeDecorator from 'config/storybook/decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
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
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LightHeader: Story = {
  args: {
    width: '200px',
    height: '48px',
    borderRadius: '8px',
  },
  decorators: [ThemeDecorator],
};

export const DarkRound: Story = {
  args: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};
