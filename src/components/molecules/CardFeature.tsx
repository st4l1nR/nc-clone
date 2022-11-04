import React from 'react';
import { Title } from '@components/atoms';
import classNames from '@lib/classNames';
export type props = {
  className?: string;
  title: string;
  description: string;
  image: string;
};
const CardFeature: React.FC<props> = ({ className, title, description, image }) => {
  return (
    <div className={classNames('flex flex-col space-y-5 text-center ', className)}>
      <img className="w-full aspect-video" src={image} alt="" />
      <Title level="h6" text={title} align="center" />
      <p >{description}</p>
    </div>
  );
};

export default CardFeature;
