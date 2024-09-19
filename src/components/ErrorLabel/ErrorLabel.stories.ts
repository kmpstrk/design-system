import type { Meta, StoryObj } from '@storybook/react';
import { ErrorLabel } from './ErrorLabel';


const meta: Meta<typeof ErrorLabel> = {
    title: 'Error Label',
    component: ErrorLabel,
    parameters: {
      layout: 'centered',
    },
    argTypes: {
    }
};
  
export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
    args: {
        text: 'Error message'
    },
}