import React, { FC } from 'react';
import Link from 'next/link';
import { Title } from '@components/atoms';
import classNames from '@lib/classNames';

export type props = {
  className?: string;
  title: string;
  links: {
    href: string;
    label: string;
  }[];
  size?: 'small' | 'medium' | 'large';
};
const CardLinks: FC<props> = ({ className, title, links, size }) => {
  return (
    <div
      className={classNames(
        className,
        size == 'small' ? 'text-sm' : size == 'medium' ? 'text-base' : 'text-lg'
      )}
    >
      <p className="font-bold">{title}</p>
      <div className="flex flex-col mt-4 space-y-2">
        {links.map(({ href, label }, key) => (
          <Link href={href}>{label}</Link>
        ))}
      </div>
    </div>
  );
};

CardLinks.defaultProps = {
  size: 'medium',
};

export default CardLinks;
