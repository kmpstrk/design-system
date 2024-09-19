import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    parameters: {
      layout: 'centered',
    },
    argTypes: {
        size: { control: 'radio', options: ['small', 'medium', 'large'] },
        primary: { control: 'boolean' },
        label: { control: 'text' },
    },
    args: { onClick: fn() },
  };
  
  export default meta;
  type Story = StoryObj<typeof meta>;



  export const Primary: Story = {
    args: {
        primary: true,
        label: 'Button',
        size: 'medium',
    },
  };
  
  export const Secondary: Story = {
    args: {
        label: 'Button',
        size: 'medium',
    },
  };
  
  export const Large: Story = {
    args: {
        size: 'large',
        label: 'Button',
    },
  };
  
  export const Small: Story = {
    args: {
        size: 'small',
        label: 'Button',
    },
  };