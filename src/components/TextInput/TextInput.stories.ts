import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';


const meta: Meta<typeof TextInput> = {
    title: 'Text Input',
    component: TextInput,
    parameters: {
      layout: 'centered',
    },
    argTypes: {
        disabled: { control: 'boolean' },
        required: { control: 'boolean' },
    }
};
  
export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
    args: {
      id: 'textfield1',
      name: 'example',
      label: 'Label',
      placeholder: 'Enter...',
    },
}

export const Required: Story = {
  args: {
    id: 'textfield2',
    name: 'example',
    label: 'Label',
    placeholder: 'Enter...',
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    id: 'textfield3',
    name: 'example',
    label: 'Label',
    placeholder: 'Enter...',
    disabled: true,
  },
}