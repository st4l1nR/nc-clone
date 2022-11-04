import React from 'react';
import { Meta, Story } from '@storybook/react';
import Footer, { props } from './Footer';

export default {
  title: 'Organisms/Footer',
  component: Footer,
} as Meta;

const Template: Story<props> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
