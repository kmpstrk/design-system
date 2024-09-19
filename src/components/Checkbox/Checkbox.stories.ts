import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';


const meta: Meta<typeof Checkbox> = {
    title: 'Checkbox',
    component: Checkbox,
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
      id: 'checkbox1',
      name: 'example',
      label: 'Checkbox',
    },
}


export const Disabled: Story = {
  args: {
    id: 'checkbox3',
    name: 'example',
    label: 'Checkbox',
    checked: false,
    disabled: true,
  },
}