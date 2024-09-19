import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';


const meta: Meta<typeof Toggle> = {
    title: 'Toggle',
    component: Toggle,
    parameters: {
      layout: 'centered',
    },
    argTypes: {
      onChange: { action: 'changed' },
      checked: { control: 'boolean' }, 
  },
};
  
export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
  args: {
    id: 'toggle1',
    name: 'example',
    label: 'Toggle Switch',
  },
}

export const Disabled: Story = {
  args: {
    id: 'toggle2',
    name: 'example',
    label: 'Disabled Toggle Switch',
    disabled: true,
  },
}