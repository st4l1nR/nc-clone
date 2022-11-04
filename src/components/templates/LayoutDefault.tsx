import React, { FC } from 'react';
import { Navbar, Footer } from '@components/organisms';
export type props = {
  children: React.ReactNode;
};
const LayoutDefault: FC<props> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="h-full mt-32 mb-32">{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutDefault;
