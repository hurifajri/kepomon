/** @jsxImportSource @emotion/react */

// External modules
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// Internal modules
import { StyledHeading } from '@/components/heading/style';
import If from '@/components/if';

const Heading = forwardRef((props, ref) => {
  const { children, level, style, ...rest } = props;

  // Set level from h1 to h6
  // If level is not valid, fallback to h2
  const tag = `h${level < 7 ? level : 2}`;

  return (
    <If condition={typeof children === 'string'}>
      <StyledHeading as={tag} ref={ref} css={style} {...rest}>
        {children}
      </StyledHeading>
    </If>
  );
});

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  style: PropTypes.string,
};

export default Heading;
