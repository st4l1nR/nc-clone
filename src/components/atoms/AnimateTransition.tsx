import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';

type animation = 'grow' | 'slide-left';

export type props = {
  as?: any;
  show?: boolean;
  animation: animation;
  children?: React.ReactNode;
};

const useAnimation = (animation: animation) => {
  let animationProps = {};
  switch (animation) {
    case 'grow':
      animationProps = {
        enter: 'transition ease-out duration-100',
        enterFrom: 'transform opacity-0 scale-95',
        enterTo: 'transform opacity-100 scale-100',
        leave: 'transition ease-in duration-75',
        leaveFrom: 'transform opacity-100 scale-100',
        leaveTo: 'transform opacity-0 scale-95',
      };
  }
  return { animationProps };
};

const AnimateTransition: React.FC<props> = ({ as, show, animation, children }) => {
  const { animationProps } = useAnimation(animation);
  return (
    <div>
      <Transition as={as == 'fragment' ? Fragment : as} show={show} {...animationProps}>
        {children}
      </Transition>
    </div>
  );
};



export default AnimateTransition;
