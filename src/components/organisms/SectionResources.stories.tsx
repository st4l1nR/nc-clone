import React from 'react';
import { Meta, Story } from '@storybook/react';
import SectionResources, { props } from './SectionResources';

export default {
  title: 'Organisms/SectionResources',
  component: SectionResources,
} as Meta;

const Template: Story<props> = (args) => <SectionResources {...args} />;

export const Default = Template.bind({});
