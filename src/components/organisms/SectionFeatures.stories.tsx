import React from 'react';
import { Meta, Story } from '@storybook/react';
import SectionFeatures, { props } from './SectionFeatures';

export default {
  title: 'Organisms/SectionFeatures',
  component: SectionFeatures,
} as Meta;

const Template: Story<props> = (args) => <SectionFeatures {...args} />;

export const Default = Template.bind({});
