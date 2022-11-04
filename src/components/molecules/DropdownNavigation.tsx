import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { ButtonLink } from '@components/atoms';
import classNames from '@lib/classNames';

export type props = {
  className?: string;
  links: {
    label: string;
    href: string;
    sublinks?: [
      {
        label: string;
        href: string;
      }
    ];
  }[];
};
const DropdownMenu: React.FC<props> = ({ className, links }) => {
  return (
    <>
      <Menu as="div" className={classNames('relative', className)}>
        {({ open }) => (
          <>
            <Menu.Button>
              {open ? (
                <FontAwesomeIcon className="w-5 h-5" icon={faClose} />
              ) : (
                <FontAwesomeIcon className="w-5 h-5" icon={faBars} />
              )}
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="fixed right-0 z-50 w-screen mt-5 origin-top-right bg-white">
                {links.map(({ label, href, sublinks }, idx) => (
                  <Menu.Item as="div" key={idx}>
                    <ButtonLink
                      href={href}
                      color="neutral"
                      weight="ghost"
                      label={label}
                      shape="brick"
                      align="right"
                      fullWidth={true}
                    />
                    {sublinks &&
                      sublinks.map(({ label, href }, idx) => (
                        <Menu.Item as="div" key={idx}>
                          <ButtonLink
                            className="px-10"
                            key={idx}
                            href={href}
                            color="neutral"
                            weight="ghost"
                            label={label}
                            shape="brick"
                            align="right"
                            fullWidth={true}
                          />
                        </Menu.Item>
                      ))}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </>
  );
};

export default DropdownMenu;
