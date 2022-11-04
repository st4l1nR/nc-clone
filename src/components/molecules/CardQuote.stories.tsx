import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardQuote, { props } from './CardQuote';

export default {
  title: 'Molecules/CardQuote',
  component: CardQuote,
} as Meta;

const Template: Story<props> = (args) => <CardQuote {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'max-w-sm',
  image: '/images/brand-7.svg',
  comment:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam dignissimos fuga eaque, expedita, nesciunt numquam asperiores deserunt aliquid architecto, praesentium eum labore id? Iusto at ducimus id possimus dolor facilis.',
  author: "Pat O'Callaghan",
  charge: 'Senior Software Engineer',
};
