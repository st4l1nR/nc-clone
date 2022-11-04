import React, {FC} from 'react';
import { Title } from '@components/atoms';
import { CardContent } from '@components/molecules';
import { faCircleArrowRight , faBookOpen, faLifeRing} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from '@lib/classNames'
export type props = {
  className?:string
};
const SectionResources:FC<props> = ({className}) => {
  return (
    <div className={classNames(className, 'section-container')}>
      <Title level="h2" align="center" text="Resources" />
      <div className="mt-10">
        <CardContent
          className="mt-10"
          image="/images/resource-1.svg"
          cardInformation={{
            title: 'Getting started',
            description:
              'Everything you need to know to get setup with Ghost Inspector and run your first automated test',
            direction: 'left',
            link: {
              href: '#',
              label: 'Learn more',
              weight: 'outline',
              icon: <FontAwesomeIcon icon={faCircleArrowRight} />,
            },
          }}
        />
        <CardContent
          className="mt-10"
          image="/images/resource-2.svg"
          cardInformation={{
            title: 'Documentation',
            description:
              "Detailed articles covering every feature, setting, integration and testing scenario that you'll encounter",
            direction: 'left',
            link: {
              href: '#',
              label: 'See documentation',
              weight: 'outline',
              icon: <FontAwesomeIcon icon={faBookOpen} />,
            },
          }}
        />
        <CardContent
          className="mt-10"
          image="/images/resource-3.svg"
          cardInformation={{
            title: 'Online support',
            description:
              'Do you have questions? Are you having trouble with a test? Our top-notch support team is here for you.',
            direction: 'left',
            link: {
              href: '#',
              label: 'Get help',
              weight: 'outline',
              icon: <FontAwesomeIcon icon={faLifeRing} />,
            },
          }}
        />
      </div>
    </div>
  );
};

export default SectionResources;
