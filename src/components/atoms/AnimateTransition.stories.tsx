import React from 'react';
import { Meta, Story } from '@storybook/react';
import AnimateTransition, { props } from './AnimateTransition';
import Button from './Button';

export default {
  title: 'Atoms/AnimateTransition',
  component: AnimateTransition,
} as Meta;

const Template: Story<props> = (args) => (
  <AnimateTransition {...args}>
    <Button label="Button" />
  </AnimateTransition>
);

export const Default = Template.bind({});
Default.args = {
  show: true,
  animation: 'grow',
};
