import React from 'react';
import classNames from '@lib/classNames';
export type props = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
  className?: string;
  image?: string;
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  shape?: 'pill' | 'semibrick';
};
const Avatar: React.FC<props> = ({ className, image, size, shape }) => {
  const sizeStyle =
    size == 'extra-small'
      ? 'w-6 h-6 '
      : size == 'small'
      ? 'w-8 h-8 '
      : size == 'medium'
      ? 'w-10 h-10'
      : size == 'large'
      ? 'w-20 h-20'
      : 'w-36 h-36 ';
  return (
    <img
      className={classNames(
        'object-cover',
        sizeStyle,
        shape == 'semibrick' ? 'rounded-md' : 'rounded-full',
        className
      )}
      src={image}
    ></img>
  );
};

Avatar.defaultProps = {
  image: '/images/avatar.png',
  size: 'medium',
  shape: 'pill',
};

export default Avatar;
