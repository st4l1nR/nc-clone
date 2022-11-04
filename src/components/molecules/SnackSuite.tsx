import React from 'react';
import {Badge} from '@components/atoms'
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

  };

const SnackSuite:React.FC<props> = ({className, name, testCount, faillingCount, passingCount}) => {
  return (
    <div>
      {' '}
      <div className="flex items-center justify-between px-5 py-3 space-x-5 border-b ">
        <div className="flex items-center space-x-3">
   
          <a>{name}</a>
      
        </div>
        <div className="flex items-center space-x-5">
          <Badge
            status="neutral"
            icon={<ListBulletIcon className="w-5 h-5" />}
            count={testCount}
            label="tests"
          />
          <Badge status="error" icon={<XMarkIcon className="w-5 h-5" />} count={faillingCount} label="Failing" />
          <Badge
            status="success"
            icon={<ListBulletIcon className="w-5 h-5" />}
            count={passingCount}
            label="Passing"
          />
        </div>
      </div>
    </div>
  );
};

export default SnackSuite;
