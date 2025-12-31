import type { Meta, StoryObj } from '@storybook/react-webpack5';

import AppText, { TextAlign, TextTheme } from './AppText';
import ThemeDecorator from 'config/storybook/decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/AppText',
  component: AppText,
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
} satisfies Meta<typeof AppText>;

export default meta;
type Story = StoryObj<typeof meta>;

const text = 'Eum labore alias dolorem fugiat sed aspernatur sint. Tenetur placeat quisquam perspiciatis sit numquam tempora soluta explicabo. Harum laudantium est. Labore vel rerum reiciendis dolores facilis non impedit tenetur. Quia dolor non nihil molestias iste. Enim beatae dolor iusto officia commodi accusantium.';

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LeftText: Story = {
  args: {
    children: text,
    align: TextAlign.LEFT,
  },
  decorators: [ThemeDecorator],
};

export const CenterText: Story = {
  args: {
    children: text,
    align: TextAlign.CENTER,
  },
  decorators: [ThemeDecorator],
};

export const RightText: Story = {
  args: {
    children: text,
    align: TextAlign.RIGHT,
  },
  decorators: [ThemeDecorator],
};

export const DarkText: Story = {
  args: {
    children: text,
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};

export const LightErrorText: Story = {
  args: {
    children: text,
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator],
};

export const DarkErrorText: Story = {
  args: {
    children: text,
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};
