import React from 'react';
import { Meta, Story } from '@storybook/react';
import ButtonLink, { props } from './ButtonLink';
import { CheckIcon } from '@heroicons/react/24/outline';

export default {
  title: 'Atoms/ButtonLink',
  component: ButtonLink,
} as Meta;

const Template: Story<props> = (args) => <ButtonLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: '#',
  label: 'Button Link',
};

export const Outline = Template.bind({});
Outline.args = {
  href: '#',
  label: 'Button Link',
  weight: 'outline',
};

export const Icon = Template.bind({});
Icon.args = {
  href: '#',
  label: 'Button Link',
  icon: <CheckIcon className="w-5 h-5" />,
};
