import React, { FC } from 'react';
import { CardContent } from '@components/molecules';
import classNames from '@lib/classNames';

export type props = {
  className?: string;
};

const SectionFreeTrial: FC<props> = ({ className }) => {
  return (
    <div
      className={classNames(className, 'section-container rounded-md shadow-sm bg-primary-200/10 py-8 px-5')}
    >
      <CardContent
        image="/images/computer-man.svg"
        cardInformation={{
          title: 'Start testing today',
          description:
            'Our 14 day free trial gives you and your team full access. Create tests in minutes. No credit card required.',
          direction: 'left',
          link: {
            href: '#',
            label: 'Start your free trial',
          },
        }}
      />
    </div>
  );
};

export default SectionFreeTrial;
