import React from 'react';
import { Meta, Story } from '@storybook/react';
import SnackInformation, { props } from './SnackInformation';
import { CheckIcon } from '@heroicons/react/24/solid';

export default {
  title: 'Molecules/SnackInformation',
  component: SnackInformation,
} as Meta;

const Template: Story<props> = (args) => <SnackInformation {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <CheckIcon className="w-5 h-5" />,
  title: 'Getting Started',
  description: 'Everythin you need to know to start running automated test',
  size:"medium"
};

export const WithRedirection = Template.bind({});
WithRedirection.args = {
  icon: <CheckIcon className="w-5 h-5" />,
  title: 'Getting Started',
  description: 'Everythin you need to know to start running automated test',
  size:"medium",
  href:"#"
};
