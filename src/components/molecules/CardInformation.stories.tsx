import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardInformation, { props } from './CardInformation';

export default {
  title: 'Molecules/CardInformation',
  component: CardInformation,
} as Meta;

const Template: Story<props> = (args) => <CardInformation {...args} />;

export const Default = Template.bind({});
