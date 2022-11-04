import React from 'react';
import { Meta, Story } from '@storybook/react';
import Radio, { props } from './Radio';

export default {
  title: 'Atoms/Radio',
  component: Radio,
} as Meta;

const Template: Story<props> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  color:"primary",
  label:"Right click"
};

