import React from 'react';
import { ButtonLink } from '@components/atoms';
import { CardLinks, SocialMediaBar } from '@components/molecules';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
export type props = {};

const navigation = [
  {
    title: 'Product',
    links: [
      {
        href: '#',
        label: 'No-code testing',
      },
      {
        href: '#',
        label: 'Advance Capabiliteis',
      },
      {
        href: '#',
        label: 'Pricing',
      },
    ],
  },
  {
    title: 'Solutions',
    links: [
      {
        href: '#',
        label: 'QA Testers',
      },
      {
        href: '#',
        label: 'Engineers',
      },
      {
        href: '#',
        label: 'Product Managers',
      },
      {
        href: '#',
        label: 'Preferred Paterns',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        href: '#',
        label: 'Getting started',
      },
      {
        href: '#',
        label: 'Documentation',
      },
      {
        href: '#',
        label: 'Support',
      },
      {
        href: '#',
        label: 'Service Status',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        href: '#',
        label: 'About Us',
      },
      {
        href: '#',
        label: 'Blog',
      },

      {
        href: '#',
        label: 'Jobs',
      },
    ],
  },
];

const socialMedia = [
  {
    name: 'facebook',
    href: 'https://www.facebook.com',
  },
  {
    name: 'instagram',
    href: 'https://www.instagram.com',
  },
  {
    name: 'twitter',
    href: 'https://www.instagram.com',
  },
  {
    name: 'youtube',
    href: 'https://www.youtube.com',
  },
];
const Footer = () => {
  return (
    <div className="w-full py-8 text-white bg-secondary-500 font-poppins">
      <div className="flex flex-col px-5 mx-auto space-y-5 divide-y-2 divide-white/50 max-w-7xl">
        <div className="flex flex-col justify-between w-full gap-5 py-5 sm:flex-row sm:h-24">
          <p className="flex-1 max-w-2xl font-bold">
            Get started creating useful automated test in minutes. Never let a production bug hurt your
            business again.
          </p>
          <ButtonLink href="/auth/sigin" color="primary-dark" label="Start your free trial" size="large" />
        </div>
        <div className="grid grid-cols-2 gap-5 py-5 sm:grid-cols-5">
          <img className="w-10 h-auto" src="/images/logo.svg" alt="" />
          {navigation.map((item, idx) => (
            <CardLinks size="small" key={idx} {...item} />
          ))}
        </div>
        <div className="flex flex-col w-full gap-5 py-8 sm:flex-row sm:h-24">
          <div className="flex items-center space-x-5 basis-1/3">
            <p className="font-bold">Follow us</p>
            <SocialMediaBar brands={socialMedia} />
          </div>
          <div className="flex items-center justify-between flex-1 text-sm font-medium text-white/50">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">EU & GDPR Compliance</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
