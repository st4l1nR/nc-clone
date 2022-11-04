import React from 'react';
import { Title, ButtonLink, Button } from '@components/atoms';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export type props = {};
const Hero = () => {
  return (
    <div className="px-5 mx-auto max-w-7xl">
      <div className="flex flex-col space-y-5 text-center">
        <Title level="h1" text="Catch bugs before they cost you" />
        <Title
          level="h6"
          text="Easily create automated browser tests for your websites and web applications.
Ensure everything works and looks the way it should. No coding required."
        />

        <div className="flex justify-center space-x-5">
          <ButtonLink href="#" color="primary-dark" label="Start your free trial" size="large" />
          <ButtonLink
            href="#"
            color="primary-dark"
            weight="outline"
            label="Book a demo"
            size="large"
            icon={<FontAwesomeIcon icon={faCirclePlay} />}
          />
        </div>
      </div>
      <img className="w-full mt-8" src="/images/home-hero.svg" alt="" />
    </div>
  );
};

export default Hero;
