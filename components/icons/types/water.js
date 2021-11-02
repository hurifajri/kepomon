// External modules
import PropTypes from 'prop-types';

const Water = ({ color, size }) => (
  <svg
    aria-label="Water"
    viewBox="0 0 512.053 512.053"
    width={`${size}em`}
    height={`${size}em`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Water</title>
    <path
      d="M261.36 437.387C202.48 437.28 154.8 389.6 154.693 330.72c0-5.867-4.8-10.667-10.667-10.667s-10.667 4.8-10.667 10.667c.107 70.613 57.387 127.893 128 128 5.867 0 10.667-4.8 10.667-10.667.001-5.866-4.799-10.666-10.666-10.666z"
      fill={color}
    />
    <path
      d="M263.387 3.04c-4.16-4.053-10.773-4.053-14.827 0-6.827 6.72-168.533 166.293-168.533 329.173 0 99.2 78.933 179.84 176 179.84s176-80.64 176-179.84c0-163.84-161.707-322.453-168.64-329.173zm-7.36 487.68c-85.333 0-154.667-71.147-154.667-158.507 0-134.613 122.88-272.747 154.667-306.24 31.787 33.387 154.667 170.88 154.667 306.24-.001 87.36-69.441 158.507-154.667 158.507z"
      fill={color}
    />
  </svg>
);

Water.defaultProps = {
  color: 'var(--dark-white)',
  size: 1.5,
};

Water.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Water;
