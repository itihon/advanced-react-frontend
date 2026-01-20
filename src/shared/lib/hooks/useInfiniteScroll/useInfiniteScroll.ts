import React, { useEffect } from 'react';

export interface UseInfiniteScrollArgs {
  callback?: () => void; 
  triggerRef?: React.RefObject<HTMLElement | null>;
  scrollableRef?: React.RefObject<HTMLElement | null>;
}

const useInfiniteScroll = (args: UseInfiniteScrollArgs) => {
  const { callback = () => {}, triggerRef, scrollableRef } = args;

  useEffect(() => {
    const trigger = triggerRef?.current;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        callback();
      }
    }, {
      root: scrollableRef?.current,
    });

    if (trigger) {
      observer.observe(trigger);
    }

    return () => {
      if (trigger) {
        observer.unobserve(trigger);
      }
    };
  }, [callback, scrollableRef, triggerRef]);
};

export default useInfiniteScroll;