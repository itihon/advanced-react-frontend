import React, { useRef } from 'react';
import classes from './Page.module.scss';
import useInfiniteScroll from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

interface PageProps {
  children?: React.ReactNode; 
  onScrollEnd?: () => void;
}

const Page: React.FC<PageProps> = ({ children, onScrollEnd }) => {
  const scrollableRef = useRef(null);
  const triggerRef = useRef(null);

  useInfiniteScroll({
    scrollableRef, 
    triggerRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={scrollableRef} className={classes.Page}>
      {children}
      <div ref={triggerRef}></div>
    </section>
  );
};

export default Page;