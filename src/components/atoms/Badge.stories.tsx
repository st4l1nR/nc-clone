import React from 'react';
import { Meta, Story } from '@storybook/react';
import Badge, { props } from './Badge';
import { ListBulletIcon } from '@heroicons/react/24/solid';

export default {
  title: 'Atoms/Badge',
  component: Badge,
} as Meta;

const Template: Story<props> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 'neutral',
  icon: <ListBulletIcon className="w-5 h-5" />,
  count: 12,
  label: 'tests',
};
