import React, {FC} from 'react';
import { Title } from '@components/atoms';
import { CardFeature } from '@components/molecules';
import classNames from '@lib/classNames'
export type props = {
  className?:string
};
const SectionWhyUs:FC<props> = ({className}) => {
  return (
    <div className={classNames(className, 'section-container')}>
      <Title level="h2" text="Why choose Ghost Inspector?" align="center" />
      <div className="grid grid-cols-1 gap-5 mt-8 sm:grid-cols-3">
        <CardFeature
          image="/images/point-1.svg"
          title="ANYONE CAN CREATE TESTS"
          description="Save resources now that anyone can record and schedule their own tests. Empower your whole team to take part in quality assurance."
        />
        <CardFeature
          image="/images/point-2.svg"
          title="DON'T LET BUGS COST YOU"
          description="By monitoring your website, Ghost Inspector ensures you never lose a customer because of a broken buy button or buggy sign-up form."
        />
        <CardFeature
          image="/images/point-3.svg"
          title="SPEND MORE TIME DOING WHAT YOU WANT"
          description="Our all-in-one solution saves you hours a day of manual testing. Spend time focusing on your product instead of your tests."
        />
      </div>
    </div>
  );
};

export default SectionWhyUs;
