import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';


const meta: Meta<typeof Radio> = {
    title: 'Radio Button',
    component: Radio,
    parameters: {
      layout: 'centered',
    },
    argTypes: {
        onChange: { action: 'changed' },
        disabled: { control: 'boolean' },
      }
};
  
export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
    args: {
      id: 'radio1',
      name: 'example',
      value: 'option1',
      label: 'Option 1',
    },
};

export const Disabled: Story = {
    args: {
      id: 'radio3',
      name: 'example',
      value: 'option3',
      checked: true,
      disabled: true,
      label: 'Option 3',
    },
};