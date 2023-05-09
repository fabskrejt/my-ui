import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from "../../app/components/CheckBox";

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Checkbox small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Checkbox medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Checkbox large',
  },
};
