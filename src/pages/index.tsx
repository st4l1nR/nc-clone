import React from 'react';
import { Hero , SectionBrands, SectionFeatures, SectionFeaturesList, SectionFreeTrial, SectionWhyUs, SectionQuotes, SectionResources} from '@components/organisms';
import { LayoutDefault } from '@components/templates';

const index = () => {
  return (
    <div>
      <Hero />
      <SectionBrands className="mt-32"/>
      <SectionFeatures className="mt-32"/>
      <SectionFeaturesList className="mt-32"/>
      <SectionFreeTrial className="mt-32"/>
      <SectionWhyUs className="mt-32"/>
      <SectionQuotes className="mt-32"/>
      <SectionResources className="mt-32"/>
    </div>
  );
};

index.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};
export default index;
