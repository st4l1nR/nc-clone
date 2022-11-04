import React from 'react';
import classNames from '@lib/classNames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export type props = {
  className?: string;
  image: string;
  comment: string;
  author: string;
  charge: string;
};
const CardFeature: React.FC<props> = ({ className, comment, author, charge, image }) => {
  return (
    <div
      className={classNames('flex flex-col space-y-5 bg-white border p-8 shadow-md rounded-md', className)}
    >
      <div>
        <FontAwesomeIcon className="w-10 h-10 text-gray-300" icon={faQuoteLeft} />
      </div>
      <div>
        <img className="w-auto h-12" src={image} alt="" />
      </div>

      <p>{comment}</p>
      <p className="font-bold">
        {author}, {charge}{' '}
      </p>
    </div>
  );
};

export default CardFeature;
