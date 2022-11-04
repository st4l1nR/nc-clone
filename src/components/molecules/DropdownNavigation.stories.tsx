import React from 'react';
import { Meta, Story } from '@storybook/react';
import DropdownNavigation, { props } from './DropdownNavigation';

export default {
  title: 'Molecules/DropdownNavigation',
  component: DropdownNavigation,
} as Meta;

const Template: Story<props> = (args) => <DropdownNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    {
      label: 'Menu',
      href: '#',
      sublinks: [
        {
          label: 'Submenu',
          href: '#',
        },
      ],
    },
    {
      label: 'Menu',
      href: '#',
      sublinks: [
        {
          label: 'Submenu',
          href: '#',
        },
      ],
    },
  ],
};
