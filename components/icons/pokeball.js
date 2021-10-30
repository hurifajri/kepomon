// External modules
import PropTypes from 'prop-types';

const Pokeball = ({ size }) => (
  <svg
    aria-label="Pokeball"
    viewBox="0 0 649.18 651.56"
    width={`${size}em`}
    height={`${size}em`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Pokeball</title>
    <path
      d="M1007.12,545.21a354.12,354.12,0,0,1,24.34,56.25A323.39,323.39,0,0,1,1013,849.3c-53.62,106.54-168.42,179.59-288,180.51-120.14.92-231.84-69.38-288.12-174.54a323.79,323.79,0,0,1-34.53-104.18c-6.28-40.65-4.19-80.93,4.62-121,3.8-17.24,8.5-34.42,15.56-50.41C448.93,519.86,487.85,470,542.94,433.48,625.15,379,731,362.94,825.07,393.81,903.28,419.48,965.65,475,1007.12,545.21Z"
      transform="translate(-398.71 -378.26)"
      fill="#010101"
    />
    <path
      d="M737.49,407.42C820.58,409.91,899.9,448,959.35,525.34c36.44,47.41,55.5,101.4,59.31,161,.46,7.13-1.91,11.53-7.28,15.33-21.69,15.35-45.07,27.54-69.52,37.86A545.67,545.67,0,0,1,835,772.1c-7.42,1.46-14.9,2.59-22.33,3.95-4.32.8-6.49-.21-8.18-5-15-42.69-52.41-65.47-95.23-57-31.54,6.26-52.37,25.95-62.55,56.34-2,5.84-3.72,7.54-10.19,6.66A528.74,528.74,0,0,1,515.31,746c-29.55-11.51-57.77-25.67-83.77-44-3.23-2.29-3.94-4.74-3.83-8.29A295.24,295.24,0,0,1,578.42,445.32C623.42,420,671.85,407.48,737.49,407.42Z"
      transform="translate(-398.71 -378.26)"
      fill="#ed1e25"
    />
    <path
      d="M1005.15,772.87C972.71,904.18,852.81,1009.8,700.69,999.36,550.07,989,456,870.65,438.07,773.59c12.44,5.84,24.66,11.85,37.1,17.36,48,21.24,98.1,34.87,150,42.35a35.35,35.35,0,0,0,4.21.53c15.89.44,27.15,7.09,38.78,19.09,36.65,37.84,96.61,30.65,126-13.1a9.74,9.74,0,0,1,7.5-4.52,603.9,603.9,0,0,0,153.73-39.54c12.89-5.19,25.37-11.4,38-17.18C997,776.92,1000.55,775.11,1005.15,772.87Z"
      transform="translate(-398.71 -378.26)"
      fill="#fff"
    />
    <path
      d="M725.21,741c29.68-.09,54.31,24.24,54.34,53.7s-24.54,54-54.17,53.89a53.4,53.4,0,0,1-53.61-53.38C671.65,765,695.21,741.09,725.21,741Z"
      transform="translate(-398.71 -378.26)"
      fill="#fff"
    />
  </svg>
);

Pokeball.defaultProps = {
  size: 1.5,
};

Pokeball.propTypes = {
  size: PropTypes.number,
};

export default Pokeball;
