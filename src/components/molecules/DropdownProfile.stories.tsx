import React from 'react';
import { Meta, Story } from '@storybook/react';
import DropdownProfile, { props } from './DropdownProfile';

export default {
  title: 'Molecules/DropdownProfile',
  component: DropdownProfile,
} as Meta;

const Template: Story<props> = (args) => (
  <div className="max-w-4xl mx-auto">
    <DropdownProfile {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  avatar:"/images/avatar.png",
  name:"Jon Doe"
};
