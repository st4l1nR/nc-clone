import React, {FC, Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classNames from '@lib/classNames';

export type props = {
  label: string;
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
};
const PopoverMenu: FC<props> = ({ label, size,  children }) => {
  return (
    <Popover as="div" className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="flex items-center space-x-3 text-sm font-medium transition focus:outline-none hover:text-gray-400">
            <p>{label}</p>
            <FontAwesomeIcon
              className={classNames('w-3 h-3', open && 'rotate-180 transform')}
              icon={faChevronDown}
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              as="div"
              className={classNames(
                'absolute p-5 mt-3 origin-top-right bg-white border rounded-md shadow-md w-screen',
                size == 'small' ? 'max-w-sm' : size == 'medium' ? 'max-w-md' : ' max-w-lg'
              )}
            >
              {children}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

PopoverMenu.defaultProps = {
  size: 'medium',
};
export default PopoverMenu;
