import React from 'react';
import { Meta, Story } from '@storybook/react';
import TextField, { props } from './TextField';

export default {
  title: 'Atoms/TextField',
  component: TextField,
} as Meta;

const Template: Story<props> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  color:"primary",
  placeholder:"Text field"
};

