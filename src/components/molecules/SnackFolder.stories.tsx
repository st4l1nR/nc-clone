import React from 'react';
import { Meta, Story } from '@storybook/react';
import SnackFolder, { props } from './SnackFolder';

export default {
  title: 'Molecules/SnackFolder',
  component: SnackFolder,
} as Meta;

const Template: Story<props> = (args) => <SnackFolder {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Reportin & Smoke',
  testCount: 16,
  testFailling: 12,
  testPassing: 5,
};
