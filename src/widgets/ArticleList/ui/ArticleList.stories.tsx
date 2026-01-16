import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ArticleList from './ArticleList';
import ThemeDecorator from 'config/storybook/decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { ArticleType, ArticlePreviewStyle } from 'entities/Article';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'widgets/ArticleList',
  component: ArticleList,
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
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = Array
  .from({ length: 9 })
  .map((_, idx) => ({
    id: idx.toString(),
    createdAt: `0${idx}.05.2022`,
    img: '/assets/avatars/2-avatar.jpg',
    title: `Title of article #${idx}. Read the whole article. Et perferendis nulla debitis tempora.`,
    excerpt: 'Quos iure dolor. Non corporis qui beatae ipsam. Nulla labore cumque sequi eos voluptatem. Sint est dolorem nihil veritatis. Ipsum consequatur saepe dolor dolores et beatae alias unde iure. Hic necessitatibus porro eius et assumenda alias. Facilis est culpa. Quo inventore eos repellat ea. Ut magni ut ex. Fugiat est placeat quas repudiandae minus sit pariatur. Sequi porro facere. Maxime tempore libero fugit ad. Et accusantium maxime deleniti vitae voluptas non aut vero rerum. Iusto culpa sint. Ut corporis est incidunt quas optio animi autem praesentium alias. Voluptatem error libero saepe id repudiandae iure et dolorem autem. Voluptatem facilis labore.',
    type: [ArticleType.ECONOMICS, ArticleType.IT, ArticleType.SCIENCE],
    views: 128 * (idx + 1),
  }));

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LightArticleListTiles: Story = {
  args: {
    previewStyle: ArticlePreviewStyle.TILES,
    items,
  },
  decorators: [ThemeDecorator],
};

export const DarkArticleListTiles = {
  args: {
    previewStyle: ArticlePreviewStyle.TILES,
    items,
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};

export const LightArticleListListItems: Story = {
  args: {
    previewStyle: ArticlePreviewStyle.LIST_ITEMS,
    items,
  },
  decorators: [ThemeDecorator],
};

export const DarkArticleListListItems = {
  args: {
    previewStyle: ArticlePreviewStyle.LIST_ITEMS,
    items,
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};

export const LightLoadingArticleListTiles: Story = {
  args: {
    previewStyle: ArticlePreviewStyle.TILES,
    isLoading: true,
  },
  decorators: [ThemeDecorator],
};

export const DarkLoadingArticleListTiles = {
  args: {
    previewStyle: ArticlePreviewStyle.TILES,
    isLoading: true,
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};

export const LightLoadingArticleListListItems: Story = {
  args: {
    previewStyle: ArticlePreviewStyle.LIST_ITEMS,
    isLoading: true,
  },
  decorators: [ThemeDecorator],
};

export const DarkLoadingArticleListListItems = {
  args: {
    previewStyle: ArticlePreviewStyle.LIST_ITEMS,
    isLoading: true,
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};
