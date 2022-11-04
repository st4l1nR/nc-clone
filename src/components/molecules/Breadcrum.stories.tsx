import React from 'react';
import { Meta, Story } from '@storybook/react';
import Breadcrum, { props } from './Breadcrum';
import { HomeIcon } from '@heroicons/react/24/solid';

export default {
  title: 'Molecules/Breadcrum',
  component: Breadcrum,
} as Meta;

const Template: Story<props> = (args) => <Breadcrum {...args} />;

export const Default = Template.bind({});
Default.args = {
  paths: [
    {
      name: 'Home',
      href: '#',
      icon: <HomeIcon className="w-5 h-5" />,
    },
    {
      name: 'Settings',
      href: '#',
    },
    {
      name: 'User',
      href: '#',
    },
  ],
};
