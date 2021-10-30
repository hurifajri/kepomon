// External modules
import { useEffect } from 'react';

// Internal modules
import { PER_PAGE, VARIABLES as variables } from '@/graphql/constants';

const useInfiniteScroll = (loading, callback) => {
  let perPage = PER_PAGE;

  const scrollListener = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (!loading && scrollTop + clientHeight >= scrollHeight) {
      callback({ variables: { ...variables, offset: (perPage += PER_PAGE) } });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);

    return () => window.removeEventListener('scroll', scrollListener);
  }, []);
};

export default useInfiniteScroll;
