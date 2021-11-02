// External modules
import PropTypes from 'prop-types';

const Close = ({ color, size }) => (
  <svg
    aria-label="Close"
    viewBox="0 0 100 100"
    width={`${size}em`}
    height={`${size}em`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Close</title>
    <path
      stroke={color}
      strokeWidth="4"
      d="M20 4L3 21l30 29L3 80l17 17 29-30 30 30 16-17-30-30 30-30L80 4 50 34z"
      fill={color}
    />
  </svg>
);

Close.defaultProps = {
  color: 'var(--dark-black)',
  size: 1.5,
};

Close.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Close;
