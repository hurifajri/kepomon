// External modules
import PropTypes from 'prop-types';

const Ice = ({ color, size }) => (
  <svg
    aria-label="Ice"
    viewBox="0 0 24 24"
    width={`${size}em`}
    height={`${size}em`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Ice</title>
    <path
      d="M12 3v18m3-17l-3 3-3-3m0 16l3-3 3 3M4.206 7.5l15.588 9M6.572 5.402L7.67 9.5l-4.098 1.098m13.856 8L16.33 14.5l4.098-1.098M4.206 16.5l15.588-9M3.572 13.402L7.67 14.5l-1.098 4.098m13.856-8L16.33 9.5l1.098-4.098"
      fill={color}
    />
  </svg>
);

Ice.defaultProps = {
  color: 'var(--dark-white)',
  size: 1.5,
};

Ice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Ice;
