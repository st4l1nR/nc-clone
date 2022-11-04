import React from 'react';
import { Meta, Story } from '@storybook/react';
import Hero, { props } from './Hero';

export default {
  title: 'Organisms/Hero',
  component: Hero,
} as Meta;

const Template: Story<props> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
