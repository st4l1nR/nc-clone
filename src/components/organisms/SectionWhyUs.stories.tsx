import React from 'react';
import { Meta, Story } from '@storybook/react';
import SectionWhyUs, { props } from './SectionWhyUs';

export default {
  title: 'Organisms/SectionWhyUs',
  component: SectionWhyUs,
} as Meta;

const Template: Story<props> = (args) => <SectionWhyUs {...args} />;

export const Default = Template.bind({});
