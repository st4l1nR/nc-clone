import React from 'react';
import { Meta, Story } from '@storybook/react';
import Navbar, { props } from './Navbar';

export default {
  title: 'Organisms/Navbar',
  component: Navbar,
} as Meta;

const Template: Story<props> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
