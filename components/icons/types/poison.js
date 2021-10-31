// External modules
import PropTypes from 'prop-types';

const Poison = ({ color, size }) => (
  <svg
    aria-label="Poison"
    viewBox="0 0 360 360"
    width={`${size}em`}
    height={`${size}em`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Poison</title>

    <g>
      <path
        d="M180 0C97.157 0 30 67.157 30 150v109.667h.016c.337 13.559 7.045 22.475 19.879 26.753L105 305v30c0 13.75 11.25 25 25 25h100c13.75 0 25-11.25 25-25v-30l55.051-18.668c12.834-4.278 19.597-13.106 19.934-26.665H330V150C330 67.157 262.843 0 180 0zm120 258.063l-54.635 18.526L225 283.495V330h-90v-46.544l-20.415-6.884L60 258.168V150c0-32.053 12.482-62.188 35.147-84.853C117.813 42.482 147.947 30 180 30s62.188 12.482 84.853 35.147C287.518 87.813 300 117.947 300 150v108.063z"
        fill={color}
      />
      <path
        d="M160 281c0 11.046 8.954 20 20 20s20-8.954 20-20-20-40-20-40-20 28.954-20 40z"
        fill={color}
      />
      <path
        d="M125 161c-24.854 0-45 20.146-45 45s20.146 45 45 45 45-20.146 45-45-20.146-45-45-45zm0 60c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.729 15-15 15z"
        fill={color}
      />
      <path
        d="M190 206c0 24.854 20.146 45 45 45s45-20.146 45-45-20.147-45-45-45-45 20.146-45 45zm60 0c0 8.271-6.729 15-15 15s-15-6.729-15-15 6.729-15 15-15 15 6.729 15 15z"
        fill={color}
      />
    </g>
  </svg>
);

Poison.defaultProps = {
  color: 'var(--dark-white)',
  size: 1.5,
};

Poison.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Poison;
