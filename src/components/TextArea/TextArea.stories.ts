import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';


const meta: Meta<typeof TextArea> = {
    title: 'Text Area',
    component: TextArea,
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
      id: 'textarea1',
      name: 'example',
      label: 'Text Area',
      placeholder: 'Here you can enter some text...',
    },
}

export const Required: Story = {
    args: {
      id: 'textarea1',
      name: 'example',
      label: 'Text Area',
      placeholder: 'Here you can enter some text...',
      required: true,
    },
}

export const Disabled: Story = {
    args: {
      id: 'textarea1',
      name: 'example',
      label: 'Text Area',
      placeholder: 'Here you can enter some text...',
      disabled: true,
    },
}