import React from 'react';
import { Meta, Story } from '@storybook/react';
import SocialMediaBar, { props } from './SocialMediaBar';

export default {
  title: 'Molecules/SocialMediaBar',
  component: SocialMediaBar,
} as Meta;

const Template: Story<props> = (args) => <SocialMediaBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  brands: [
    {
      name: 'facebook',
      href: 'https://www.facebook.com',
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com',
    },
    {
      name: 'twitter',
      href: 'https://www.instagram.com',
    },
    {
      name: 'youtube',
      href: 'https://www.youtube.com',
    },

  ],
  size:"medium"
};
