import React from 'react';
import { Meta, Story } from '@storybook/react';
import PopoverPanel, { props } from './PopoverPanel';

export default {
  title: 'Atoms/PopoverPanel',
  component: PopoverPanel,
} as Meta;

const Template: Story<props> = (args) => <PopoverPanel {...args} />;

export const Default = Template.bind({});

Default.args = {
  label:"Features",
  size:"medium"
};
