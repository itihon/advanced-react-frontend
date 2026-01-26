import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ArticleCard from './ArticleCard';
import { ArticleType, ArticlePreviewStyle, ArticlePreview } from '../../model/types/article';
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

const args: ArticlePreview = {
  id: '1',
  authorId: '1',
  createdAt: `01.05.2022`,
  img: '/assets/avatars/2-avatar.jpg',
  title: `Title of article #1. Read the whole article. Et perferendis nulla debitis tempora.`,
  excerpt: 'Quos iure dolor. Non corporis qui beatae ipsam. Nulla labore cumque sequi eos voluptatem. Sint est dolorem nihil veritatis. Ipsum consequatur saepe dolor dolores et beatae alias unde iure. Hic necessitatibus porro eius et assumenda alias. Facilis est culpa. Quo inventore eos repellat ea. Ut magni ut ex. Fugiat est placeat quas repudiandae minus sit pariatur. Sequi porro facere. Maxime tempore libero fugit ad. Et accusantium maxime deleniti vitae voluptas non aut vero rerum. Iusto culpa sint. Ut corporis est incidunt quas optio animi autem praesentium alias. Voluptatem error libero saepe id repudiandae iure et dolorem autem. Voluptatem facilis labore.',
  type: [ArticleType.ECONOMICS, ArticleType.IT, ArticleType.SCIENCE],
  views: 12812,
  subtitle: '',
  blocks: [],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LightArticleCardTile: Story = {
  args,
  decorators: [ThemeDecorator],
};

export const DarkArticleCardTile = {
  args,
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};

export const LightArticleCardListItem: Story = {
  args: {
    ...args,
    previewStyle: ArticlePreviewStyle.LIST_ITEMS,
  },
  decorators: [ThemeDecorator],
};

export const DarkArticleCardListItem = {
  args: {
    ...args,
    previewStyle: ArticlePreviewStyle.LIST_ITEMS,
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};

export const LightArticleCardRow: Story = {
  args: {
    ...args,
    previewStyle: ArticlePreviewStyle.ROW,
  },
  decorators: [ThemeDecorator],
};

export const DarkArticleCardRow = {
  args: {
    ...args,
    previewStyle: ArticlePreviewStyle.ROW,
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};