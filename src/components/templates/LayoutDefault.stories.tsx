import React from 'react';
import { Meta, Story } from '@storybook/react';
import LayoutDefault, { props } from './LayoutDefault';

export default {
  title: 'Templates/LayoutDefault',
  component: LayoutDefault,
} as Meta;

const Template: Story<props> = (args) => <LayoutDefault {...args} />;

export const Default = Template.bind({});
