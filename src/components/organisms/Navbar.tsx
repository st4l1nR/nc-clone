import React, {FC} from 'react';
import { ButtonLink, PopoverPanel } from '@components/atoms';
import { DropdownNavigation } from '@components/molecules';
import Link from 'next/link';
import classNames from '@lib/classNames';

export type props = {
  className?: string;
};
const Navbar:FC<props> = ({ className }) => {
  return (
    <div className={classNames(className, 'h-24 px-5 mx-auto py-9 max-w-7xl')}>
      <div className="flex items-center justify-between w-full space-x-5">
        <div className="flex items-center space-x-5">
          <img className="w-auto h-20" src="/images/logo.png" alt="" />
          <div className="items-center hidden space-x-5 lg:flex ">
            <PopoverPanel label="Features"></PopoverPanel>
            <PopoverPanel label="Solutions"></PopoverPanel>
            <Link href="/pricing">
              <a className="text-sm font-medium focus:outline-none hover:text-gray-400">Pricing</a>
            </Link>
            <PopoverPanel label="Resources"></PopoverPanel>
          </div>
        </div>
        <div className="items-center hidden space-x-5 lg:flex ">
          <Link href="/auth/signup">Login</Link>
          <ButtonLink href="/auth/signin"     color="primary-dark" label="Sign up" />
        </div>
        <DropdownNavigation
          className="lg:hidden"
          links={[
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
          ]}
        />
      </div>
    </div>
  );
};

export default Navbar;
