/** @jsxImportSource @emotion/react */

// External modules
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// Internal modules
import { StyledCard } from '@/components/card/style';

const Card = forwardRef((props, ref) => {
  const { children, contentStyle, style, ...rest } = props;

  return (
    <StyledCard ref={ref} css={style} {...rest}>
      <div css={contentStyle}>{children}</div>
    </StyledCard>
  );
});

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  contentStyle: PropTypes.string,
  style: PropTypes.string,
};

export default Card;
