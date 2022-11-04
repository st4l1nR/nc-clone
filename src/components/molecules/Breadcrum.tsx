import React, { useEffect } from 'react';
import Link from 'next/link';
import classNames from '@lib/classNames';
export type props = {
  className?: string;
  paths: {
    name: string;
    href?: string;
    icon?: React.ReactElement<SVGElement, string | React.JSXElementConstructor<any>>;
  }[];
};
const Breadcrum: React.FC<props> = ({ className, paths }) => {
  useEffect(() => {
    paths.push({
      name: 'Home',
      href: '/',
    });
  }, []);

  return (
    <div>
      <div className={classNames(className, 'flex items-center space-x-5')}>
        {paths.map(({ name, href, icon }, idx) => (
          <div className="flex items-center space-x-3 text-xs font-bold" key={idx}>
            {icon && icon}
            {href ? (
              <Link href={href}>
                <a>{name}</a>
              </Link>
            ) : (
              <p>{name}</p>
            )}
            {idx !== paths.length - 1 && <span>/</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrum;
