// External modules
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// Internal modules
import { headingStyle } from '@/components/heading/style';

const Heading = forwardRef((props, ref) => {
  const { children, level, css, ...rest } = props;

  // Set level from h1 to h6
  // If level is not valid, fallback to h2
  const tag = `h${level < 7 ? level : 2}`;

  // Create dynamic heading
  const heading = jsx(
    tag,
    { css: [headingStyle, css], ref, ...rest },
    children
  );

  return heading;
});

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
  css: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  level: PropTypes.number.isRequired,
};

export default Heading;
