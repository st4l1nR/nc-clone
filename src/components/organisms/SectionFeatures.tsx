import React, { FC } from 'react';
import { Title } from '@components/atoms';
import { CardInformation } from '@components/molecules';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from '@lib/classNames';
export type props = {
  className?: string;
};
const SectionFeatures: FC<props> = ({ className }) => {
  return (
    <div className={classNames(className, 'section-container')}>
      <div className="text-center">
        <Title level="h2" text="A complete end-to-end testing solution" />
        <Title
          className="mt-5"
          level="h6"
          text="Ghost Inspector makes automated testing for websites and web apps easier — but we haven’t skimped on powerful features. Whether you’re new to QA testing or a seasoned test engineer, we give you a versatile set of tools to achieve your quality assurance goals."
        />
      </div>

      <div className="grid grid-cols-1 gap-5 mt-16 sm:grid-cols-4">
        <CardInformation
          image="/images/shield-icon.svg"
          title="Simple codeless test automation"
          description="Getting started with automated browser testing can be difficult and requires integrating many tools together. Not with Ghost Inspector. Now anyone can test. "
          link={{
            href: '#',
            weight: 'outline',
            label: 'Learn more',
            icon: <FontAwesomeIcon icon={faCircleArrowRight} />,
          }}
          direction="right"
        />
        <img className="col-span-2" src="/images/home-feature.svg" alt="" />
        <CardInformation
          image="/images/adjust-icon.svg"
          title="Advanced features for experienced testers"
          description="Experienced with Selenium or Cypress? Explore our features that go beyond the recorder. Test complex edge cases with JavaScript and tie into CI pipelines."
          link={{
            className: 'max-w-fit',
            href: '#',
            weight: 'outline',
            label: 'Learn more',
            icon: <FontAwesomeIcon icon={faCircleArrowRight} />,
          }}
        />
      </div>
    </div>
  );
};

export default SectionFeatures;
