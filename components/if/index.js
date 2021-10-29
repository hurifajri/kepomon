// External modules
import PropTypes from 'prop-types';

const If = ({ children, condition }) => {
  if (!condition) return null;

  // Render children if condition is true
  return children;
};

If.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  condition: PropTypes.bool.isRequired,
};

export default If;
