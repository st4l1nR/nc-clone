import React from 'react';
import { Meta, Story } from '@storybook/react';
import SectionBrands, { props } from './SectionBrands';

export default {
  title: 'Organisms/SectionBrands',
  component: SectionBrands,
} as Meta;

const Template: Story<props> = (args) => <SectionBrands {...args} />;

export const Default = Template.bind({});
