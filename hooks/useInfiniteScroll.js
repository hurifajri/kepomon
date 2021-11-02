// External modules
import { useEffect } from 'react';

// Internal modules
import { PER_PAGE, VARIABLES as variables } from '@/graphql/constants';

/**
 * Hook to use browser's event scroll
 * @param {Boolean} loading The one of conditions which must be fulfilled to run the callback
 * @param {Function} callback The callback function to execute once reach the bottom of the viewport
 */
const useInfiniteScroll = (loading, callback) => {
  let perPage = PER_PAGE;

  const scrollListener = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    // Execute callback function when the conditions are met
    if (!loading && scrollTop + clientHeight >= scrollHeight) {
      callback({ variables: { ...variables, offset: (perPage += PER_PAGE) } });
    }
  };

  useEffect(() => {
    // Add `scroll` event listener once the page is mounted
    window.addEventListener('scroll', scrollListener);

    // Clean the even when unmounted
    return () => window.removeEventListener('scroll', scrollListener);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useInfiniteScroll;
