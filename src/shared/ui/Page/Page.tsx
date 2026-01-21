import React, { useCallback, useEffect, useRef, memo, UIEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classes from './Page.module.scss';
import useInfiniteScroll from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { restoreScrollPosition, saveScrollPosition } from './model/slice/pageSlice';

interface PageProps {
  children?: React.ReactNode; 
  onScrollEnd?: () => void;
  scrollRestore?: boolean;
  scrollRestoreDelay?: number;
}

const Page: React.FC<PageProps> = ({ children, onScrollEnd, scrollRestore, scrollRestoreDelay = 100 }) => {
  const scrollableRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  const [isScrollRestored, setIsScrollRestored] = useState(false);

  const onScroll = useCallback((e: UIEvent<HTMLDivElement>) => {
    if (scrollRestore && isScrollRestored) {
      dispatch(saveScrollPosition({
        path: pathname,
        scrollPosition: e.currentTarget.scrollTop,
      }));
    }
  }, [dispatch, pathname, scrollRestore, isScrollRestored]);

  useInfiniteScroll({
    scrollableRef, 
    triggerRef,
    callback: isScrollRestored ? onScrollEnd : undefined,
  });

  useEffect(() => {
    if (scrollRestore) {
      setTimeout(() => {
        dispatch(restoreScrollPosition({ pathname, scrollableRef }));
        setIsScrollRestored(true);
      }, scrollRestoreDelay);
    }
  }, [dispatch, scrollRestore, pathname, scrollRestoreDelay]);

  return (
    <section ref={scrollableRef} onScroll={onScroll} className={classes.Page}>
      {children}
      <div ref={triggerRef}></div>
    </section>
  );
};

export default memo(Page);