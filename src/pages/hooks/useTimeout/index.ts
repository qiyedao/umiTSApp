import { useEffect, useRef } from 'react';

const useTimeOut = (fn, delay) => {
  const timeRef = useRef();
  useEffect(() => {
    if (delay < 0) return;
    timeRef.current = setTimeout(() => {
      fn();
    }, delay);
  }, [delay]);
  const clear = () => {
    clearInterval(timeRef.current);
  };
  return clear;
};
export default useTimeOut;
