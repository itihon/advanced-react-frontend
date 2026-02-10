import type { Meta, StoryObj } from '@storybook/react-webpack5';

import ArticlesFilter from './ArticlesFilter';
import ThemeDecorator from 'config/storybook/decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { ArticleType } from '../../model/consts/articleConsts';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'entities/ArticlesFilter',
  component: ArticlesFilter,
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
} satisfies Meta<typeof ArticlesFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LightFilterEconomics: Story = {
  args: {
    filter: ArticleType.ECONOMICS,
    onFilterClick: () => {},
  },
  decorators: [ThemeDecorator],
};

export const DarkFilterScience: Story = {
  args: {
    filter: ArticleType.SCIENCE,
    onFilterClick: () => {},
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};

export const LightFilterIT: Story = {
  args: {
    filter: ArticleType.IT,
    onFilterClick: () => {},
  },
  decorators: [ThemeDecorator],
};

export const DarkFilterNone: Story = {
  args: {
    onFilterClick: () => {},
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};

export const LightFilterNone: Story = {
  args: {
    filter: '',
    onFilterClick: () => {},
  },
  decorators: [ThemeDecorator],
};