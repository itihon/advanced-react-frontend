import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ArticleCard from './ArticleCard';
import { ArticleType } from '../../model/types/article';
import ThemeDecorator from 'config/storybook/decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'entities/ArticleCard',
  component: ArticleCard,
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
} satisfies Meta<typeof ArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LightArticleCard: Story = {
  args: {
    id: '1',
    createdAt: `01.05.2022`,
    img: '/assets/avatars/2-avatar.jpg',
    title: `Title of article #1. Read the whole article. Et perferendis nulla debitis tempora.`,
    type: [ArticleType.ECONOMICS, ArticleType.IT, ArticleType.SCIENCE],
    views: 12812,
  },
  decorators: [ThemeDecorator],
};

export const DarkArticleCard = {
  args: {
    id: '1',
    createdAt: `01.05.2022`,
    img: '/assets/avatars/2-avatar.jpg',
    title: `Title of article #1. Read the whole article. Et perferendis nulla debitis tempora.`,
    type: [ArticleType.ECONOMICS, ArticleType.IT, ArticleType.SCIENCE],
    views: 12812,
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};
