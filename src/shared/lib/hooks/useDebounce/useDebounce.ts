import { useCallback, useRef, useEffect } from 'react';

export default function useDebounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
) {
  const funcRef = useRef(func);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep the function reference up to date
  useEffect(() => {
    funcRef.current = func;
  }, [func]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        funcRef.current(...args);
      }, delay);
    },
    [delay]
  );
}