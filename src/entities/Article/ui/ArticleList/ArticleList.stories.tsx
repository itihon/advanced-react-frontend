import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ArticleList from './ArticleList';
import ThemeDecorator from 'config/storybook/decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { ArticleType, ArticlePreviewStyle, ArticlePreview } from 'entities/Article';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'entities/ArticleList',
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

const itemsLongTitle: ArticlePreview[] = Array
  .from({ length: 9 })
  .map((_, idx) => ({
    id: idx.toString(),
    authorId: '1',
    createdAt: `0${idx}.05.2022`,
    title: `Title of article #${idx}. Read the whole article. Et perferendis nulla debitis tempora. Voluptas non commodi quia. Vel cupiditate illo et molestiae quae exercitationem impedit voluptatem facilis. Hic veritatis et et consequuntur totam sint at. Quo inventore similique quasi qui consequuntur non quibusdam. Sit voluptatem dolorem ut ea eum odit nemo ut.`,
    content: '<img src="/assets/avatars/2-avatar.jpg" /> <p>Quos iure dolor. Non corporis qui beatae ipsam. Nulla labore cumque sequi eos voluptatem. Sint est dolorem nihil veritatis. Ipsum consequatur saepe dolor dolores et beatae alias unde iure. Hic necessitatibus porro eius et assumenda alias. Facilis est culpa. Quo inventore eos repellat ea. Ut magni ut ex. Fugiat est placeat quas repudiandae minus sit pariatur. Sequi porro facere. Maxime tempore libero fugit ad. Et accusantium maxime deleniti vitae voluptas non aut vero rerum. Iusto culpa sint. Ut corporis est incidunt quas optio animi autem praesentium alias. Voluptatem error libero saepe id repudiandae iure et dolorem autem. Voluptatem facilis labore.</p>',
    type: [ArticleType.ECONOMICS, ArticleType.IT, ArticleType.SCIENCE],
    views: 128 * (idx + 1),
  }));

const itemsMediumTitle: ArticlePreview[] = Array
  .from({ length: 9 })
  .map((_, idx) => ({
    id: idx.toString(),
    authorId: '1',
    createdAt: `0${idx}.05.2022`,
    title: `Title of article #${idx}. Read the whole article. Et perferendis nulla debitis tempora. Voluptas non commodi quia.`,
    content: '<img src="/assets/avatars/2-avatar.jpg" /> <p>Quos iure dolor. Non corporis qui beatae ipsam. Nulla labore cumque sequi eos voluptatem. Sint est dolorem nihil veritatis. Ipsum consequatur saepe dolor dolores et beatae alias unde iure. Hic necessitatibus porro eius et assumenda alias. Facilis est culpa. Quo inventore eos repellat ea. Ut magni ut ex. Fugiat est placeat quas repudiandae minus sit pariatur. Sequi porro facere. Maxime tempore libero fugit ad. Et accusantium maxime deleniti vitae voluptas non aut vero rerum. Iusto culpa sint. Ut corporis est incidunt quas optio animi autem praesentium alias. Voluptatem error libero saepe id repudiandae iure et dolorem autem. Voluptatem facilis labore.</p>',
    type: [ArticleType.ECONOMICS, ArticleType.IT, ArticleType.SCIENCE],
    views: 128 * (idx + 1),
  }));

const itemsShortTitle: ArticlePreview[] = Array
  .from({ length: 9 })
  .map((_, idx) => ({
    id: idx.toString(),
    authorId: '1',
    createdAt: `0${idx}.05.2022`,
    title: `Title of article #${idx}.`,
    content: '<img src="/assets/avatars/2-avatar.jpg" /> <p>Quos iure dolor. Non corporis qui beatae ipsam. Nulla labore cumque sequi eos voluptatem. Sint est dolorem nihil veritatis. Ipsum consequatur saepe dolor dolores et beatae alias unde iure. Hic necessitatibus porro eius et assumenda alias. Facilis est culpa. Quo inventore eos repellat ea. Ut magni ut ex. Fugiat est placeat quas repudiandae minus sit pariatur. Sequi porro facere. Maxime tempore libero fugit ad. Et accusantium maxime deleniti vitae voluptas non aut vero rerum. Iusto culpa sint. Ut corporis est incidunt quas optio animi autem praesentium alias. Voluptatem error libero saepe id repudiandae iure et dolorem autem. Voluptatem facilis labore.</p>',
    type: [ArticleType.ECONOMICS, ArticleType.IT, ArticleType.SCIENCE],
    views: 128 * (idx + 1),
  }));

const itemsLoadingImage: ArticlePreview[] = Array
  .from({ length: 9 })
  .map((_, idx) => ({
    id: idx.toString(),
    authorId: '1',
    createdAt: `0${idx}.05.2022`,
    title: `Title of article #${idx}. Read the whole article. Et perferendis nulla debitis tempora. Voluptas non commodi quia.`,
    content: '<img src="" /> <p>Quos iure dolor. Non corporis qui beatae ipsam. Nulla labore cumque sequi eos voluptatem. Sint est dolorem nihil veritatis. Ipsum consequatur saepe dolor dolores et beatae alias unde iure. Hic necessitatibus porro eius et assumenda alias. Facilis est culpa. Quo inventore eos repellat ea. Ut magni ut ex. Fugiat est placeat quas repudiandae minus sit pariatur. Sequi porro facere. Maxime tempore libero fugit ad. Et accusantium maxime deleniti vitae voluptas non aut vero rerum. Iusto culpa sint. Ut corporis est incidunt quas optio animi autem praesentium alias. Voluptatem error libero saepe id repudiandae iure et dolorem autem. Voluptatem facilis labore.</p>',
    type: [ArticleType.ECONOMICS, ArticleType.IT, ArticleType.SCIENCE],
    views: 128 * (idx + 1),
  }));

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LightArticleListTilesShortTitle: Story = {
  args: {
    previewStyle: ArticlePreviewStyle.TILES,
    items: itemsShortTitle,
  },
  decorators: [ThemeDecorator],
};

export const LightArticleListRowShortTitle: Story = {
  args: {
    previewStyle: ArticlePreviewStyle.ROW,
    items: itemsShortTitle.slice(0, 5),
  },
  decorators: [ThemeDecorator],
};

export const DarkArticleListTilesMediumTitle = {
  args: {
    previewStyle: ArticlePreviewStyle.TILES,
    items: itemsMediumTitle,
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};

export const DarkArticleListRowMediumTitle = {
  args: {
    previewStyle: ArticlePreviewStyle.ROW,
    items: itemsMediumTitle.slice(0, 5),
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};

export const LightArticleListTilesLongTitle: Story = {
  args: {
    previewStyle: ArticlePreviewStyle.TILES,
    items: itemsLongTitle,
  },
  decorators: [ThemeDecorator],
};

export const DarkArticleListTilesMixedTitle = {
  args: {
    previewStyle: ArticlePreviewStyle.TILES,
    items: [
      ...itemsShortTitle.slice(0, 3),
      ...itemsMediumTitle.slice(0, 3),
      ...itemsLongTitle.slice(0, 3),
    ].sort((a, b) => a.id > b.id ? 1 : -1),
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};

export const DarkArticleListRowMixedTitle = {
  args: {
    previewStyle: ArticlePreviewStyle.ROW,
    items: [
      ...itemsShortTitle.slice(0, 2),
      ...itemsMediumTitle.slice(0, 2),
      ...itemsLongTitle.slice(0, 2),
    ].sort((a, b) => a.id > b.id ? 1 : -1),
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};

export const LightArticleListListItemsMixedTitle: Story = {
  args: {
    previewStyle: ArticlePreviewStyle.LIST_ITEMS,
    items: [
      ...itemsShortTitle.slice(0, 1),
      ...itemsMediumTitle.slice(0, 1),
      ...itemsLongTitle.slice(0, 1),
    ].sort((a, b) => a.id > b.id ? 1 : -1),
  },
  decorators: [ThemeDecorator],
};

export const DarkArticleListListItemsMixedTitle = {
  args: {
    previewStyle: ArticlePreviewStyle.LIST_ITEMS,
    items: [
      ...itemsShortTitle.slice(0, 1),
      ...itemsMediumTitle.slice(0, 1),
      ...itemsLongTitle.slice(0, 1),
    ].sort((a, b) => a.id > b.id ? 1 : -1),
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

export const LightLoadingImageArticleListTiles: Story = {
  args: {
    previewStyle: ArticlePreviewStyle.TILES,
    items: itemsLoadingImage,
  },
  decorators: [ThemeDecorator],
};

export const DarkLoadingImageArticleListTiles = {
  args: {
    previewStyle: ArticlePreviewStyle.TILES,
    items: itemsLoadingImage,
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

export const LightLoadingImageArticleListListItems: Story = {
  args: {
    previewStyle: ArticlePreviewStyle.LIST_ITEMS,
    items: itemsLoadingImage.slice(0, 2),
  },
  decorators: [ThemeDecorator],
};

export const DarkLoadingImageArticleListListItems = {
  args: {
    previewStyle: ArticlePreviewStyle.LIST_ITEMS,
    items: itemsLoadingImage.slice(0, 2),
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};

export const LightLoadingArticleListRow: Story = {
  args: {
    previewStyle: ArticlePreviewStyle.ROW,
    isLoading: true,
  },
  decorators: [ThemeDecorator],
};

export const DarkLoadingArticleListRow = {
  args: {
    previewStyle: ArticlePreviewStyle.ROW,
    isLoading: true,
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};

export const LightLoadingImageArticleListRow: Story = {
  args: {
    previewStyle: ArticlePreviewStyle.ROW,
    items: itemsLoadingImage.slice(0, 5),
  },
  decorators: [ThemeDecorator],
};

export const DarkLoadingImageArticleListRow = {
  args: {
    previewStyle: ArticlePreviewStyle.ROW,
    items: itemsLoadingImage.slice(0, 5),
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};
