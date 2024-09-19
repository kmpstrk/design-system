import type { Meta, StoryObj } from '@storybook/react';
import { ColorPalette } from './ColorPalette';


const meta: Meta<typeof ColorPalette> = {
    title: 'ColorPalette',
    component: ColorPalette,
    parameters: {
      layout: 'centered',
    },
    argTypes: {
  },
};
  
export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
    args: {
        colors: [
        { name: 'Primary', hex: '#077A5E' },
        { name: 'Secondary', hex: '#1D9C7D' },
        { name: 'Background', hex: '#F8F8F8' },
        { name: 'Text Primary', hex: '#2F2F2F' },
        { name: 'Text Secondary', hex: '#818181' },
      ],
    },
}