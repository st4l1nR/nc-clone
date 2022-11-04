import React from 'react';
import { Meta, Story } from '@storybook/react';
import SectionQuotes, { props } from './SectionQuotes';

export default {
  title: 'Organisms/SectionQuotes',
  component: SectionQuotes,
} as Meta;

const Template: Story<props> = (args) => <SectionQuotes {...args} />;

export const Default = Template.bind({});
