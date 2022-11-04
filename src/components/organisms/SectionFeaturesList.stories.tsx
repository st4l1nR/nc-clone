import React from 'react';
import { Meta, Story } from '@storybook/react';
import SectionFeaturesList, { props } from './SectionFeaturesList';

export default {
  title: 'Organisms/SectionFeaturesList',
  component: SectionFeaturesList,
} as Meta;

const Template: Story<props> = (args) => <SectionFeaturesList {...args} />;

export const Default = Template.bind({});
