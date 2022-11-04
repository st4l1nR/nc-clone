import React from 'react';
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { AnimateTransition } from '@components/atoms';
import classNames from '@lib/classNames';

export type props = {
  className?: string;
  items: {
    className?: string;
    name: string;
    icon?: React.ReactElement<SVGElement, string | React.JSXElementConstructor<any>>;
    iconPosition?: 'left' | 'right';
    href?: string;
    action?: () => void;
    divide?: 'top' | 'bottom';
  }[];
  children?: React.ReactNode;
};

const Dropdown: React.FC<props> = ({ className, items, children }) => {
  return (
    <Menu as="div" className={classNames('relative max-w-fit ', className)}>
      <Menu.Button>{children}</Menu.Button>
      <AnimateTransition as="fragment" animation="grow">
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white border rounded-md shadow-md focus:outline-none">
          {items.map(({ className, name, icon, href, action, divide, iconPosition = 'left' }, idx) => (
            <Menu.Item key={idx} as="div">
              {({ active }) => (
                <>
                  {href ? (
                    <Link href={href}>
                      <a
                        className={classNames(
                          'flex items-center space-x-5 py-3 px-5 bg-white text-gray-500 hover:text-secondary hover:bg-gray-100/50',
                          divide == 'top' ? 'border-t' : divide == 'bottom' && 'border-b',
                          active && 'text-secondary bg-gray-200',
                          className
                        )}
                      >
                        {icon && iconPosition == 'left' && <div>{icon}</div>}
                        <p>{name}</p>
                        {icon && iconPosition == 'right' && <div>{icon}</div>}
                      </a>
                    </Link>
                  ) : (
                    <button
                      className={classNames(
                        className,
                        'flex items-center space-x-5 py-3 px-5 bg-white text-gray-500 hover:text-secondary w-full hover:bg-gray-100/50 text-left',
                        divide == 'top' ? 'border-t' : divide == 'bottom' && 'border-b',
                        active && 'text-secondary bg-gray-200'
                      )}
                      onClick={action}
                    >
                      {icon && iconPosition == 'left' && <div>{icon}</div>}
                      <p>{name}</p>
                      {icon && iconPosition == 'right' && <div>{icon}</div>}
                    </button>
                  )}
                </>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </AnimateTransition>
    </Menu>
  );
};

export default Dropdown;
