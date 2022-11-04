import React, { FC } from 'react';
import { TextField, ButtonLink } from '@components/atoms';
import { DropdownProfile } from '@components/molecules';
import { useForm } from 'react-hook-form';
import classNames from '@lib/classNames';
import { UserGroupIcon } from '@heroicons/react/24/solid';

export type props = {
  className?: string;
  isFreeTrial?: boolean;
};
const NavbarClientDashboard: FC<props> = ({ className, isFreeTrial }) => {
  const { register } = useForm();
  return (
    <div className={classNames(className, 'h-24 px-5 mx-auto sm:py-9 max-w-7xl')}>
      <div className="flex items-center w-full space-x-5">
        <img className="w-auto h-14" src="/images/logo.png" alt="" />
        <div className="flex-1"></div>
        <div className="flex items-center space-x-5">
          {isFreeTrial && (
            <div className="items-center hidden sm:flex space-x- 5">
              <p className="text-gray-500 k">You have 10 days remaining in your trial</p>
              <ButtonLink
                href="#"
                label="Invite your team"
                icon={<UserGroupIcon className="w-5 h-5" />}
                color="neutral"
                weight="outline"
              />
            </div>
          )}
          <TextField className="hidden sm:block" placeholder="Search" {...register('search')} />
          <DropdownProfile avatar="/images/avatar.png" name="Jon Doe" />
        </div>
      </div>
    </div>
  );
};

NavbarClientDashboard.defaultProps = {
  isFreeTrial: false,
};
export default NavbarClientDashboard;
