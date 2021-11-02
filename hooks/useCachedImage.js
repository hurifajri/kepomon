// External modules
import { useEffect, useState } from 'react';

/**
 * Hook to cache image url
 * @param {String} name The name for identifier
 * @param {String} initialImage The initial image url
 * @returns {String} The image url
 */
const useCachedImage = (name, initialImage) => {
  const key = 'pokemon-images';
  const [image, setImage] = useState(initialImage);

  useEffect(() => {
    // Direct exit if no `name` is provided
    if (!name) return null;

    // Check for cached image urls
    const cachedImages = JSON.parse(localStorage.getItem(key));
    const isCached = cachedImages?.hasOwnProperty(name);

    // If image is exist in local storage, get it!
    if (isCached) {
      const cachedImage = cachedImages[name];
      setImage(cachedImage);

      // We got the data already. Retrieve!
      return image;
    }

    // Otherwise set current image urls to local storage
    localStorage.setItem(
      key,
      JSON.stringify({ ...cachedImages, [name]: initialImage })
    );
  }, [initialImage, image, name]);

  return image;
};

export default useCachedImage;
