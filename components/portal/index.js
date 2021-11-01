// External modules
import { createPortal } from 'react-dom';

// Internal modules
import usePortal from '@/hooks/usePortal';

const Portal = ({ id, children }) => {
  const target = usePortal(id);
  return createPortal(children, target);
};

export default Portal;
