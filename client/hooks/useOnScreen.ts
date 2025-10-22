import { useEffect, useState, useRef, MutableRefObject, useCallback } from 'react';

interface UseOnScreenOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useOnScreen<T extends HTMLElement>(
  options: UseOnScreenOptions = {}
): [(node: T | null) => void, boolean] {
  const [isIntersecting, setIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<T | null>(null);
  const wasIntersectedRef = useRef(false);

  const ref = useCallback(
    (node: T | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      elementRef.current = node;

      if (node) {
        observerRef.current = new IntersectionObserver(
          ([entry]) => {
            const isIntersecting = entry.isIntersecting;
            setIntersecting(isIntersecting);
            
            if (isIntersecting && options.triggerOnce) {
              wasIntersectedRef.current = true;
              observerRef.current?.disconnect();
            }
          },
          {
            root: options.root,
            rootMargin: options.rootMargin,
            threshold: options.threshold,
          }
        );

        observerRef.current.observe(node);
      }
    },
    [options.root, options.rootMargin, options.threshold, options.triggerOnce]
  );

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return [ref, isIntersecting || wasIntersectedRef.current];
}

export default useOnScreen;
