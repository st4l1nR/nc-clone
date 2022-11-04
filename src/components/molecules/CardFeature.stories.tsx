import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardFeature, { props } from './CardFeature';

export default {
  title: 'Molecules/CardFeature',
  component: CardFeature,
} as Meta;

const Template: Story<props> = (args) => <CardFeature {...args} />;

export const Default = Template.bind({});
Default.args = {
  className:"max-w-sm",
  image:"/images/point-1.svg",
  title: 'Title',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam dignissimos fuga eaque, expedita, nesciunt numquam asperiores deserunt aliquid architecto, praesentium eum labore id? Iusto at ducimus id possimus dolor facilis.',
  };
