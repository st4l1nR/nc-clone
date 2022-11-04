import React, { FC } from 'react';
import classNames from '@lib/classNames';
import { Title, ButtonLink } from '@components/atoms';
import type { props as linkProps } from '@components/atoms/ButtonLink';

export type props = {
  className?: string;
  image?: string;
  title: string;
  description: string;
  direction?: 'right' | 'left';
  link?: linkProps;
};
const CardInformation: FC<props> = ({ className, title, description, direction, link, image }) => {
  return (
    <div
      className={classNames(
        'flex flex-col space-y-5',
        direction == 'right' && 'items-end text-end',
        className
      )}
    >
      {image && <img className="w-20" src={image}></img>}
      <Title level="h5" text={title} />
      <p className="max-w-xl ">{description}</p>
      {link && (
        <div>
          <ButtonLink {...link} />
        </div>
      )}
    </div>
  );
};

CardInformation.defaultProps = {
  title: 'Title',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam dignissimos fuga eaque, expedita, nesciunt numquam asperiores deserunt aliquid architecto, praesentium eum labore id? Iusto at ducimus id possimus dolor facilis.',
  direction: 'left',
  link: {
    href: '#',
    label: 'Learn more',
  },
};
export default CardInformation;
