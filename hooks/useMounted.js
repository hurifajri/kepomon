// External modules
import { useEffect, useState } from 'react';

/**
 * Hook to get mounted state
 * @returns {Boolean} The mounted state
 */
const useMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return mounted;
};

export default useMounted;
