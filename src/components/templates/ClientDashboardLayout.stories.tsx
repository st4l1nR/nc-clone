import React from 'react';
import { Meta, Story } from '@storybook/react';
import ClientDashboardLayout, { props } from './ClientDashboardLayout';

export default {
  title: 'Templates/ClientDashboardLayout',
  component: ClientDashboardLayout,
} as Meta;

const Template: Story<props> = (args) => <ClientDashboardLayout {...args} />;

export const Default = Template.bind({});
