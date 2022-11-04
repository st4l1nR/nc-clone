import React from 'react';
import { Avatar, Dropdown } from '@components/atoms';
import {
  CheckIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  GlobeAmericasIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/solid';

export type props = {
  avatar: string;
  name: string;
};
const DropdownProfile: React.FC<props> = ({ name, avatar }) => {
  return (
    <Dropdown
      items={[
        {
          name: 'Settings',
          icon: <Cog6ToothIcon className="w-5 h-5" />,
          iconPosition: 'left',
          href: '/dashboard/settings',
          divide: 'bottom',
        },
        {
          name: 'Documentation',
          icon: <BookOpenIcon className="w-5 h-5" />,
          iconPosition: 'left',
          href: '#',
        },
        {
          name: 'Contact Support',
          icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />,
          iconPosition: 'left',
          href: '#',
        },
        {
          name: 'Install Test Recorder',
          icon: <GlobeAmericasIcon className="w-5 h-5" />,
          iconPosition: 'left',
          href: '#',
        },
        {
          name: 'Sign out',
          icon: <ArrowRightOnRectangleIcon className="w-5 h-5" />,
          iconPosition: 'left',
          href: '#',
          divide: 'top',
        },
      ]}
    >
      <div className="flex items-center space-x-5">
        <Avatar image={avatar} />
        <div className="hidden space-x-5 sm:items-center sm:flex">
          <span className="min-w-fit">{name}</span>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
      </div>
    </Dropdown>
  );
};

export default DropdownProfile;
