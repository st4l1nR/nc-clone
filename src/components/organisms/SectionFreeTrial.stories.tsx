import React from 'react';
import { Meta, Story } from '@storybook/react';
import SectionFreeTrial, { props } from './SectionFreeTrial';

export default {
  title: 'Organisms/SectionFreeTrial',
  component: SectionFreeTrial,
} as Meta;

const Template: Story<props> = (args) => <SectionFreeTrial {...args} />;

export const Default = Template.bind({});
