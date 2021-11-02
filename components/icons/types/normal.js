// External modules
import PropTypes from 'prop-types';

const Normal = ({ color, size }) => (
  <svg
    aria-label="Normal"
    viewBox="0 0 29.107 29.107"
    width={`${size}em`}
    height={`${size}em`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Normal</title>
    <path
      d="M14.558,2.079c6.877,0,12.471,5.597,12.471,12.473c0,6.877-5.594,12.476-12.471,12.476
			c-6.879,0-12.478-5.599-12.478-12.476C2.08,7.676,7.679,2.079,14.558,2.079 M14.558,0C6.563,0,0,6.562,0,14.552
			c0,7.995,6.563,14.555,14.558,14.555s14.549-6.56,14.549-14.555C29.106,6.562,22.552,0,14.558,0L14.558,0z"
      fill={color}
    />
  </svg>
);

Normal.defaultProps = {
  color: 'var(--dark-white)',
  size: 1.5,
};

Normal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Normal;
