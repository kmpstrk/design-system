import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
    title: 'Typography',
    component: Typography,
    parameters: {
      layout: 'centered',
    },
    argTypes: {
        children: { control: 'text' },
        color: { control: 'radio', options: ['primary', 'secondary'] },
    },
    args: {  },
  };
  
  export default meta;
  type Story = StoryObj<typeof meta>;



  export const Heading1: Story = {
    args: {
       children: 'Main Title',
       variant: 'h1',
    },
  };
  
  export const Heading2: Story = {
    args: {
        children: 'Sub-Title',
        variant: 'h2',
    },
  };
  
  export const Heading3: Story = {
    args: {
        children: 'Sub-Heading',
        variant: 'h3',
    },
  };
  
  export const BodyText: Story = {
    args: {
        children: 'Body Text',
        variant: 'p',
    },
  };