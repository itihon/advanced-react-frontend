import type { Meta, StoryObj } from '@storybook/react-webpack5';

import ArticleDetailsPage from './ArticleDetailsPage';
import ThemeDecorator from 'config/storybook/decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [ThemeDecorator],
};

export const Dark: Story = {
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};
