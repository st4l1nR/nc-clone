import React, { FC } from 'react';
import { Title } from '@components/atoms';
import { CardQuote } from '@components/molecules';
import classNames from '@lib/classNames';
export type props = {
  className?: string;
};

const SectionQuotes: FC<props> = ({ className }) => {
  return (
    <div className={classNames(className, 'section-container')}>
      <Title level="h2" text="Don't take our word for it" align="center" />
      <Title className="mt-5" level="h6" align="center" text="Her's what our customer are saying" />
      <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-3">
        <CardQuote
          className="max-w-sm"
          image="/images/brand-1.svg"
          comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam dignissimos fuga eaque, expedita, nesciunt numquam asperiores deserunt aliquid architecto, praesentium eum labore id? Iusto at ducimus id possimus dolor facilis."
          author="Pat O'Callaghan"
          charge="Senior Software Engineer"
        />
        <CardQuote
          className="max-w-sm"
          image="/images/brand-3.svg"
          comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam dignissimos fuga eaque, expedita, nesciunt numquam asperiores deserunt aliquid architecto, praesentium eum labore id? Iusto at ducimus id possimus dolor facilis."
          author="Pat O'Callaghan"
          charge="Senior Software Engineer"
        />
        <CardQuote
          className="max-w-sm"
          image="/images/brand-7.svg"
          comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam dignissimos fuga eaque, expedita, nesciunt numquam asperiores deserunt aliquid architecto, praesentium eum labore id? Iusto at ducimus id possimus dolor facilis."
          author="Pat O'Callaghan"
          charge="Senior Software Engineer"
        />
      </div>
    </div>
  );
};

export default SectionQuotes;
