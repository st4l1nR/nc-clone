import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardStep, { props } from './CardStep';

export default {
  title: 'Molecules/CardStep',
  component: CardStep,
} as Meta;

const Template: Story<props> = (args) => <CardStep {...args} />;

export const Default = Template.bind({});
Default.args = {};
