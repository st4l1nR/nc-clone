import React from 'react';
import classNames from '@lib/classNames';

export type props = {
  className?: string;
  status: 'success' | 'neutral' | 'error';
  count?: number;
  label: string;
  icon?: React.ReactElement<SVGElement, string | React.JSXElementConstructor<any>>;
};
const Badge: React.FC<props> = ({ className, status, count, label, icon }) => {
  const badgeStyle =
    status == 'success'
      ? 'text-green-500 bg-green-200'
      : status == 'neutral'
      ? 'text-gray-500 border'
      : 'text-red-500 bg-red-200';
  const iconNumberColor =
    status == 'success' ? 'text-green-500 ' : status == 'neutral' ? 'text-gray-500 ' : 'text-red-500 ';
  return (
    <div
      className={classNames(
        'px-5 py-3 rounded-full flex space-x-1 items-center text-xs max-w-fit',
        className,
        badgeStyle
      )}
    >
      {icon && <div className={iconNumberColor}>{icon}</div>}
      {count && <p className={classNames('font-bold', iconNumberColor)}>{count}</p>}
      <p>{label}</p>
    </div>
  );
};

export default Badge;
