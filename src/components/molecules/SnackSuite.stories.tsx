import React from 'react';
import { Meta, Story } from '@storybook/react';
import SnackSuite, { props } from './SnackSuite';

export default {
  title: 'Molecules/SnackSuite',
  component: SnackSuite,
} as Meta;

const Template: Story<props> = (args) => <SnackSuite {...args} />;

export const Default = Template.bind({});
Default.args = {};
