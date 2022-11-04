import React from 'react';
import { Breadcrum } from '@components/molecules';
import { NavbarClientDashboard } from '@components/organisms';
import { HomeIcon } from '@heroicons/react/24/solid';

export type props = {
  children?: React.ReactNode;
};
const ClientDashboardLayout: React.FC<props> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <NavbarClientDashboard />
      <div className="section-container"></div>

      <div className=" section-container">
        <Breadcrum
          className="mt-10"
          paths={[
            {
              name: 'Home',
              href: '#',
              icon: <HomeIcon className="w-5 h-5" />,
            },
          ]}
        />
        <div className="mt-32">{children}</div>
      </div>
    </div>
  );
};

export default ClientDashboardLayout;
