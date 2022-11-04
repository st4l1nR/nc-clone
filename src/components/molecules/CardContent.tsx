import React, { FC } from 'react';
import { Title } from '@components/atoms';
import { CardInformation } from '@components/molecules';
import type { props as cardInformationProps } from '@components/molecules/CardInformation';
import classNames from '@lib/classNames';

export type props = {
  className?: string;
  title?: string;
  image: string;
  cardInformation: cardInformationProps;
  reverse?: boolean;
};
const CardContent: FC<props> = ({ className, title, image, reverse, cardInformation }) => {
  return (
    <div className={classNames(className, 'section-container')}>
      {title && <Title className="text-center" level="h2" text={title} />}
      <div className="grid items-center grid-cols-1 gap-10 mt-10 sm:grid-cols-2">
        <CardInformation {...cardInformation} />
        <img className={classNames(reverse && 'sm:order-first ')} src={image} alt="" />
      </div>
    </div>
  );
};

export default CardContent;
