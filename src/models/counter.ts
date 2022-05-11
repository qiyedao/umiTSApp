import { useState, useCallback } from 'react';
export default () => {
  const [count, setCount] = useState<number>(0);
  const increment = useCallback((val) => setCount((c) => c + val), []);
  const decrement = useCallback((val) => setCount((c) => c - val), []);
  return { count, increment, decrement };
};
