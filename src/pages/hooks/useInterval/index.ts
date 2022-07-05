import { useRef, useEffect, useCallback } from 'react';
const useInterval = (fn, delay: Number) => {
  const timeRef = useRef<any>();
  const callback = useCallback(fn, [fn]);
  useEffect(() => {
    if (!delay || delay < 0) return;
    if (timeRef.current) {
      clear();
    }
    timeRef.current = setInterval(() => {
      callback();
    }, delay);
  }, [delay]);
  const clear = () => {
    clearInterval(timeRef.current);
  };
  return clear;
};
export default useInterval;
