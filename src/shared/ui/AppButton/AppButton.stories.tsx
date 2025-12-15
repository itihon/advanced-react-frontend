import type { Meta, StoryObj } from '@storybook/react-webpack5';

// import { fn } from 'storybook/test';

import AppButton from 'shared/ui/AppButton/AppButton';
import ThemeDecorator from 'config/storybook/decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/AppButton',
  component: AppButton,
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
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SquareLarge: Story = {
  args: {
    square: true,
    size: 'size-l',
    children: '☰',
  },
  decorators: [ThemeDecorator],
};

export const SquareMedium: Story = {
  args: {
    square: true,
    size: 'size-m',
    children: '☰',
  },
  decorators: [ThemeDecorator],
};

export const Large: Story = {
  args: {
    size: 'size-l',
    children: 'Text',
  },
  decorators: [ThemeDecorator],
};

export const Medium: Story = {
  args: {
    size: 'size-m',
    children: 'Text',
  },
  decorators: [ThemeDecorator],
};

export const SquareLargeDark: Story = {
  args: {
    square: true,
    size: 'size-l',
    children: '☰',
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};

export const SquareMediumDark: Story = {
  args: {
    square: true,
    size: 'size-m',
    children: '☰',
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};

export const LargeDark: Story = {
  args: {
    size: 'size-l',
    children: 'Text',
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};

export const MediumDark: Story = {
  args: {
    size: 'size-m',
    children: 'Text',
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};
