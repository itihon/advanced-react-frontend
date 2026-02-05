import type { Meta, StoryObj } from '@storybook/react-webpack5';

import VFlexBox from './VFlexBox';
import ThemeDecorator from 'config/storybook/decorators/ThemeDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/VFlexBox',
  component: VFlexBox,
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
} satisfies Meta<typeof VFlexBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = Array
  .from({ length: 9 })
  .map((_, idx) => <div style={{ width: (idx + 1) * 50, backgroundColor: 'royalblue' }} key={idx}>Item {idx}</div>);

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const StretchXStartStart32px: Story = {
  args: {
    alignItems: 'start',
    gap: '32px',
    stretch: true,
    children,
  },
  decorators: [ThemeDecorator],
};

export const StretchXCenterCenter32px: Story = {
  args: {
    alignItems: 'center',
    gap: '32px',
    stretch: true,
    children,
  },
  decorators: [ThemeDecorator],
};

export const StretchXEndEnd32px: Story = {
  args: {
    alignItems: 'end',
    gap: '32px',
    stretch: true,
    children,
  },
  decorators: [ThemeDecorator],
};

export const StretchXStartStart16px: Story = {
  args: {
    alignItems: 'start',
    gap: '16px',
    stretch: true,
    children,
  },
  decorators: [ThemeDecorator],
};

export const StretchXCenterCenter16px: Story = {
  args: {
    alignItems: 'center',
    gap: '16px',
    stretch: true,
    children,
  },
  decorators: [ThemeDecorator],
};

export const StretchXEndEnd16px: Story = {
  args: {
    alignItems: 'end',
    gap: '16px',
    stretch: true,
    children,
  },
  decorators: [ThemeDecorator],
};