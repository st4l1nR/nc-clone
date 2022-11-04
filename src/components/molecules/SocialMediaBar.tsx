import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import classNames from '@lib/classNames';


export type props = {
  className?: string;
  brands: {
    name: string;
    href: string;
  }[];
  size?: 'small' | 'medium' | 'large';
};

const getIcon = (name) => {
  switch (name) {
    case 'facebook':
      return faFacebook;
    case 'instagram':
      return faInstagram;
    case 'twitter':
      return faTwitter;
    case 'youtube':
      return faYoutube;
    case 'linkedin':
      return faLinkedin;
  }
};

const SocialMediaBar: FC<props> = ({ className, brands, size }) => {
  const iconSize = classNames(size == 'small' ? 'w-3 h-3' : size == 'medium' ? 'w-5 w-5' : 'w-10 h-10');

  return (
    <div className={classNames(className, 'flex space-x-5')}>
      {brands.map(({ name, href }, idx) => (
        <a href={href} target="_blank">
          <FontAwesomeIcon className={iconSize} icon={getIcon(name)} />
        </a>
      ))}
    </div>
  );
};

SocialMediaBar.defaultProps = {
  size: 'medium',
};
export default SocialMediaBar;
