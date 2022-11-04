import React from 'react';
import classNames from '@lib/classNames';
import { Disclosure } from '@headlessui/react';
import { Badge, Dropdown } from '@components/atoms';
import {
  Cog6ToothIcon,
  PencilIcon,
  XMarkIcon,
  ListBulletIcon,
  FolderIcon,
  FolderOpenIcon,
} from '@heroicons/react/24/solid';

export type props = {
  className?: string;
  name: string;
  testCount: number;
  faillingCount: number;
  passingCount: number;
  suites: any[];
};
const SnackFolder: React.FC<props> = ({ className, name, testCount, faillingCount, passingCount }) => {
  return (
    <Disclosure as="div" className={classNames(' bg-white  dark:bg-black', className)}>
      {({ open }) => (
        <>
          <div className="flex items-center justify-between px-5 py-3 space-x-5 border-b ">
            <div className="flex items-center space-x-3">
              {open ? <FolderOpenIcon className="w-5 h-5" /> : <FolderIcon className="w-5 h-5" />}
              <Disclosure.Button className="under-line">{name}</Disclosure.Button>
              {open && (
                <Dropdown
                  items={[
                    { icon: <PencilIcon className="w-5 h-5" />, name: 'Rename Folder', action: () => {} },
                    { icon: <XMarkIcon className="w-5 h-5" />, name: 'Delete Folder', action: () => {} },
                  ]}
                >
                  <Cog6ToothIcon className="w-5 h-5" />
                </Dropdown>
              )}
            </div>
            <div className="flex items-center space-x-5">
              <Badge
                status="neutral"
                icon={<ListBulletIcon className="w-5 h-5" />}
                count={testCount}
                label="tests"
              />
              <Badge
                status="error"
                icon={<XMarkIcon className="w-5 h-5" />}
                count={faillingCount}
                label="Failing"
              />
              <Badge
                status="success"
                icon={<ListBulletIcon className="w-5 h-5" />}
                count={passingCount}
                label="Passing"
              />
            </div>
          </div>
          <Disclosure.Panel className="py-5 pl-8 text-gray-500"></Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default SnackFolder;
