import React from 'react';
import { Meta, Story } from '@storybook/react';
import Avatar, { props } from './Avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<props> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: '/images/avatar.png',
  size: 'medium',
  shape: 'pill',
};
