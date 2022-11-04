import React, { FC, ReactElement, JSXElementConstructor } from 'react';
import classNames from '@lib/classNames';
import Link from 'next/link';
export type props = {
  className?: string;
  icon?: ReactElement<SVGElement, string | JSXElementConstructor<any>>;
  title?: string;
  description: string;
  size?: 'small' | 'medium' | 'large';
  href?: string;
};
const SnackInformation: FC<props> = ({ className, icon, title, description, size, href }) => {
  if (href) {
    return (
      <Link href={href}>
        <a className={classNames(className, 'flex items-center space-x-5')}>
          {icon}
          <div
            className={classNames(size == 'small' ? 'text-sm' : size == 'medium' ? 'text-base' : 'text-lg')}
          >
            <p className="font-bold">{title}</p>
            <p>{description}</p>
          </div>
        </a>
      </Link>
    );
  }
  return (
    <div className={classNames(className, 'flex items-center space-x-5')}>
      {icon}
      <div className={classNames(size == 'small' ? 'text-sm' : size == 'medium' ? 'text-base' : 'text-lg')}>
        <p className="font-bold">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
SnackInformation.defaultProps = {
  size: 'medium',
};
export default SnackInformation;
