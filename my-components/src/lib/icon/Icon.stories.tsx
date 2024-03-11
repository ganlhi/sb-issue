import type { Meta, StoryObj } from '@storybook/react';
import {  Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Components/Icon',
  tags: [],
  args: {
    name: 'basic / lock',
  },
  argTypes: {
    name: {
      type: 'string',
    },
  },
};
export default meta;
type Story = StoryObj<typeof Icon>;
export const Default: Story = {
  args: {},
};
