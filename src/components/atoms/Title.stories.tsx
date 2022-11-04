import React from 'react';
import { Meta, Story } from '@storybook/react';
import Title, { props } from './Title';

export default {
  title: 'Atoms/Title',
  component: Title,
} as Meta;

const Template: Story<props> = (args) => <Title {...args} />;

export const Default = Template.bind({});
