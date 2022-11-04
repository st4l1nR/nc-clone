import React from 'react';
import { LayoutDefault } from '@components/templates';

const pricing = () => {
  return (
    <div>

    </div>
  );
};

pricing.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};
export default pricing;
