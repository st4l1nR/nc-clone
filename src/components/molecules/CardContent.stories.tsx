import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardContent, { props } from './CardContent';

export default {
  title: 'Molecules/CardContent',
  component: CardContent,
} as Meta;

const Template: Story<props> = (args) => <CardContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "If anything breaks, you'll be the first to know",
  image: 'images/feature-1.svg',
  cardInformation: {
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam dignissimos fuga eaque, expedita, nesciunt numquam asperiores deserunt aliquid architecto, praesentium eum labore id? Iusto at ducimus id possimus dolor facilis.',
    direction: 'left',
    link: {
      href: '#',
      label: 'Learn more',
    },
  },
};
