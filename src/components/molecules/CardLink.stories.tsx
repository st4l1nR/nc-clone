import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardLinks, { props } from './CardLinks';

export default {
  title: 'Molecules/CardLinks',
  component: CardLinks,
} as Meta;

const Template: Story<props> = (args) => <CardLinks {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Product',
  links: [
    {
      href: '#',
      label: 'No-code testing',
    },
    {
      href: '#',
      label: 'Advanced Capabilities',
    },
    {
      href: '#',
      label: 'Pricing',
    },
  ],
  size: 'medium',
};
