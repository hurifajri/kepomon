// External modules
import PropTypes from 'prop-types';

const Steel = ({ color, size }) => (
  <svg
    aria-label="Steel"
    viewBox="0 0 511.996 511.996"
    width={`${size}em`}
    height={`${size}em`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Steel</title>
    <path
      d="M240.248 345.596a8.53 8.53 0 007.953 5.47 8.654 8.654 0 003.072-.58c3.268-1.254 81.237-31.932 177.946-128.64 28.211-28.211 41.668-59.767 40.004-93.798-3.422-69.521-68.676-123.836-71.45-126.114a8.58 8.58 0 00-8.516-1.357 8.54 8.54 0 00-5.35 6.767c-.068.495-7.603 50.202-63.292 105.89a8.532 8.532 0 00-2.338 4.361c-11.554 57.796-59.213 105.464-82.142 128.393l-60.339 60.339-30.174-30.174a8.523 8.523 0 00-12.066 0c-3.337 3.328-3.337 8.73 0 12.066l28.988 28.996c-29.56 21.231-62.328 52.702-76.595 85.257-11.443-.162-22.622 4.241-30.839 12.459-16.631 16.64-16.631 43.708 0 60.339 8.32 8.32 19.243 12.476 30.174 12.476 10.931 0 21.854-4.156 30.174-12.476 8.218-8.209 12.638-19.345 12.467-30.797 27.972-12.023 55.313-36.855 85.035-76.86l17.143 17.152c8.363 8.354 12.962 19.072 12.962 30.165 0 11.102-4.599 21.82-12.962 30.174l-36.207 36.198c-8.892 8.892-19.302 13.602-30.097 13.628h-.094c-10.812 0-21.231-4.71-30.148-13.628-3.337-3.328-8.738-3.328-12.066 0a8.523 8.523 0 000 12.066c12.006 12.023 26.999 18.628 42.223 18.628h.128c15.189-.034 30.148-6.647 42.121-18.628l36.207-36.198c11.588-11.58 17.963-26.581 17.963-42.24 0-15.65-6.374-30.652-17.963-42.232l-54.306-54.306 60.356-60.356c23.774-23.774 72.866-72.883 86.263-134.554 40.329-40.951 56.482-78.831 62.694-98.893 17.775 17.638 52.719 57.941 54.997 104.294 1.425 29.013-10.359 56.226-35.021 80.896-93.909 93.901-171.247 124.484-172.023 124.783-4.395 1.699-6.571 6.64-4.882 11.034zm-39.492 9.822c-30.404 41.361-57.489 65.553-84.847 75.469a8.53 8.53 0 00-5.478 9.566c1.536 8.303-1.101 16.811-7.04 22.75-9.975 9.975-26.214 9.984-36.207 0-9.975-9.984-9.975-26.214 0-36.198 5.931-5.939 14.43-8.559 22.758-7.049 4.036.751 8.149-1.562 9.574-5.487 9.651-26.615 38.852-59.469 75.273-85.026l25.967 25.975z"
      fill={color}
    />
    <path
      d="M278.375 276.152c3.234-3.234 77.901-78.456 86.511-134.801 17.86-17.886 36.062-36.975 48.29-73.685 1.493-4.471-.922-9.31-5.385-10.795a8.494 8.494 0 00-10.795 5.393c-11.435 34.287-28.314 51.174-46.217 69.069a8.57 8.57 0 00-2.449 5.094c-5.632 50.697-81.271 126.891-82.031 127.659-3.328 3.328-3.328 8.738 0 12.066a8.54 8.54 0 0012.076 0z"
      fill={color}
    />
  </svg>
);

Steel.defaultProps = {
  color: 'var(--dark-white)',
  size: 1.5,
};

Steel.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Steel;