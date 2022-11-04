import React from 'react';
import { Meta, Story } from '@storybook/react';
import NavbarClientDashboard, { props } from './NavbarClientDashboard';

export default {
  title: 'Organisms/NavbarClientDashboard',
  component: NavbarClientDashboard,
} as Meta;

const Template: Story<props> = (args) => <NavbarClientDashboard {...args} />;

export const Default = Template.bind({});
Default.args = {
  isFreeTrial: false,
};

