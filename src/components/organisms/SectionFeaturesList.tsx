import React, { FC } from 'react';
import { CardContent } from '@components/molecules';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type props = {
  className?: string;
};
const SectionFeaturesList: FC<props> = ({ className }) => {
  return (
    <div className={className}>
      <CardContent
        className="mt-32"
        image="/images/feature-1.svg"
        cardInformation={{
          title: 'Web Test Recorder',
          description:
            'Save hours of writing Selenium tests with our web test recorder. Capture user flows right in your browser. Turn manual testing into reusable automated tests that can run continuously.',
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
        className="mt-32"
        image="/images/feature-2.svg"
        cardInformation={{
          title: 'Codeless Test Editor',
          description:
            'Our no-code / low-code editor makes it simple to build and maintain your automated tests. Specify actions and assertions for your browser test to carry out. Adjust CSS or XPath selectors. Define JavaScript, variables, conditions, reusable modules and more!',
          direction: 'left',
          link: {
            href: '#',
            label: 'Learn more',
            weight: 'outline',
            icon: <FontAwesomeIcon icon={faCircleArrowRight} />,
          },
        }}
        reverse={true}
      />
      <CardContent
        className="mt-32"
        image="/images/feature-3.svg"
        cardInformation={{
          title: 'Schedule Tests Anytime',
          description:
            'Monitor your website or web app by running your browser tests on a schedule. Define intervals or specific days and times. Ghost Inspector will continuously monitor the functionality of your website.',
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
        className="mt-32"
        image="/images/feature-4.svg"
        cardInformation={{
          title: 'Alerts, Integrations & API',
          description:
            "Get notified immediately when a test fails through email, Slack, Microsoft Teams, PagerDuty, GitHub and many other services. Our detailed reporting with screenshots and video show you exactly what's broken.",
          direction: 'left',
          link: {
            href: '#',
            label: 'Learn more',
            weight: 'outline',
            icon: <FontAwesomeIcon icon={faCircleArrowRight} />,
          },
        }}
        reverse={true}
      />
      <CardContent
        className="mt-32"
        image="/images/feature-5.svg"
        title="Ensure everything looks visually correct"
        cardInformation={{
          title: 'Alerts, Integrations & API',
          description:
            "Get notified immediately when a test fails through email, Slack, Microsoft Teams, PagerDuty, GitHub and many other services. Our detailed reporting with screenshots and video show you exactly what's broken.",
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
        className="mt-32"
        image="/images/feature-6.svg"
        cardInformation={{
          title: 'Cross-Browser & Responsive',
          description:
            "Run end-to-end tests using different web browsers and screen sizes, including mobile and tablet views. Our combination of cross-browser testing and responsive testing lets you cover every scenario.",
          direction: 'left',
          link: {
            href: '#',
            label: 'Learn more',
            weight: 'outline',
            icon: <FontAwesomeIcon icon={faCircleArrowRight} />,
          },
        }}
        reverse={true}
      />
    </div>
  );
};

export default SectionFeaturesList;
