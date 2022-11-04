import React from 'react';
import { Meta, Story } from '@storybook/react';
import Dropdown, { props } from './Dropdown';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default {
  title: 'Atoms/Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<props> = (args) => (
  <div>
    <Dropdown className="mx-auto" {...args}>
      <div className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        Options
        <ChevronDownIcon
          className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
          aria-hidden="true"
        />
      </div>
    </Dropdown>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      name: 'Dropdown item',
      icon: <CheckIcon className="w-5 h-5" />,
      iconPosition: 'left',
      href: '#',
      divide: 'bottom',
    },
    {
      name: 'Dropdown item',
      icon: <CheckIcon className="w-5 h-5" />,
      iconPosition: 'left',
      href: '#',
    },
    {
      name: 'Dropdown item',
      icon: <CheckIcon className="w-5 h-5" />,
      iconPosition: 'left',
      href: '#',
    },
    {
      name: 'Dropdown item',
      icon: <CheckIcon className="w-5 h-5" />,
      iconPosition: 'left',
      href: '#',
    },
    {
      name: 'Dropdown item',
      icon: <CheckIcon className="w-5 h-5" />,
      iconPosition: 'left',
      href: '#',
      divide: 'top',
    },
  ],
};
