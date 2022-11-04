import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { props } from './Button';
import { CheckIcon } from '@heroicons/react/24/outline';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<props> = (args) => <Button {...args} />;

export const Default = Template.bind({
  label:"Button"
});
Default.args  = {
  label:"Button"
}
export const Outline = Template.bind({});
Outline.args = {
  label: 'Button',
  weight: 'outline',
};

export const Icon = Template.bind({});
Icon.args = {
  label: 'Button',
  icon: <CheckIcon className="w-5 h-5" />,
};
