// External modules
import { useEffect, useState } from 'react';

const useCachedImage = (name, initialImage) => {
  // Local storage key
  const key = 'pokemon-images';

  const [image, setImage] = useState(initialImage);

  useEffect(() => {
    // Direct exit if no `name` is provided
    if (!name) return null;

    // Check for cached images
    const cachedImages = JSON.parse(localStorage.getItem(key));
    const isCached = cachedImages?.hasOwnProperty(name);

    // If image is exist in local storage, get it!
    if (isCached) {
      const cachedImage = cachedImages[name];
      setImage(cachedImage);

      return image;
    }

    // Otherwise set current image to local storage
    localStorage.setItem(
      key,
      JSON.stringify({ ...cachedImages, [name]: initialImage })
    );
  }, [initialImage, image, name]);

  return image;
};

export default useCachedImage;
