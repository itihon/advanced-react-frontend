import type { Meta, StoryObj } from '@storybook/react-webpack5';

import MainPage from './MainPage';
import ThemeDecorator from 'config/storybook/decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [ThemeDecorator],
};

export const Dark: Story = {
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};
