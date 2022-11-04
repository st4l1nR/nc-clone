import React, { FC } from 'react';
import { Title } from '@components/atoms';
import classNames from '@lib/classNames';
export type props = {
  className?: string;
};
const SectionBrands: FC<props> = ({ className }) => {
  return (
    <div className={classNames(className, 'text-center section-container')}>
      <Title level="h4" text="Trusted by" align="center" />
      <div className="grid grid-cols-2 gap-5 mt-5 sm:grid-cols-6">
        <img src="/images/brand-1.svg" alt="" />
        <img src="/images/brand-2.svg" alt="" />
        <img src="/images/brand-3.svg" alt="" />
        <img src="/images/brand-4.svg" alt="" />
        <img src="/images/brand-5.svg" alt="" />
        <img src="/images/brand-6.svg" alt="" />
      </div>
    </div>
  );
};

export default SectionBrands;
