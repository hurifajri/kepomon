// External modules
import PropTypes from 'prop-types';

const Electric = ({ color, size }) => (
  <svg
    aria-label="Electric"
    viewBox="0 0 512 512"
    width={`${size}em`}
    height={`${size}em`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Electric</title>
    <path
      d="M331.464 192l77-176H147.879l-81 288H187.9l-39.53 192h58.851l268.235-304zM192.779 464h-5.149l39.529-192H109.121l63-224h187.415l-77 176h122.009z"
      fill={color}
    />
  </svg>
);

Electric.defaultProps = {
  color: 'var(--dark-white)',
  size: 1.5,
};

Electric.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Electric;
